import { Component } from "react";
import { motion } from "framer-motion";
import { CartContext, ContextType } from "../context/CartContext";
export default class Overlay extends Component {
	static contextType = CartContext;
	context!: ContextType;
	render() {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute z-[10] inset-0 bg-black w-dvw h-dvh bg-opacity-40"
				onClick={this.context.toggleCart}
			></motion.div>
		);
	}
}
