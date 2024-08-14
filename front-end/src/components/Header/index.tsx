import { Component } from "react";
import withRouter, { WithRouterProps } from "../../utils/withRouter";
import NavigationElement from "./NavigationElement";
import ShoppingCart from "./ShoppingCart";
interface HeaderProps extends WithRouterProps {}

class Header extends Component<HeaderProps> {
	render() {
		const category = this.props.query.category;
		return (
			<header className="flex sticky top-0 bg-white z-[100] py-5 w-dvw justify-around items-center">
				<nav className="flex">
					<ul className="flex gap-10">
						<NavigationElement
							category="women"
							label="WOMEN"
							currentCategory={category as string}
						/>
						<NavigationElement
							category="men"
							label="MEN"
							currentCategory={category as string}
						/>
						<NavigationElement
							category="kids"
							label="KIDS"
							currentCategory={category as string}
						/>
					</ul>
				</nav>
				<img src="logo.svg" alt="logo" />
				<ShoppingCart />
			</header>
		);
	}
}

export default withRouter(Header);
