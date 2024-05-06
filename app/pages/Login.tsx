import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import { ThemeColor, ThemeShade } from "../utilities/themeTypes";

const Login = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		console.log(username, email, password);
	};

	return (
		<div>
			<Card
				cardColor={ThemeColor.horizon}
				cardShade={ThemeShade.medium}
				column
				className="p-8 gap-6"
			>
				<div className="text-horizon-950 text-6xl">Login</div>
				<div className="text-horizon-950 font-bold text-lg text-center">
					Please sign up to be able to access saved timers from all devices. Proceed as a
					guest to access only locally.
				</div>
				<div className="flex flex-col items-center gap-4">
					<Card
						cardColor={ThemeColor.jade}
						cardShade={ThemeShade.medium}
						className="p-8 gap-8"
					>
						<Card
							cardColor={ThemeColor.horizon}
							cardShade={ThemeShade.light}
							column
							className="gap-4 p-8"
						>
							<Input
								type="text"
								placeholder="Enter Username"
								value={username}
								inputColor={ThemeColor.jade}
								onChange={(event) => setUsername(event.target.value)}
							/>
							<Input
								type="email"
								placeholder="Enter Email"
								value={email}
								inputColor={ThemeColor.jade}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<Input
								type="password"
								placeholder="Enter Password"
								value={password}
								inputColor={ThemeColor.jade}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</Card>
						<Button buttonColor={ThemeColor.horizon} animate onClick={handleSubmit}>
							Login
						</Button>
					</Card>
				</div>
			</Card>
		</div>
	);
};

export default Login;
