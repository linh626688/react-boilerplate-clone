/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.components.Header.SignUp'

export default defineMessages({
  signUpAs: {
    id: `${scope}.signUpAs`,
    defaultMessage: 'Sign up as',
  },
  shipper: {
    id: `${scope}.shipper`,
    defaultMessage: 'Shipper',
  },
  carrier: {
    id: `${scope}.carrier`,
    defaultMessage: 'Carrier',
  },
})
