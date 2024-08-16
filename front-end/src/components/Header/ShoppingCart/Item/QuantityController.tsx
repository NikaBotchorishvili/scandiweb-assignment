import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { ContextType } from "../../../../context/CartContext/types";
import { CartContext } from "../../../../context/CartContext";
interface Props {
	quantity: number;
	id: string;
}

export default class QuantityController extends Component<Props> {
	static contextType = CartContext;
	context!: ContextType;
	render() {
		const { quantity, id } = this.props;
		return (
			<div className="flex flex-col items-center justify-between w-[40px]">
				<FontAwesomeIcon
					className="size-sm aspect-square p-1.5 border border-primary cursor-pointer"
					icon={faMinus}
					onClick={() => this.context.decreaseQuantity(id)}
				/>
				<span className="text-xl">{quantity}</span>
				<FontAwesomeIcon
					className="size-sm aspect-square p-1.5 border border-primary cursor-pointer"
					icon={faPlus}
					onClick={() => this.context.increaseQuantity(id)}
				/>
			</div>
		);
	}
}
