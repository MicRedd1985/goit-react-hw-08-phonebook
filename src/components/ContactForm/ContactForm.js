import { Box } from '@mui/material';
import { ColorButton, StyledInput } from 'components/styled/styledMui';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selector';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const storeContacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const alertContact = storeContacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    alertContact.length
      ? toast.error(`${name} is already in contacts`)
      : dispatch(addContact({ name, number: phone }));

    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
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
    >
      <StyledInput
        label="Name"
        id="standard-search"
        variant="standard"
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <StyledInput
        label="Number"
        id="standard-search"
        variant="standard"
        type="tel"
        name="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <ColorButton
        sx={{ width: '18ch', ml: 'auto', mr: 'auto' }}
        type="submit"
        >
        Add contact
      </ColorButton>
    </Box>
  );
};

export default ContactForm;
