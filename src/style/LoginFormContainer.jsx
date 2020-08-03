import styled from '@emotion/styled';

const EmailLabel = styled.label((htmlFor) => ({
  marginRight: '2.4em',
  htmlFor,
}));

const PasswordLabel = styled.label((htmlFor) => ({
  htmlFor,
  marginRight: '1em',
}));

const LoginButton = styled.button(() => ({
  display: 'table',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '2em',
  padding: '.4em 7em',
  border: '1px solid #CCC',
  color: '#333',
  background: '#EEE',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '#000',
    fontWeight: 'bold',
    background: 'palegreen',
  },
}));

export {
  EmailLabel,
  PasswordLabel,
  LoginButton,
};
