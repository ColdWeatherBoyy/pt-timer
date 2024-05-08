import React, { useState } from "react";
import UserForm from "../components/UserForm";
import { ThemeColor } from "../utilities/themeTypes";

const SignUp: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	return (
		<UserForm
			email={email}
			setEmail={setEmail}
			password={password}
			setPassword={setPassword}
			formColor={ThemeColor.horizon}
			formText={{
				purpose: "Sign Up",
				subtitle: "Please create an account to use PT Timers.",
			}}
		/>
	);
};
export default SignUp;
