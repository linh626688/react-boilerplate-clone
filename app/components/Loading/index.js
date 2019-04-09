import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import { LoadingSpinner } from './style'

export class Loading extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { loading } = this.props
    if (loading) {
      return (
        <LoadingSpinner>
          <CircularProgress size={50} thickness={5} />
        </LoadingSpinner>
      )
    }
    return ''
  }
}
