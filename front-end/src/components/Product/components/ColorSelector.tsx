import { Component } from "react";
import { Attributes } from "../../../context/CartContext/types";

interface Props{
    attributes: Attributes[]
}

export default class ColorSelector extends Component<Props> {
	render() {
        const {attributes} = this.props
		return (
			<article className="space-y-2">
				<h2 className="uppercase text-xl font-bold">Color:</h2>

				<ul className="flex gap-5"></ul>
			</article>
		);
	}
}
