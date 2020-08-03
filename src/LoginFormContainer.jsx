import React from 'react';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const loginFields = {
    email: '',
    password: '',
  };

  const handleChange = () => {
    // TODO
  };

  const handleSubmit = () => {
    // TODO
  };
  return (
    <div>
      <h2>Log In</h2>
      <LoginForm
        fields={loginFields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
