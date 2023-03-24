import { SVGProps } from "react";

const ThreeDotIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<g fill="#22313F">
			<circle cx={5} cy={12} r={2} />
			<circle cx={12} cy={12} r={2} />
			<circle cx={19} cy={12} r={2} />
		</g>
	</svg>
);

export default ThreeDotIcon;
