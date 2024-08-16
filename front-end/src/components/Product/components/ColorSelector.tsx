import { Component } from "react";
import { Attributes } from "../../../context/CartContext/types";
import {
	ProductDetailsContext,
	ProductDetailsContextType,
} from "../../../context/ProductDetails";

interface Props {
	attributes: Attributes;
}

export default class ColorSelector extends Component<Props> {
	static contextType = ProductDetailsContext;
	context!: ProductDetailsContextType;

	render() {
		const { attributes } = this.props;

		return (
			<article className="space-y-2">
				<h2 className="uppercase text-xl font-bold">Color:</h2>

				<ul className="flex items-center gap-5">
					{attributes.items.map((attribute, index) => (
						<li
							key={`color-index${index}`}
							className={`size-[30px] aspect-square  rounded-full cursor-pointer ${
								attribute.value === this.context.color
									? "outline outline-2 outline-offset-[2.5px] outline-active"
									: ""
							}`}
							style={{
								backgroundColor: attribute.value,
							}}
							onClick={() =>
								this.context.selectColor(attribute.value)
							}
						></li>
					))}
				</ul>
			</article>
		);
	}
}
