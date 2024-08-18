import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Products";
import Product from "../Product";
import withRouter, { WithRouterProps } from "../../utils/HOCs/withRouter";
import { AnimatePresence } from "framer-motion";
import parse from "query-string";

interface Props extends WithRouterProps {}

class AnimatedRoute extends Component<Props> {
	render() {
		const { location } = this.props;
		const locationKey = `${location.pathname}${JSON.stringify(
			parse.parse(location.search)
		)}`;
		return (
			<AnimatePresence>
				<Routes location={location} key={locationKey}>
					<Route path="/" element={<Products />} />
					<Route path="/:product_id" element={<Product />} />
				</Routes>
			</AnimatePresence>
		);
	}
}

export default withRouter(AnimatedRoute);
