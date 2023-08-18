import React, { FC } from 'react';
import { Box, Input, InputAdornment, Stack, Typography } from '@mui/material';
import {
  CustomEmailIcon,
  IconWrapper,
  InputContainer,
  RedButton,
  SubscribeContainer,
  SubscribeTitle,
} from './components.styled';

interface Props {
  handleSubscribe: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  sendEmail: () => void;
  success: string;
  error: string;
}

const Subscribe: FC<Props> = ({
  handleSubscribe,
  email,
  sendEmail,
  success,
  error,
}) => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 0rem',
        gap: '3rem',
      }}
    >
      <Typography
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'center',
            md: 'left',
            l: 'left',
            xl: 'left',
          },
        }}
        variant="h4"
      >
        Subscribe to receive all new
      </Typography>
      <SubscribeContainer>
        <InputContainer>
          <Input
            disableUnderline
            placeholder="example@gmail.com"
            onChange={handleSubscribe}
            type="email"
            value={email}
            startAdornment={
              <InputAdornment position="start">
                <CustomEmailIcon />
              </InputAdornment>
            }
          />
          <RedButton onClick={() => sendEmail()}>Subscribe Now</RedButton>
        </InputContainer>
        <IconWrapper />
        {success && (
          <Typography
            sx={{
              m: '10px 0 0 40px',
              color: 'green',
            }}
          >
            {success}
          </Typography>
        )}
        {error && (
          <Typography
            sx={{
              m: '10px 0 0 40px',
              color: 'red',
            }}
          >
            {error}
          </Typography>
        )}
      </SubscribeContainer>
    </Stack>
  );
};

export default Subscribe;
