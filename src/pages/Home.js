import { Box } from '@mui/material';
import Section from 'components/Section/Section';
import ContactsIcon from '@mui/icons-material/Contacts';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pt: '32px',
        flexDirection: 'column',
      }}
    >
      <Section title="WELCOME TO PHONEBOOK!">
        {}
        <ContactsIcon fontSize="large" htmlColor='#42a5f5'/>
      </Section>
    </Box>
  );
};
export default Home;