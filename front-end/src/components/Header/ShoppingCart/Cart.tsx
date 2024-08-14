import { motion } from "framer-motion";
import { Component } from "react";
import { CartContext, ContextType } from "../../../context/CartContext";

export default class Cart extends Component {
	static contextType = CartContext;
	context!: ContextType;
	render() {
        console.log(this.context.items)
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute z-[10000] bg-white w-[200px] left-1/2 -translate-x-1/2 translate-y-1/2"
			>
				<div className="bg-white py-5 px-2 box-border w-max">
					{this.context.items.length === 0 ? (
						<div className="">No items in cart</div>
					) : (
						<>Cart</>
					)}
				</div>
			</motion.div>
		);
	}
}
