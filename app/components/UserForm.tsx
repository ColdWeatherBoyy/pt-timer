import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { ThemeColor, ThemeShade } from "../utilities/themeTypes";

Amplify.configure(outputs);

interface FormText {
	title: string;
	subtitle: string;
	button: string;
}

interface FormInput {
	value: string;
	setValue: (value: string) => void;
	type: string;
	placeholder: string;
}

interface UserFormProps {
	formInputs: FormInput[];
	formColor: ThemeColor;
	formText: FormText;
	handleSubmit: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
	formInputs,
	formColor,
	formText,
	handleSubmit,
}) => {
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
