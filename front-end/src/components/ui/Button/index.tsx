import { Component } from "react";

interface Props {
	children: React.ReactNode;
}

export default class Button extends Component<Props> {
	render() {
		const { children } = this.props;
		return (
			<button className="bg-active text-white uppercase tracking-wide text-xl py-3 w-full ">
				{children}
			</button>
		);
	}
}
