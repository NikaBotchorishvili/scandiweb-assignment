export type Attributes = {
	id: string;
	items: {
		displayValue: string;
		value: string;
		id: string;
		__typename: string;
	}[];
	name: string;
	type: string;
	__typename: string;
};
export type Prices = {
	amount: number;
	currency: {
		label: string;
		symbol: string;
		__typename: string;
	};
	__typename: string;
};
export interface Product {
	id: string;
	name: string;
	inStock: boolean;
	inCart: boolean;
	gallery: string[];
	description: string;
	category: string;
	attributes: Attributes[];
	prices: Prices[];
	brand: string;
	__typename: string;

};

export interface Item extends Product {
	quantity: number;
	size: string;
	color: string;
	thumbnail: string;
}

export interface State {
	cartToggled: boolean;
	items: Item[];
}

export interface ContextType extends State {
	setItems: (item: Item) => void;
	toggleCart: () => void;
	increaseQuantity: (id: string) => void;
	decreaseQuantity: (id: string) => void;
	order: () => void;
}

export type CartProviderProps = {
	children: React.ReactNode;
};