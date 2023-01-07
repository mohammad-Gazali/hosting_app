import React from "react";
import Features from "./Features";

const Plan = ({ plan }) => {
    const { name, price, features } = plan
	return (
		<div className="card w-[23rem] bg-base-100 shadow-xl">
			<div className="card-body items-center">
				<h2 className="card-title text-primary text-4xl mb-5">{name}</h2>
                <div className="flex gap-3 items-center">
                    <del className="text-gray-500">${(price * 1.5).toFixed(1)}</del>
                    <div className="badge badge-lg">70% Saved</div>
                </div>
				<h3 className="card-title flex items-end text-2xl">
                    $<span className="text-5xl text-primary-focus">{price}</span>/month
                </h3>
                <div className="w-full mb-10">
                    <hr className="border-primary/70 my-6 mb-12 border-2 rounded-lg" />
                    <Features features={features} />
                </div>
				<div className="card-actions justify-end">
					<button className="btn btn-secondary px-10">Select Plan</button>
				</div>
                <div className="w-full flex flex-col">
                    <hr className="border-primary/70 my-6 mb-10 border-2 rounded-lg" />
                    <a className="self-center text-accent font-semibold hover:underline hover:text-accent-focus" href="#">
                        Compare Plans
                    </a>
                </div>
			</div>
		</div>
	);
};

export default Plan;
