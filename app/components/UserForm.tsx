import { Dispatch, SetStateAction, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { ThemeColor, ThemeShade } from "../utilities/themeTypes";

interface FormText {
	title: string;
	subtitle: string;
	button: string;
}

interface FormInput {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	type: string;
	placeholder: string;
}

interface UserForm {
	formInputs: FormInput[];
	formColor: ThemeColor;
	formText: FormText;
}

const UserForm: React.FC<UserForm> = ({ formInputs, formColor, formText }) => {
	const handleSubmit = () => {
		console.log("submit");
	};

	const formSecondaryColor =
		formColor === ThemeColor.horizon ? ThemeColor.jade : ThemeColor.horizon;

	return (
		<div>
			<Card
				cardColor={ThemeColor[formColor]}
				cardShade={ThemeShade.medium}
				column
				className="p-8 gap-6"
			>
				<div className={`text-${formColor}-950 text-5xl`}>{formText.title}</div>
				<div className={`text-${formColor}-950 font-bold text-lg text-center`}>
					{formText.subtitle}
				</div>
				<div className="flex flex-col items-center gap-4">
					<Card
						cardColor={ThemeColor[formSecondaryColor]}
						cardShade={ThemeShade.medium}
						className="p-8 gap-8"
					>
						<Card
							cardColor={ThemeColor[formColor]}
							cardShade={ThemeShade.light}
							column
							className="gap-4 p-8"
						>
							{formInputs.map((formInput, index) => {
								return (
									<Input
										key={index + "-" + formInput.type}
										type={formInput.type}
										placeholder={formInput.placeholder}
										value={formInput.value}
										inputColor={ThemeColor[formSecondaryColor]}
										onChange={(event) => formInput.setValue(event.target.value)}
									/>
								);
							})}
						</Card>
						<Button
							buttonColor={ThemeColor[formSecondaryColor]}
							animate
							onClick={handleSubmit}
						>
							{formText.button}
						</Button>
					</Card>
				</div>
			</Card>
		</div>
	);
};

export default UserForm;
