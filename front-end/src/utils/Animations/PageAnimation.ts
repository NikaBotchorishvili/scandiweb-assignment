import { Variants } from "framer-motion";

export const fadeIn: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};
