/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header.SignUp';

export default defineMessages({
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Log in',
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign Up',
  },
});
