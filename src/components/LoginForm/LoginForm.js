import { Box } from '@mui/material';
import { ColorButton, StyledInput } from 'components/styled/styledMui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <Box
      component="form"
      sx={{
        width: '48ch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mb: '32px',
        ml: 'auto',
        mr: 'auto',
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <StyledInput
        label="Email"
        id="standard"
        variant="standard"
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <StyledInput
        label="Password"
        id="standard-adornment-password"
        variant="standard"
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <ColorButton type="submit">Log In</ColorButton>
    </Box>
  );
};

export default LoginForm;