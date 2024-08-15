import { Component } from "react";
import { WithRouterProps } from "../../../utils/withRouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface Props extends WithRouterProps {
	gallery: string[];
}

interface IState {
	currentImageIndex: number;
	hasMounted: boolean;
}

export default class Slider extends Component<Props, IState> {
	constructor(props: Props) {
		super(props);
		this.state = {
			currentImageIndex: 0,
			hasMounted: false,
		};
	}

	componentDidMount() {
		this.setState({ hasMounted: true });
	}

	nextImage = () => {
		const { gallery } = this.props;
		this.setState((prevState) => ({
			...prevState,
			currentImageIndex:
				prevState.currentImageIndex === gallery.length - 1
					? 0
					: prevState.currentImageIndex + 1,
		}));
	};

	prevImage = () => {
		const { gallery } = this.props;
		this.setState((prevState) => ({
			...prevState,
			currentImageIndex:
				prevState.currentImageIndex <= 0
					? gallery.length - 1
					: prevState.currentImageIndex - 1,
		}));
	};

	render() {
		const { gallery } = this.props;
		const { currentImageIndex, hasMounted } = this.state;
		return (
			<section className="flex  items-center gap-20 select-none h-[300px] md:h-[500px]">
				<div className="flex flex-col gap-y-5 aspect-square w-[50px] md:w-[100px]">
					{gallery.map((image, index) => (
						<img className="grow" key={index} src={image} alt="" />
					))}
				</div>
				<div className="relative size-[300px] md:size-[500px] bg-red-50">
					<FontAwesomeIcon
						className="absolute z-[100] text-white bg-primary p-2 size-[20px] left-0 top-1/2 -translate-y-1/2"
						icon={faAngleLeft}
						onClick={this.prevImage}
					/>

					<div className="flex relative h-full">
						{gallery.map((image, index) => (
							<motion.img
								key={index}
								src={image}
								alt=""
								initial={{
									opacity: index === 0 && !hasMounted ? 1 : 0,
								}}
								animate={{
									opacity:
										currentImageIndex === index ? 1 : 0,
								}}
								transition={{ duration: 0.5 }}
								className="absolute object-cover w-[1000px] h-full"
							/>
						))}
					</div>
					<FontAwesomeIcon
						onClick={this.nextImage}
						className="absolute z-[100] text-white bg-primary p-2 size-[20px] right-0 top-1/2 -translate-y-1/2"
						icon={faAngleRight}
					/>
				</div>
			</section>
		);
	}
}
