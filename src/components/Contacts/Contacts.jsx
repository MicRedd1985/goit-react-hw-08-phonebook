import React from 'react';
import { Button } from './Contacts.styled.jsx';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selector';

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {contacts.map(({ id, name, phone }) => (
        <div key={id}>
          <p>
            {name}: {phone}
          </p>

          <Button type="button" onClick={() => onDelContact(id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};
Contacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
