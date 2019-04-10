/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.components.Header.AccountBtn'

export default defineMessages({
  account: {
    id: `${scope}.account`,
    defaultMessage: 'Account',
  },
  accountSettings: {
    id: `${scope}.accountSettings`,
    defaultMessage: 'Account settings',
  },
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: 'Change Password',
  },
  logOut: {
    id: `${scope}.logOut`,
    defaultMessage: 'Log out',
  },
})
