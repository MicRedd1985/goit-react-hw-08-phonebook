import LoginForm from 'components/LoginForm/LoginForm';
import Section from 'components/Section/Section';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>log in</title>
        </Helmet>
      </HelmetProvider>
      <Section title="Log In">
        <LoginForm />
      </Section>
    </>
  );
};

export default Login;