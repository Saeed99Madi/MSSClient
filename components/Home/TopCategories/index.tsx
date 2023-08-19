import { Typography } from '@mui/material';
import {
  BlackButton,
  BlackCard,
  BlackCardInfo,
  BlackCardOverview,
  CategoriesList,
  GrayButton,
  ImageWrapper,
  TopCategoriesContainer,
  WhiteButton,
  YellowCard,
  RedCard,
} from './components.styled';
// type Props = {
//   error: { error: string };
// };background:'linear-gradient(90deg, #FF5362 0%, #E52535 100%)'

const TopCategories = () => {
  return (
    <TopCategoriesContainer>
      <Typography
        sx={{ textAlign: 'center', fontSize: '1.5rem', padding: '1.5rem' }}
      >
        Top Categories
      </Typography>
      <CategoriesList>
        <BlackCard
          sx={{
            height: {
              xs: '16rem',
              sm: '18rem',
              md: '20rem',
              l: '29rem',
              xl: '30rem',
            },
            width: {
              xs: '10rem',
              sm: '12rem',
              md: '14rem',
              l: '18rem',
              xl: '20rem',
            },
          }}
        >
          <BlackCardInfo
            sx={{
              height: {
                xs: '50%',
                sm: '50%',
                md: '50%',
                l: '50%',
                xl: '50%',
              },
            }}
          >
            <img
              style={{ width: '40%', height: '100%', marginTop: '0.7rem' }}
              src="https://images.unsplash.com/photo-1605980413988-9ff24c537935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="Solar Food"
            />
            <BlackCardOverview>
              <Typography
                sx={{
                  fontSize: {
                    xs: '16px',
                    sm: '16px',
                    md: '20px',
                    l: '24px',
                    xl: '28px',
                  },
                  fontWeight: '300',
                  marginTop: '0.7rem',
                  color: '#FFFFFF',
                }}
              >
                Category Name
              </Typography>
              <Typography
                sx={{
                  width: {
                    xs: 'auto',
                    sm: 'auto',
                    md: 'auto',
                    l: 'auto',
                    xl: 'auto',
                  },
                  color: '#F6CD06',
                  fontSize: {
                    xs: '11px',
                    sm: '11px',
                    md: '16px',
                    l: '16px',
                    xl: '1.5rem',
                  },
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit,
              </Typography>
            </BlackCardOverview>
          </BlackCardInfo>
          <GrayButton sx={{ marginTop: 'auto', marginBottom: '1rem' }}>
            More Info
          </GrayButton>
        </BlackCard>

        <YellowCard
          sx={{
            height: {
              xs: '14rem',
              sm: '16rem',
              md: '18rem',
              l: '27rem',
              xl: '28rem',
            },
            width: {
              xs: '10rem',
              sm: '12rem',
              md: '14rem',
              l: '18rem',
              xl: '20rem',
            },
          }}
        >
          <ImageWrapper
            sx={{
              height: '50%',
              background: 'linear-gradient(to right, #FFFFFF, #F6CD06)',
            }}
          >
            <img
              style={{
                width: '99%',
                height: '99.8%',
                marginTop: 'auto',
              }}
              src="https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
              alt="solar legs"
            />
          </ImageWrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                width: '70%',
                textAlign: 'center',
                color: '#FFFFFF',
                fontWeight: '300',
                fontSize: {
                  xs: '16px',
                  sm: '16px',
                  md: '20px',
                  l: '24px',
                  xl: '28px',
                },
              }}
            >
              Category Name
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '11px',
                  sm: '11px',
                  md: '16px',
                  l: '16px',
                  xl: '1.5rem',
                },
                width: '80%',
                textAlign: 'center',
              }}
            >
              Lorem ipsum dolor amet consectetur elit.
            </Typography>
            <BlackButton>More Info</BlackButton>
          </div>
        </YellowCard>

        <RedCard
          sx={{
            height: {
              xs: '14rem',
              sm: '16rem',
              md: '18rem',
              l: '27rem',
              xl: '28rem',
            },
            width: {
              xs: '10rem',
              sm: '12rem',
              md: '14rem',
              l: '18rem',
              xl: '20rem',
            },
          }}
        >
          <ImageWrapper sx={{ height: '50%' }}>
            <img
              style={{
                width: '99%',
                height: '99.8%',
                marginBottom: 'auto',
              }}
              src="https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
              alt="solar legs"
            />
          </ImageWrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                width: '70%',
                textAlign: 'center',
                fontWeight: '300',
                fontSize: {
                  xs: '16px',
                  sm: '16px',
                  md: '20px',
                  l: '24px',
                  xl: '28px',
                },
              }}
            >
              Category Name
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '11px',
                  sm: '11px',
                  md: '16px',
                  l: '16px',
                  xl: '1.5rem',
                },
                width: '80%',
                textAlign: 'center',
              }}
            >
              Lorem ipsum dolor amet consectetur elit.
            </Typography>
            <WhiteButton>More Info</WhiteButton>
          </div>
        </RedCard>
      </CategoriesList>
    </TopCategoriesContainer>
  );
};

export default TopCategories;
