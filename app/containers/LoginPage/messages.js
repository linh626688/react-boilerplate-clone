/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LoginPage container!',
  },
  pageTitle: {
    id: `${scope}.pageTitle`,
    defaultMessage: 'QUOTE. BOOK. TRACK.',
  },
  adminLogin: {
    id: `${scope}.adminLogin`,
    defaultMessage: 'admin log in',
  },
  formUsername: {
    id: `${scope}.formUsername`,
    defaultMessage: 'Username*',
  },
  formPassword: {
    id: `${scope}.formPassword`,
    defaultMessage: 'Password*',
  },
  formSubmitBtn: {
    id: `${scope}.formSubmitBtn`,
    defaultMessage: 'Log in',
  },
  formMessageRequired: {
    id: `${scope}.formMessageRequired`,
    defaultMessage: 'This field is required.',
  },
  formMessageInvalidEmail: {
    id: `${scope}.formMessageInvalidEmail`,
    defaultMessage: 'Invalid email address format used',
  },
  signUpBtn: {
    id: `${scope}.signUpBtn`,
    defaultMessage: 'Sign up',
  },
});
