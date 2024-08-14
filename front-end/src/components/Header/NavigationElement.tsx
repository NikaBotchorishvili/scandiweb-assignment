import { Component } from "react";
import { Link } from "react-router-dom";

type Props = {
	category: string;
	label: string;
	currentCategory?: string;
};

const defaultCategory = "women";

export default class NavigationElement extends Component<Props> {
	render() {
		const { category, label, currentCategory } = this.props;
		const activeCategory =
			category === currentCategory ||
			(!currentCategory && category === defaultCategory);

		return (
			<li
				className={`${
					activeCategory ? "border-b text-active " : ""
				}border-active flex pb-5`}
			>
				<Link
					data-testid={
						activeCategory
							? "active-category-link"
							: "category-link"
					}
					to={{
						pathname: "/",
						search: `category=${category}`,
					}}
				>
					{label.toUpperCase()}
				</Link>
			</li>
		);
	}
}
