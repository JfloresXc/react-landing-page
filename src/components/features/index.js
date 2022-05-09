import React from "react";
import Feauter from "../feature";
import { ButtonLink } from "../button";

import "./features.css";

export default function Features() {
	return (
		<div className="features">
			<p className="features__title">Nuestros idiomas y métodos</p>
			<ul className="features_list">
				<li>
					<Feauter type="subject" title={"Portugués"} />
				</li>
				<li>
					<Feauter type="subject" title={"Ruso"} />
				</li>
				<li>
					<Feauter type="subject" title={"Alemán"} />
				</li>
				<li>
					<Feauter type="trait" title={"Francés"} />
				</li>
				<li>
					<Feauter type="trait" title={"Quechua"} />
				</li>
				<li>
					<Feauter type="trait" />
				</li>
			</ul>
			<div className="features__button">
				<ButtonLink
					message={`Explorar Todo`}
					icon={true}
				></ButtonLink>
			</div>
		</div>
	);
}
