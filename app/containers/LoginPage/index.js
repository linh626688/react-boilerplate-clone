/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Grid } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Layout from '../../components/Layout';
import { UserLoginWrapper } from './style';
import { Loading } from '../../components/Loading';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  handleChangeField = () => {};

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <Layout>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <UserLoginWrapper>
          <Grid container className="wider">
            <Grid item lg={4} md={4} />
            <Grid item lg={8} md={8}>
              <ValidatorForm
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
                className="kn-form"
              >
                <Grid container className="wider">
                  <Grid item md={6}>
                    <h1 className="heading-primary">
                      <FormattedMessage {...messages.adminLogin} />
                    </h1>
                    <Grid container spacing={16}>
                      <Grid item xs={12}>
                        <TextValidator
                          fullWidth
                          type="text"
                          label={formatMessage(messages.formUsername)}
                          onChange={this.handleChangeField}
                          name="username"
                          value="user"
                          validators={['required', 'isEmail']}
                          errorMessages={[
                            `${formatMessage(messages.formMessageRequired)}`,
                            `${formatMessage(
                              messages.formMessageInvalidEmail,
                            )}`,
                          ]}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          fullWidth
                          type="password"
                          label={formatMessage(messages.formPassword)}
                          onChange={this.handleChangeField}
                          name="password"
                          value="password"
                          validators={['required']}
                          errorMessages={[
                            `${formatMessage(messages.formMessageRequired)}`,
                          ]}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <div className="horizontal_line" />
                      </Grid>
                      <Grid item xs={12}>
                        <button type="submit" className="btn btn-primary">
                          <FormattedMessage {...messages.formSubmitBtn} />
                        </button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </Grid>
          </Grid>
          <Loading loading={false} />
        </UserLoginWrapper>
      </Layout>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(LoginPage);
