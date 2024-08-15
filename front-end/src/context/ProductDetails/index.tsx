import { Component, createContext } from "react";

interface State {
	size: string | null;
	color: string | null;
}

export interface ProductDetailsContextType extends State {
	selectSize: (size: string) => void;
	selectColor: (color: string) => void;
}

export const ProductDetailsContext = createContext<ProductDetailsContextType>({
	color: null,
	size: null,
	selectSize: () => {},
	selectColor: () => {},
});

type Props = {
	children: React.ReactNode;
};

export default class ProductDetailsProvider extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			color: null,
			size: null,
		};
	}

	selectColor = (color: string) => {
		this.setState((prev) => ({ ...prev, color: color }));
	};

	selectSize = (size: string) => {
		this.setState((prev) => ({ ...prev, size: size }));
	};
	render() {
		const { color, size } = this.state;
		return (
			<ProductDetailsContext.Provider
				value={{
					color: color,
					size: size,
					selectColor: this.selectColor,
					selectSize: this.selectSize,
				}}
			>
				{this.props.children}
			</ProductDetailsContext.Provider>
		);
	}
}
