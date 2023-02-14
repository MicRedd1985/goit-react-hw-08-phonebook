import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Avatar, Box, Typography } from '@mui/material';
import { ColorButton } from 'components/styled/styledMui';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Avatar
        sx={{
          backgroundColor: 'rgba(132,88,179, 0.1)',
          color: 'inherit',
          border: '1px solid #a28089',
        }}
        size="sm"
      >
        {user.name.charAt()}
      </Avatar>
      <Typography>Welcome, {user.name}!</Typography>
      <ColorButton
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </ColorButton>
    </Box>
  );
};
export default UserMenu;