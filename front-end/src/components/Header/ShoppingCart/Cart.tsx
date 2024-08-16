import { motion } from "framer-motion";
import { Component } from "react";
import { CartContext } from "../../../context/CartContext";
import { ContextType } from "../../../context/CartContext/types";
import ShoppingListItem from "./Item";
import Button from "../../ui/Button";

export default class Cart extends Component {
	static contextType = CartContext;
	context!: ContextType;

	render() {
		const { items } = this.context;

		return (
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="absolute z-[10000] py-5 px-4 box-border bg-white w-[350px] left-[200%] -translate-x-full top-[200%] shadow-lg rounded-lg overflow-hidden"
			>
				<div className="w-full ">
					{items.length === 0 ? (
						<article className="text-center text-gray-600">
							No items in cart
						</article>
					) : (
						<div className="flex  w-full flex-col gap-y-5">
							<h3 className="text-lg font-semibold mb-4">
								My bag:{" "}
								<span className="font-normal">
									{items.reduce(
										(acc, val) => acc + val.quantity,
										0
									)}{" "}
									Items
								</span>
							</h3>

							<ul className="space-y-4">
								{items.map((item, idx) => {
									return (
										<ShoppingListItem
											key={`cart-item-${idx}`}
											item={item}
										/>
									);
								})}
							</ul>
							<h3 className="w-full flex text-xl font-bold justify-between items-center">
								<span className="">Total:</span>
								<span>
									$
									{items.reduce(
										(prev, curr) =>
											prev +
											curr.prices[0].amount *
												curr.quantity,
										0
									)}
								</span>{" "}
							</h3>
							<Button onSubmit={this.context.order}>
								Place order
							</Button>
						</div>
					)}
				</div>
			</motion.section>
		);
	}
}
