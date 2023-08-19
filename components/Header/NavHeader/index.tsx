/* eslint-disable no-restricted-globals */
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

import { Typography } from '@mui/material';

import { Axios } from '../../../config';
import { ICategory } from '../../../interfaces/ICategory';

import {
  AppsIconNav,
  CloseIconNav,
  Diversity1IconNav,
  HomeIconNav,
  HomeRepairServiceIconNav,
  Navigations,
  NavItems,
} from '../components.styled';

export const NavHeader = () => {
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    (async () => {
      const response = await Axios.get('/categories');

      setCategories(response.data.data);
    })();
  }, []);

  useEffect(() => {}, [categories]);

  const menuDisActive = (path: string) => {
    setActive(false);
    if (location.pathname === '/' && path === '/') {
      location.href = '#home';
    } else if (location.pathname !== '/') {
      location.href = `/${path}`;
    } else {
      location.href = path;
    }
  };
  const menuActive = () => {
    setActive(true);
  };

  const { t } = useTranslation('home');

  return (
    <>
      <Navigations
        sx={{ ml: active ? 'auto' : 15 }}
        className={active ? 'navigation active' : 'navigation'}
      >
        <NavItems className="nav-items">
          <CloseIconNav onClick={() => menuDisActive('/')} />

          <Typography
            sx={{ cursor: 'pointer' }}
            onClick={() => menuDisActive('#home')}
          >
            <HomeIconNav />
            {t('Home')}
          </Typography>
          <Typography
            sx={{ cursor: 'pointer' }}
            onClick={() => menuDisActive('#contact')}
          >
            <Diversity1IconNav />
            {t('Contact Us')}
          </Typography>
          <Typography
            sx={{ cursor: 'pointer' }}
            onClick={() => menuDisActive('#services')}
          >
            <HomeRepairServiceIconNav />
            {t('who we are')}
          </Typography>
        </NavItems>
      </Navigations>
      <AppsIconNav onClick={menuActive} />
    </>
  );
};
