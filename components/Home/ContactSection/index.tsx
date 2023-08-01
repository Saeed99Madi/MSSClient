import { useState } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

import {
  BoxColumn,
  ContactCard,
  ContactContainer,
  GrediantGreenPargraph,
  GrediantPargraph,
  IconWrapper,
  ImageIcon,
  CustomButton,
  ReflectedIconWrapper,
} from './components.styled';
import ContactForm from '../../ContactSaid/ContactForm';

const ContactSection = () => {
  const [openForm, SetOpenForm] = useState<boolean>(false);

  return (
    <ContactContainer id="contact">
      <ContactForm open={openForm} setOpen={SetOpenForm} />
      <ContactCard>
        <IconWrapper>
          <ImageIcon
            src="https://ik.imagekit.io/a83g0okds/contact.png?updatedAt=1685026476193"
            alt="contact"
          />
        </IconWrapper>
        <BoxColumn sx={{ gap: '1rem' }}>
          <BoxColumn>
            <Typography
              sx={{
                margin: '0',
                fontSize: '2.5rem',
                color: '#FFFFFF',
              }}
            >
              Contct Us By
            </Typography>
            <GrediantPargraph>Contact Form</GrediantPargraph>
          </BoxColumn>
          <BoxColumn sx={{ gap: '1rem' }}>
            <Typography sx={{ width: '80%', color: '#FFFFFF' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              adipisci temporibus perspiciatis iste perferendis odio minus,
              iusto itaque aut assumenda distinctio reiciendis alias quisquam.
              Minima commodi natus fuga amet nihil!
            </Typography>
            <CustomButton
              sx={{
                background: 'linear-gradient(90deg, #EA4335 0%, #2E7DFF 100%)',
              }}
              onClick={() => SetOpenForm(true)}
            >
              Contact Us
            </CustomButton>
          </BoxColumn>
        </BoxColumn>
      </ContactCard>
      <ContactCard>
        <ReflectedIconWrapper>
          <ImageIcon
            src="https://ik.imagekit.io/a83g0okds/whatsapp.png?updatedAt=1685026476302"
            alt="contact"
          />
        </ReflectedIconWrapper>
        <BoxColumn sx={{ gap: '1rem' }}>
          <BoxColumn>
            <Typography
              sx={{ margin: '0', fontSize: '2.5rem', color: '#FFFFFF' }}
            >
              Contct Us By
            </Typography>
            <GrediantGreenPargraph>whatsApp</GrediantGreenPargraph>
          </BoxColumn>
          <BoxColumn sx={{ gap: '1rem' }}>
            <Typography sx={{ width: '80%', color: '#FFFFFF' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              adipisci temporibus perspiciatis iste perferendis odio minus,
              iusto itaque aut assumenda distinctio reiciendis alias quisquam.
              Minima commodi natus fuga amet nihil!
            </Typography>
            <CustomButton
              sx={{
                background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
              }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#FFFFFF',
                }}
                href="https://api.whatsapp.com/send?phone=970599266293"
                target="_blank"
              >
                Contact Us
              </Link>
            </CustomButton>
          </BoxColumn>
        </BoxColumn>
      </ContactCard>
    </ContactContainer>
  );
};

export default ContactSection;
