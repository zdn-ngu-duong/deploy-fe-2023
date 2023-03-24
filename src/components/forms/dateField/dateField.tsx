import { useRef } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { CalenderIcon } from "../../icons";
import styles from "./input-field.module.scss";

interface IProps {
	label: string;
	placeholder: string;
	type?: "text" | "email";
	disabled?: boolean;
	name: string;
	register: UseFormRegister<any>;
	option?: RegisterOptions;
	error?: string;
	defaultValue?: string;
}

interface CustomElement extends Element {
	showPicker: () => void;
}

export default function DateField({
	name,
	label,
	placeholder,
	register,
	option,
	disabled,
	error,
	defaultValue,
}: IProps) {
	const ref = useRef<HTMLInputElement>(null);

	const clickInputHandle = () => {
		const customElement = ref.current?.children[1] as CustomElement;
		customElement.showPicker();
	};

	return (
		<div className={styles.container} onClick={clickInputHandle}>
			<div className={styles.content} ref={ref}>
				<label htmlFor={name}>
					<span className={styles.content__title}>{label}</span>
					{option?.required && <span className={styles.content__danger}>*</span>}
				</label>
				<input
					id={name}
					className={styles.content__input}
					type="date"
					placeholder={placeholder}
					disabled={disabled}
					defaultValue={defaultValue}
					{...register(name, { ...option })}
				/>
				<span className={styles.content__icon}>
					<CalenderIcon />
				</span>
			</div>
			{error && <p className={styles.container__error}>{error}</p>}
		</div>
	);
}
