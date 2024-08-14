import { Component } from 'react'
import withRouter, { WithRouterProps } from '../../utils/withRouter'

interface Props extends WithRouterProps {}

class Products extends Component<Props> {
  render() {
    return (
      <div>Products</div>
    )
  }
}

export default withRouter(Products)