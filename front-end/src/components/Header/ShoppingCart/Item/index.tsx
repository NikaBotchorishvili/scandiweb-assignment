import { Component } from "react";
import SizeSelector from "../../../Product/components/SizeSelector";
import ColorSelector from "../../../Product/components/ColorSelector";
import { Item } from "../../../../context/CartContext/types";
import QuantityController from "./QuantityController";
interface Props {
	item: Item;
}

export default class ShoppingListItem extends Component<Props> {
	render() {
		const { item } = this.props;
		const sizeAttr = item.attributes.find((attr) => attr.name === "Size");
		const colorAttr = item.attributes.find((attr) => attr.name === "Color");

		return (
			<li key={item.id} className="flex items-stretch gap-4">
				<div className="flex flex-col gap-y-2 w-[60%] justify-between">
					<span className="font-medium">{item.name}</span>
					<span className="text-gray-600">
						{item.prices[0].amount} {item.prices[0].currency.symbol}
					</span>
					{sizeAttr && (
						<SizeSelector
							attributes={sizeAttr}
							listStyles={{
								display: "flex",
								gap: "5px",
								flexWrap: "wrap",
							}}
							listItemStyles={{
								padding: "8px",
								flexGrow: "unset",
							}}
						/>
					)}
					{colorAttr && <ColorSelector attributes={colorAttr} />}
				</div>
				<QuantityController quantity={item.quantity} id={item.id} />
				<img
					className="w-[80px] my-auto h-full object-contain"
					src={item.thumbnail}
					alt={item.name}
				/>
			</li>
		);
	}
}