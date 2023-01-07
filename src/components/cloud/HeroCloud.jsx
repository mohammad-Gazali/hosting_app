import React from "react";
import cloudImage from "../../assets/cloudhosting.png";
import cloudImage2 from "../../assets/cloudhosting2.png";


const HeroCloud = () => {
	return (
		<section className="hero lg:mb-0 mb-20">
			<div className="hero-content flex-col lg:flex-row">
                <div className="flex md:flex-row md:ml-72 flex-col relative">
                    <img
                        src={cloudImage}
                        className="max-w-sm rounded-lg md:absolute md:-left-72 -z-10 md:block hidden"
                    /> 
                    <img
                        src={cloudImage2}
                        className="max-w-sm rounded-lg"
                    />
                </div>
				<h1 className="text-5xl font-bold text-accent">Cloud Hosting</h1>
			</div>
		</section>
	);
};

export default HeroCloud;
