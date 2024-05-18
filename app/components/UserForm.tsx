import { Amplify } from "aws-amplify";
import Link from "next/link";
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
	redirect?: string;
	redirectPath?: string;
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

	const handleEnterDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSubmit();
		}
	};

	return (
		<div>
			<Card
				cardColor={ThemeColor[formColor]}
				cardShade={ThemeShade.medium}
				column
				className="p-4 pb-8 gap-3 relative"
			>
				<div className={`text-${formColor}-950 text-5xl`}>{formText.title}</div>
				<div className={`text-${formColor}-950 font-bold text-lg text-center w-3/4`}>
					{formText.subtitle}
				</div>
				<div className="flex flex-col items-center">
					<Card
						cardColor={ThemeColor[formSecondaryColor]}
						cardShade={ThemeShade.medium}
						className="gap-3 pb-3"
						column
					>
						<Card cardColor={ThemeColor[formColor]} cardShade={ThemeShade.light}>
							<form className="gap-2 flex flex-col" onKeyDown={handleEnterDown}>
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
							</form>
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
				{formText.redirect && formText.redirectPath && (
					<div className="text-xs absolute bottom-1.5">
						{formText.redirect} Please click{" "}
						<Link href={formText.redirectPath}>here</Link>.
					</div>
				)}
			</Card>
		</div>
	);
};

export default UserForm;
