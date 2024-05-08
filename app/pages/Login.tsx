import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { ThemeColor, ThemeShade } from "../utilities/themeTypes";

const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		console.log(email, password);
	};

	return (
		<div>
			<Card
				cardColor={ThemeColor.jade}
				cardShade={ThemeShade.medium}
				column
				className="p-8 gap-6"
			>
				<div className="text-horizon-950 text-6xl">Sign In</div>
				<div className="text-horizon-950 font-bold text-lg text-center">
					Sign in to access your timers!
				</div>
				<div className="flex flex-col items-center gap-4">
					<Card
						cardColor={ThemeColor.horizon}
						cardShade={ThemeShade.medium}
						className="p-8 gap-8"
					>
						<Card
							cardColor={ThemeColor.jade}
							cardShade={ThemeShade.light}
							column
							className="gap-4 p-8"
						>
							<Input
								type="email"
								placeholder="Enter Email"
								value={email}
								inputColor={ThemeColor.horizon}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<Input
								type="password"
								placeholder="Enter Password"
								value={password}
								inputColor={ThemeColor.horizon}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</Card>
						<Button buttonColor={ThemeColor.horizon} animate onClick={handleSubmit}>
							Sign Up
						</Button>
					</Card>
				</div>
			</Card>
		</div>
	);
};

export default LogIn;
