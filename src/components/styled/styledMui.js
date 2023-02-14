import { Button, ListItemButton, TextField, styled } from '@mui/material';

export const ColorLinkButton = styled(ListItemButton)(() => ({
  width: '100px',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    borderRadius: `8px`,
    backgroundColor: 'rgba(132, 88, 179, 0.3)',
    color: '#e5eaf5',
  },
  '&.active': {
    backgroundColor: 'rgba(132,88,179, 0.5)',
    color: 'neutral.main',
    borderRadius: `8px`,
  },
}));

export const StyledInput = styled(TextField)({
  marginBottom: '32px',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#8458B3',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#8458B3',
    },
  },
});

export const ColorButton = styled(Button)(() => ({
  color: 'inherit',
  padding: '5px',
  border: '1px solid rgb(132, 88, 179)',
  borderRadius: `8px`,
  '&:hover': {
    backgroundColor: `#42a5f5`,
    color: `#fff`,
    border: `1px solid rgba(132, 88, 179, 0.5)`,
  },
}));

