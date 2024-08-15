import React, { Component } from 'react'
import withRouter, { WithRouterProps } from '../../utils/withRouter'

interface Props extends WithRouterProps {

}

class Product extends Component<Props> {
  render() {
    return (
      <div>Product</div>
    )
  }
}

export default withRouter(Product)
