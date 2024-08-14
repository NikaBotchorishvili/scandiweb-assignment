import { Component, createContext } from "react";

type Item = {
	// Define the properties of your Item here
	id: string;
	name: string;
	quantity: number;
	// Add more fields as needed
};

export type ContextType = {
	cartToggled: boolean;
	toggleCart: () => void;
	items: Item[];
};

type CartProviderProps = {
	children: React.ReactNode;
};

export const CartContext = createContext<ContextType>({
	cartToggled: false,
	toggleCart: () => {},
	items: [],
});

class CartProvider extends Component<CartProviderProps> {
	state = {
		cartToggled: false,
		items: JSON.parse(
			window.localStorage.getItem("cart") || "[]"
		) as Item[],
	};

	toggleCart = () => {
		this.setState({ cartToggled: !this.state.cartToggled });
	};

	render() {
		return (
			<CartContext.Provider
				value={{
					cartToggled: this.state.cartToggled,
					toggleCart: this.toggleCart,
					items: this.state.items,
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}

export default CartProvider;
