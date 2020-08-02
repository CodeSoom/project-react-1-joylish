import React from 'react';

import {
  EmailLabel,
  PasswordLabel,
  LoginButton,
} from './style/LoginFormContainer';

export default function LoginForm({ onChange, onSubmit }) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <>
      <div>
        <EmailLabel htmlFor="login-email">Email</EmailLabel>
        <input
          type="email"
          id="login-email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <PasswordLabel htmlFor="login-password">Password</PasswordLabel>
        <input
          type="password"
          id="login-password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <LoginButton
        type="button"
        onClick={onSubmit}
      >
        Login
      </LoginButton>
    </>
  );
}
