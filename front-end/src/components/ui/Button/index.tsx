import { Component } from "react";

interface Props {
	children: React.ReactNode;
	onSubmit?: () => void;
}

export default class Button extends Component<Props> {
	render() {
		const { children, onSubmit } = this.props;
		return (
			<button
				onClick={onSubmit}
				className="bg-active text-white uppercase tracking-wide text-xl py-3 w-full "
			>
				{children}
			</button>
		);
	}
}
