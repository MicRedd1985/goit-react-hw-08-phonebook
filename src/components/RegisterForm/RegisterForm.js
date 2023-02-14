import { Box } from '@mui/material';
import { ColorButton, StyledInput } from 'components/styled/styledMui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };
  const reset = () => {
    setName('');
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
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <StyledInput
        label="Name"
        id="standard-search1"
        variant="standard"
        type="text"
        value={name}
        name="name"
        onChange={e => setName(e.target.value)}
        required
        autoComplete="off"
      />

      <StyledInput
        label="Email"
        id="standard-search2"
        variant="standard"
        type="email"
        value={email}
        name="email"
        onChange={e => setEmail(e.target.value)}
        required
        autoComplete="off"
      />
      <StyledInput
        label="Password"
        id="standard-search3"
        variant="standard"
        type="password"
        value={password}
        name="password"
        onChange={e => setPassword(e.target.value)}
        required
        autoComplete="off"
      />
      <ColorButton type="submit">Register</ColorButton>
    </Box>
  );
};

export default RegisterForm;