import React from "react";
import Carousel from "react-multi-carousel";
import { cloudPlans } from "../../constants/plans";
// import "react-multi-carousel/lib/styles.css";
import Plan from "./Plan";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1224 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1224, min: 800 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 800, min: 0 },
		items: 1,
	},
};

const Plans = () => {
	return (
		<section className="mb-20">
			<Carousel removeArrowOnDeviceType='mobile' showDots={true} className="pt-10 pb-20 px-4" responsive={responsive}>
				{cloudPlans.map((plan) => (
					<Plan key={plan.id} plan={plan} />
				))}
			</Carousel>
		</section>
	);
};

export default Plans;
