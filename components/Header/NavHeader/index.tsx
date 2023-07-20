import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

import { Axios } from '../../../config';
import { ICategory } from '../../../interfaces/ICategory';

import {
  AppsIconNav,
  CloseIconNav,
  Diversity1IconNav,
  HomeIconNav,
  HomeRepairServiceIconNav,
  NavigationAnchor,
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
  const menuDisActive = () => {
    setActive(false);
  };
  const menuActive = () => {
    setActive(true);
  };

  const { t } = useTranslation('home');

  return (
    <>
      <Navigations className={active ? 'navigation active' : 'navigation'}>
        <NavItems className="nav-items">
          <CloseIconNav onClick={menuDisActive} />

          <NavigationAnchor href="/" onClick={menuDisActive}>
            <HomeIconNav />
            {t('Home')}
          </NavigationAnchor>
          <NavigationAnchor href="/contacts" onClick={menuDisActive}>
            <Diversity1IconNav />
            {t('Contact Us')}
          </NavigationAnchor>
          <NavigationAnchor href="/contacts" onClick={menuDisActive}>
            <HomeRepairServiceIconNav />
            {t('who we are')}
          </NavigationAnchor>
        </NavItems>
      </Navigations>
      <AppsIconNav onClick={menuActive} />
    </>
  );
};
