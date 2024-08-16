import { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import { CartContext } from "./context/CartContext";
import { ContextType } from "./context/CartContext/types";
import { AnimatePresence } from "framer-motion";
import AnimatedRoute from "./components/AnimatedRoutes";

export default class App extends Component {
	static contextType = CartContext;
	context!: ContextType;
	render() {
		return (
			<Router>
				<Header />
				<AnimatePresence>
					{this.context.cartToggled && <Overlay />}
				</AnimatePresence>
				<AnimatedRoute />
			</Router>
		);
	}
}
