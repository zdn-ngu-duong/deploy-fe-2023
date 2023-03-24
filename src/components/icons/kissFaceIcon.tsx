import { SVGProps } from "react";

const KissFaceIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			opacity={0.35}
			d="M43.5 24c0 10.77-8.73 19.5-19.5 19.5S4.5 34.77 4.5 24 13.23 4.5 24 4.5 43.5 13.23 43.5 24Z"
			fill="url(#a)"
			stroke="#000"
		/>
		<path d="M34 23.5h-4a1.5 1.5 0 1 1 0-3h4a1.5 1.5 0 1 1 0 3Z" fill="url(#b)" stroke="#000" />
		<path d="M18 23.5h-4a1.5 1.5 0 1 1 0-3h4a1.5 1.5 0 1 1 0 3Z" fill="url(#c)" stroke="#000" />
		<path
			d="M24.707 38.215a1.496 1.496 0 0 0 2.05.545A5.52 5.52 0 0 0 29.5 34a5.518 5.518 0 0 0-2.745-4.761 1.499 1.499 0 0 0-2.048.545v.002a1.497 1.497 0 0 0 .545 2.05l-.545 6.38Zm0 0a1.502 1.502 0 0 1 .543-2.05m-.543 2.05.543-2.05m0 0A2.506 2.506 0 0 0 26.5 34c0-.89-.477-1.72-1.248-2.165l-.002 4.33Z"
			fill="url(#d)"
			stroke="#000"
		/>
		<path
			d="m38.883 29.813.334.302.335-.301a3.52 3.52 0 0 1 2.364-.922 3.547 3.547 0 0 1 3.546 3.546c0 .999-.417 1.899-1.09 2.543l-.008.008-2.024 2.028-1.389 1.392-.457.458-.129.128-.033.034-.009.009-.002.002c-.611.611-1.6.611-2.211 0l-.003-.002-.009-.009-.033-.034-.129-.128-.457-.458-1.389-1.391-1.39-1.393-.458-.46-.13-.129-.02-.021-.004-.005-.029-.028a3.527 3.527 0 0 1-1.085-2.544 3.547 3.547 0 0 1 3.546-3.546c.909 0 1.732.352 2.363.921Zm-4.811 5.182c-.001-.001-.001 0 0 0Z"
			fill="url(#e)"
			stroke="#000"
		/>
		<defs>
			<linearGradient
				id="a"
				x1={37.962}
				y1={-8.703}
				x2={3.534}
				y2={29.962}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#FF957D" />
				<stop offset={1} stopColor="#F85C5C" />
			</linearGradient>
			<linearGradient
				id="b"
				x1={34.792}
				y1={18.73}
				x2={32.217}
				y2={24.515}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#FF957D" />
				<stop offset={1} stopColor="#F85C5C" />
			</linearGradient>
			<linearGradient
				id="c"
				x1={18.793}
				y1={18.73}
				x2={16.217}
				y2={24.515}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#FF957D" />
				<stop offset={1} stopColor="#F85C5C" />
			</linearGradient>
			<linearGradient
				id="d"
				x1={29.095}
				y1={25.066}
				x2={20.637}
				y2={30.28}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#FF957D" />
				<stop offset={1} stopColor="#F85C5C" />
			</linearGradient>
			<linearGradient
				id="e"
				x1={43.926}
				y1={24.706}
				x2={34.215}
				y2={37.38}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#FF957D" />
				<stop offset={1} stopColor="#F85C5C" />
			</linearGradient>
		</defs>
	</svg>
);

export default KissFaceIcon;
