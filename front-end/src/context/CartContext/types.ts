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
export type Product = {
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
