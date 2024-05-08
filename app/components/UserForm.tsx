import { Dispatch, SetStateAction, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { ThemeColor, ThemeShade } from "../utilities/themeTypes";

interface FormText {
	purpose: string;
	subtitle: string;
}

interface UserForm {
	email: string;
	setEmail: Dispatch<SetStateAction<string>>;
	password: string;
	setPassword: Dispatch<SetStateAction<string>>;
	formColor: ThemeColor;
	formText: FormText;
}

const UserForm: React.FC<UserForm> = ({
	email,
	setEmail,
	password,
	setPassword,
	formColor,
	formText,
}) => {
	const handleSubmit = () => {
		console.log(email, password);
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
				<div className={`text-${formColor}-950 text-5xl`}>{formText.purpose}</div>
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
							<Input
								type="email"
								placeholder="Enter Email"
								value={email}
								inputColor={ThemeColor[formSecondaryColor]}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<Input
								type="password"
								placeholder="Enter Password"
								value={password}
								inputColor={ThemeColor[formSecondaryColor]}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</Card>
						<Button
							buttonColor={ThemeColor[formSecondaryColor]}
							animate
							onClick={handleSubmit}
						>
							{formText.purpose}
						</Button>
					</Card>
				</div>
			</Card>
		</div>
	);
};

export default UserForm;
