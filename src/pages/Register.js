import RegisterForm from 'components/RegisterForm/RegisterForm';
import Section from 'components/Section/Section';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Register = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>register</title>
        </Helmet>
      </HelmetProvider>
      <Section title="Sing Up">
        <RegisterForm />
      </Section>
    </>
  );
};

export default Register;