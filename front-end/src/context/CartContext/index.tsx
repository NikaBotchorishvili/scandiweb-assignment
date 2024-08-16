import { Component, createContext } from "react";
import { Item } from "./types";
import { CartProviderProps, State, ContextType } from "./types";
const localStorageKey = "cart";

export const CartContext = createContext<ContextType>({
	cartToggled: false,
	toggleCart: () => {},
	setItems: () => {},
	increaseQuantity: () => {},
	decreaseQuantity: () => {},
	order: () => {},
	items: JSON.parse(
		window.localStorage.getItem(localStorageKey) || "[]"
	) as Item[],
});

class CartProvider extends Component<CartProviderProps, State> {
	state = {
		cartToggled: false,
		items: JSON.parse(
			window.localStorage.getItem(localStorageKey) || "[]"
		) as Item[],
	};
	updatedItems = (items: Item[], newItem: Item): Item[] =>
		items.length === 0
			? [newItem]
			: items.map((i) =>
					i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
			  );

	setItems = (item: Item) => {
		console.log(this.state.items);

		this.setState((prev) => ({
			...prev,
			items: this.updatedItems(prev.items, item),
		}));
		window.localStorage.setItem(
			localStorageKey,
			JSON.stringify(this.updatedItems(this.state.items, item))
		);
	};

	increaseQuantity = (id: string) => {
		this.setState((prev) => {
			const updatedItems = prev.items.map((item) => {
				if (item.id === id) {
					return {
						...item,
						quantity: item.quantity + 1,
					};
				}
				return item;
			});

			localStorage.setItem(localStorageKey, JSON.stringify(updatedItems));
			return {
				...prev,
				items: updatedItems,
			};
		});
	};

	decreaseQuantity = (id: string) => {
		this.setState((prevState) => {
			const updatedItems = prevState.items
				.map((item) => {
					if (item.id === id) {
						return {
							...item,
							quantity: item.quantity - 1,
						};
					}
					return item;
				})
				.filter((item) => item.quantity > 0);
			localStorage.setItem(localStorageKey, JSON.stringify(updatedItems));

			return {
				...prevState,
				items: updatedItems,
			};
		});
	};

	toggleCart = () => {
		this.setState({ cartToggled: !this.state.cartToggled });
	};

	order = () => {
		try{
			console.log("ordered")

			this.setState({items: []})
			localStorage.removeItem(localStorageKey);
		}catch(e){
			console.log(e)
		}
	}
	render() {
		return (
			<CartContext.Provider
				value={{
					cartToggled: this.state.cartToggled,
					toggleCart: this.toggleCart,
					items: this.state.items,
					setItems: this.setItems,
					increaseQuantity: this.increaseQuantity,
					decreaseQuantity: this.decreaseQuantity,
					order: this.order,
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}

export default CartProvider;