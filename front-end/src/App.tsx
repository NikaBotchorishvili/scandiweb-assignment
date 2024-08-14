import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import { ContextType, CartContext } from "./context/CartContext";
import { AnimatePresence } from "framer-motion";
import Products from "./components/Products";

export default class App extends Component {
	static contextType = CartContext;
	context!: ContextType;
	render() {
		return (
			<Router >
				<Header />
				<AnimatePresence>
					{this.context.cartToggled && <Overlay />}
				</AnimatePresence>
				<Routes>
					<Route path="/" element={<Products />} />
				</Routes>
			</Router>
		);
	}
}
