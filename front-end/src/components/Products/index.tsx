import { Component } from "react";
import withRouter, { WithRouterProps } from "../../utils/withRouter";
import Item from "./Item";
import { Product } from "../../context/CartContext/types";

const products: Product[] = [
	{
		id: "huarache-x-stussy-le",
		name: "Nike Air Huarache Le",
		inStock: true,
		inCart: true,
		gallery: [
			"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
			"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
			"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
			"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
			"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087",
		],
		description:
			"\u003Cp\u003EGreat sneakers for everyday use!\u003C/p\u003E",
		category: "clothes",
		attributes: [
			{
				id: "Size",
				items: [
					{
						displayValue: "40",
						value: "40",
						id: "40",
						__typename: "Attribute",
					},
					{
						displayValue: "41",
						value: "41",
						id: "41",
						__typename: "Attribute",
					},
					{
						displayValue: "42",
						value: "42",
						id: "42",
						__typename: "Attribute",
					},
					{
						displayValue: "43",
						value: "43",
						id: "43",
						__typename: "Attribute",
					},
				],
				name: "Size",
				type: "text",
				__typename: "AttributeSet",
			},
		],
		prices: [
			{
				amount: 144.69,
				currency: {
					label: "USD",
					symbol: "$",
					__typename: "Currency",
				},
				__typename: "Price",
			},
		],
		brand: "Nike x Stussy",
		__typename: "Product",
	},
	{
		id: "jacket-canada-goosee",
		name: "Jacket",
		inStock: true,
		inCart: false,
		gallery: [
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
			"https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
			"https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
		],
		description: "\u003Cp\u003EAwesome winter jacket\u003C/p\u003E",
		category: "clothes",
		attributes: [
			{
				id: "Size",
				items: [
					{
						displayValue: "Small",
						value: "S",
						id: "Small",
						__typename: "Attribute",
					},
					{
						displayValue: "Medium",
						value: "M",
						id: "Medium",
						__typename: "Attribute",
					},
					{
						displayValue: "Large",
						value: "L",
						id: "Large",
						__typename: "Attribute",
					},
					{
						displayValue: "Extra Large",
						value: "XL",
						id: "Extra Large",
						__typename: "Attribute",
					},
				],
				name: "Size",
				type: "text",
				__typename: "AttributeSet",
			},
		],
		prices: [
			{
				amount: 518.47,
				currency: {
					label: "USD",
					symbol: "$",
					__typename: "Currency",
				},
				__typename: "Price",
			},
		],
		brand: "Canada Goose",
		__typename: "Product",
	},
	{
		id: "jacket-canada-goosee",
		name: "Jacket",
		inStock: false,
		inCart: false,
		gallery: [
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
			"https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
			"https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
			"https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
		],
		description: "\u003Cp\u003EAwesome winter jacket\u003C/p\u003E",
		category: "clothes",
		attributes: [
			{
				id: "Size",
				items: [
					{
						displayValue: "Small",
						value: "S",
						id: "Small",
						__typename: "Attribute",
					},
					{
						displayValue: "Medium",
						value: "M",
						id: "Medium",
						__typename: "Attribute",
					},
					{
						displayValue: "Large",
						value: "L",
						id: "Large",
						__typename: "Attribute",
					},
					{
						displayValue: "Extra Large",
						value: "XL",
						id: "Extra Large",
						__typename: "Attribute",
					},
				],
				name: "Size",
				type: "text",
				__typename: "AttributeSet",
			},
		],
		prices: [
			{
				amount: 518.47,
				currency: {
					label: "USD",
					symbol: "$",
					__typename: "Currency",
				},
				__typename: "Price",
			},
		],
		brand: "Canada Goose",
		__typename: "Product",
	},
];

interface Props extends WithRouterProps {}

class Products extends Component<Props> {
	render() {
		const { query } = this.props;
		const title =
			((query["category"] || "Women") as string).charAt(0).toUpperCase() +
			((query["category"] || "Women") as string).slice(1);

		const items = products.map((product) => (
			<Item key={product.id} product={product} {...this.props} />
		));
		return (
			<section className="flex flex-col gap-y-10 mt-20 w-[70%] md:w-[60%]   lg:w-[80%] mx-auto">
				<h2 className="w-full  font-semibold tracking-wide text-4xl">
					{title}
				</h2>

				<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 w-full items-center justify-center gap-32 ">
					{items}
				</div>
			</section>
		);
	}
}

export default withRouter(Products);
