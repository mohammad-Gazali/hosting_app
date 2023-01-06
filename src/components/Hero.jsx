import React from "react";
import serverImage from "../assets/server.png";
import databaseImage from "../assets/database.jpg";

const Hero = () => {
	return (
		<section className="hero min-h-screen">
			<div className="hero-content flex-col lg:flex-row relative">
				<img src={serverImage} alt="server" className="max-w-sm" />
				<div>
					<h1 className="text-5xl font-bold text-accent">Gazali Hosting</h1>
					<p className="py-6">
						Welcome to our hosting company! We are proud to offer top-quality
						hosting services to help your website or application run smoothly
						and reliably. Thank you for choosing us as your
						hosting partner. We look forward to working with you and helping you
						succeed online!
					</p>
					<a href="#services" className="btn btn-primary">Get Started</a>
				</div>
				<img src={databaseImage} alt="database" className="max-w-sm" />
			</div>
		</section>
	);
};

export default Hero;
