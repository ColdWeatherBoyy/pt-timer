import { Amplify } from "aws-amplify";
import { useRouter } from "next/navigation";
import { FC } from "react";
import outputs from "../../../amplify_outputs.json";
import Button from "../../components/general/Button";
import Card from "../../components/general/Card";
import Input from "../../components/general/Input";
import { ThemeColor, ThemeShade } from "../../utilities/types/theme.types";
import LinkButton from "../../components/general/LinkButton";

Amplify.configure(outputs);
// This is handy as it covers both signin and signup,
// but it may be smarter to move this to the actual pages, so that the form is useful in more situations

interface UserFormProps {
	formColor: ThemeColor;
	formInputs: {
		value: string;
		setValue: (value: string) => void;
		type: string;
		placeholder: string;
	}[];
	formText: {
		title: string;
		subtitle: string;
		button: string;
		redirect?: string;
		redirectPath?: string;
	};
	handleSubmit: () => void;
}

const UserForm: FC<UserFormProps> = ({
	formColor,
	formInputs,
	formText,
	handleSubmit,
}) => {
	const router = useRouter();
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
				className="p-8 gap-3 relative w-min md:w-fit"
			>
				<div
					className={`text-${formColor}-950 text-5xl text-center whitespace-nowrap underline`}
				>
					{formText.title}
				</div>
				<div className={`text-${formColor}-950 font-bold text-lg text-center w-3/4`}>
					{formText.subtitle}
				</div>
				<div className="flex flex-col items-center w-full">
					<Card
						cardColor={ThemeColor[formSecondaryColor]}
						cardShade={ThemeShade.medium}
						className="gap-3 p-6 pb-3 w-full"
						column
					>
						<Card
							cardColor={ThemeColor[formColor]}
							cardShade={ThemeShade.light}
							className="w-full"
						>
							<form className="gap-2 flex flex-col w-full" onKeyDown={handleEnterDown}>
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
					<div className="text-xs absolute bottom-1.5 flex">
						{formText.redirect} Please click
						<LinkButton
							text="here"
							onClick={() => router.push(formText.redirectPath!)}
							marginLeft={true}
						/>
						.
					</div>
				)}
			</Card>
		</div>
	);
};

export default UserForm;
