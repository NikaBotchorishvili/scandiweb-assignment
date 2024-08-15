import { Component, createContext } from "react";
type Item = {
	// Define the properties of your Item here
	id: number;
	name: string;
	quantity: number;
	size: string | null;
	color: string | null;
	// Add more fields as needed
};

interface State {
	cartToggled: boolean;
	items: Item[];
}

export interface ContextType extends State {
	setItems: (item: Item) => void;
	toggleCart: () => void;
}

type CartProviderProps = {
	children: React.ReactNode;
};

export const CartContext = createContext<ContextType>({
	cartToggled: false,
	toggleCart: () => {},
	setItems: () => {},
	items: [],
});

class CartProvider extends Component<CartProviderProps, State> {
	state = {
		cartToggled: false,
		items: JSON.parse(
			window.localStorage.getItem("cart") || "[]"
		) as Item[],
	};
	setItems = (item: Item) => {
		console.log(this.state.items);
		this.setState((prev) => ({
			...prev,
			items:
				prev.items.length == 0
					? [item]
					: prev.items.map((i) =>
							i.id === item.id
								? { ...i, quantity: i.quantity + 1 }
								: i
					  ),
		}));
		window.localStorage.setItem("cart", JSON.stringify(this.state.items));
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
					setItems: this.setItems,
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}

export default CartProvider;
