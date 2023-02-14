import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selector';
import { ColorButton } from 'components/styled/styledMui';
import { List, ListItem, Typography } from '@mui/material';

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List sx={{ ml: 'auto', mr: 'auto', width: '48ch' }}>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 0,
            mb: '16px',
            width: '100%',
          }}
        >
          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {name}: <span>{number}</span>
          </Typography>

          <ColorButton
            sx={{ width: '8ch', fontSize: '12px' }}
            type="button"
            onClick={() => onDelContact(id)}
          >
            Delete
          </ColorButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
