import React from "react";
import SocialMedia from "../../models/socialMedia";
import { BsEnvelopeOpenFill, BsGithub, BsInstagram, BsLinkedin, BsStackOverflow, BsTwitter } from "react-icons/bs";

const socialMediaList = () => {
	return [
		new SocialMedia({
			href: "https://github.com/chraebsli",
			icon: <BsGithub size={ 70 } />,
			name: "Github",
			user: "chraebsli",
		}),

		new SocialMedia({
			href: "https://stackoverflow.com/users/15230022/chraebsli",
			icon: <BsStackOverflow size={ 70 } />,
			name: "Stack Overflow",
			user: "chraebsli",
		}),
		new SocialMedia({
			href: "https://twitter.com/chraebsli_dev",
			icon: <BsTwitter size={ 70 } />,
			name: "Twitter",
			user: "chraebsli_dev",
		}),
		new SocialMedia({
			href: "https://www.linkedin.com/in/nicholas-krebs/",
			icon: <BsLinkedin size={ 70 } />,
			name: "LinkedIn",
			user: "nicholas-krebs",
		}),
		new SocialMedia({
			href: "https://www.instagram.com/chraebsli.dev/",
			icon: <BsInstagram size={ 70 } />,
			name: "Instagram",
			user: "chraebsli.dev",
		}),
		new SocialMedia({
			href: "mailto:contact@nicholas-krebs.ch",
			icon: <BsEnvelopeOpenFill size={ 70 } />,
			name: "E-Mail",
			user: "contact@nicholas-krebs.ch",
		}),
	];
};
export default socialMediaList();
