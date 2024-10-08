import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import Cart from "./Cart";
import {  ContextType } from "../../../context/CartContext/types";
import { CartContext } from "../../../context/CartContext";
import { AnimatePresence } from "framer-motion";

export default class ShoppingCart extends Component {
	static contextType = CartContext;
	context!: ContextType;

	render() {
		return (
			<div className="relative">
				<FontAwesomeIcon
					onClick={this.context.toggleCart}
					icon={faShoppingCart}
					data-testid='cart-btn'
					className="cursor-pointer"
				/>
				<AnimatePresence>
					{this.context.cartToggled && <Cart />}
				</AnimatePresence>
			</div>
		);
	}
}
