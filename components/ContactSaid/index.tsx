import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Typography } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import {
  BoxColumn,
  ContactCard,
  ContactContainer,
  GrediantGreenPargraph,
  GrediantPargraph,
  IconWrapper,
  CustomButton,
  ReflectedIconWrapper,
  Spot,
} from './components.styled';
import ContactForm from './ContactForm';
import { Axios } from '../../config';

const ConatctWithForms = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [whatsNumber, setWhatsNumber] = useState<string>('');

  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const getWhatsNumber = async () => {
    try {
      const { data } = await Axios.get('/adminData');
      setWhatsNumber(data.data.phone.split('+')[1]);
    } catch (error) {
      router.push('/Errors/ServerError');
    }
  };

  useEffect(() => {
    getWhatsNumber();
  }, []);

  return (
    <ContactContainer>
      <ContactCard>
        <Spot hoverForm={false} whatsapp={false} />
        <BoxColumn sx={{ gap: '1rem' }}>
          <BoxColumn>
            <IconWrapper>
              <AlternateEmailIcon
                sx={{ color: '#FFFFFF', fontSize: '3rem', margin: '0' }}
              />
            </IconWrapper>
            <Typography
              sx={{
                margin: '0',
                fontSize: '1.5rem',
                color: '#FFFFFF',
              }}
            >
              Contct Us
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', color: '#FFFFFF' }}>
              By Contact
            </Typography>
            <GrediantPargraph>Form</GrediantPargraph>
          </BoxColumn>
          <BoxColumn sx={{ gap: '1rem' }}>
            <CustomButton
              onClick={handleClickOpen}
              sx={{
                width: '100%',
                background: 'linear-gradient(90deg, #EA4335 0%, #2E7DFF 100%)',
              }}
            >
              Contact Us
            </CustomButton>
          </BoxColumn>
        </BoxColumn>
      </ContactCard>
      <ContactCard>
        <Spot hoverForm={false} whatsapp />
        <BoxColumn sx={{ gap: '1rem' }}>
          <BoxColumn>
            <ReflectedIconWrapper>
              <WhatsAppIcon
                sx={{ color: '#FFFFFF', fontSize: '3rem', margin: '0' }}
              />
            </ReflectedIconWrapper>
            <Typography
              sx={{
                margin: '0',
                fontSize: '1.5rem',
                color: '#FFFFFF',
              }}
            >
              Contct Us
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', color: '#FFFFFF' }}>
              By Contact
            </Typography>
            <GrediantGreenPargraph>whatsApp</GrediantGreenPargraph>
          </BoxColumn>
          <BoxColumn sx={{ gap: '1rem' }}>
            <CustomButton
              sx={{
                width: '100%',
                background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
              }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#FFFFFF',
                }}
                // eslint-disable-next-line prefer-template
                href={'https://api.whatsapp.com/send?phone=' + whatsNumber}
                target="_blank"
              >
                Contact Us
              </Link>
            </CustomButton>
          </BoxColumn>
        </BoxColumn>
      </ContactCard>
      <ContactForm open={open} setOpen={setOpen} />
    </ContactContainer>
  );
};

export default ConatctWithForms;
