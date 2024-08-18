import { Component } from "react";
import withRouter, { WithRouterProps } from "../../utils/HOCs/withRouter";

import ProductDetailsProvider from "../../context/ProductDetails";
import ProductDetails from "./components/ProductDetails";
interface Props extends WithRouterProps {}

class Product extends Component<Props> {
	render() {
		return (
			<ProductDetailsProvider>
				<ProductDetails />
			</ProductDetailsProvider>
		);
	}
}

export default withRouter(Product);
