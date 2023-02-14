import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selector';
import ContactForm from 'components/ContactForm/ContactForm';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import { Box } from '@mui/material';
import { LinearIndeterminate } from 'components/Loader/Loader';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Filter from 'components/Filter/Filter';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
      </HelmetProvider>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          {isLoading && !error && <LinearIndeterminate />}
          <Contacts />
        </Section>
      </Box>
    </>
  );
};

export default ContactsView;