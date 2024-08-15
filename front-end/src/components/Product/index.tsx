import { Component } from "react";
import withRouter, { WithRouterProps } from "../../utils/withRouter";
import Slider from "../ui/Slider";
import { Product as ProductType } from "../../context/CartContext/types";
import SizeSelector from "./components/SizeSelector";
import ColorSelector from "./components/ColorSelector";
import Button from "../ui/Button";
interface Props extends WithRouterProps {}

const product: ProductType = {
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
	description: "\u003Cp\u003EGreat sneakers for everyday use!\u003C/p\u003E",
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
};

class Product extends Component<Props> {
	render() {
		const { attributes } = product;
		return (
			<main className="flex flex-wrap-reverse mt-20 justify-center items-center gap-20 text-primary">
				<Slider gallery={product.gallery} {...this.props} />
				<section className="flex flex-col gap-y-10 max-w-xs w-full">
					<h1 className="font-bold text-4xl">{product.name}</h1>

					{attributes.some(
						(attribute) => attribute.name === "Size"
					) && <SizeSelector attributes={attributes} />}
					{attributes.some(
						(attribute) => attribute.name === "Color"
					) && <ColorSelector attributes={attributes} />}

					<article className="space-y-2">
						<h2 className="uppercase text-xl font-bold">Price:</h2>

						<div className="flex font-bold text-2xl">
							<span>{product.prices[0].currency.symbol}</span>
							<span>{product.prices[0].amount}</span>
						</div>
					</article>

					<Button>Add to Cart</Button>

					<div
						className="font-semibold leading-relaxed"
						dangerouslySetInnerHTML={{
							__html: product.description,
						}}
					/>
				</section>
			</main>
		);
	}
}

export default withRouter(Product);
