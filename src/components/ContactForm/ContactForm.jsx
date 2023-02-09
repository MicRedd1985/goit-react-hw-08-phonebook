import { useState } from 'react';
import { Form, Button } from './ContactForm.styled.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selector';

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
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, phone }));

    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="nameInputId">
        Name
        <input
          type="text"
          name="name"
          value={name}
          id="nameInputId"
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="numberInputId">
        Number
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          id="numberInputId"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      
      <Button type="submit">
        Add contact
      </Button>
      </Form>
      
    
  );
};

export default ContactForm ;
