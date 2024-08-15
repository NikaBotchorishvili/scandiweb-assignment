import { Component } from "react";
import { WithRouterProps } from "../../utils/withRouter";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../context/CartContext/types";
interface Props extends WithRouterProps {
	product: Product;
}

export default class Item extends Component<Props> {
	render() {
		const { product } = this.props;
		return (
			<article
				className="box-content w-full  flex flex-col gap-4 shadow-lg p-5 "
				key={product.id}
			>
				<div className="relative mx-auto w-full h-[350px] shadow-md">
					{!product.inStock && (
						<div className="absolute top-0 left-0 w-full h-full text-primary bg-white bg-opacity-40 flex justify-center items-center tracking-wide text-2xl font-light">
							OUT OF STOCK
						</div>
					)}
					{product.inCart && (
						<FontAwesomeIcon
							icon={faShoppingCart}
							className="absolute bottom-0 right-5 translate-y-1/2  p-3 bg-active fill-transparent text-white rounded-full"
						/>
					)}
					<img
						className="object-cover object-top size-full"
						src={product.gallery[0]}
						alt=""
					/>
				</div>
				<div className="flex flex-col gap-y-1">
					<h3>{product.name}</h3>
					<small className="space-x-1 text-md font-bold">
						<span>{product.prices[0].currency.symbol}</span>
						<span>{product.prices[0].amount}</span>
					</small>
				</div>
			</article>
		);
	}
}
