import { Component } from "react";
import { Attributes } from "../../../context/CartContext/types";
import {
	ProductDetailsContextType,
	ProductDetailsContext,
} from "../../../context/ProductDetails";
interface Props {
	attributes: Attributes[];
}

export default class SizeSelector extends Component<Props> {
	static contextType = ProductDetailsContext;
	context!: ProductDetailsContextType;
	render() {
		const { attributes } = this.props;
		const { selectSize, size } = this.context;
		return (
			<article className="space-y-2">
				<h2 className="uppercase text-xl font-bold">SIZE:</h2>

				<ul className="flex gap-10">
					{attributes[0].items.map((item) => (
						<li
							className={`flex items-center justify-center grow border border-primary  aspect-square text-center ${
								item.value === size
									? "bg-primary text-white "
									: ""
							}`}
							onClick={() => selectSize(item.value)}
							key={item.id}
						>
							{item.displayValue}
						</li>
					))}
				</ul>
			</article>
		);
	}
}
