import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Box, Container } from '@mui/material';

const AppBarView = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Container>
    </AppBar>
  );
};
export default AppBarView;