"use client";

import { createContext, useEffect, useState } from "react";
import { validateUserSession } from "../utilities/amplifyFunctions";

interface ContextInterface {
	validated: boolean;
	toggleValidation: () => void;
}

export const UserContext = createContext<ContextInterface>({
	validated: false,
	toggleValidation: () => {},
});

export default function UserProvider({ children }: { children: React.ReactNode }) {
	const [validated, setValidated] = useState(false);
	const toggleValidation = () => {
		setValidated((prevValidated) => !prevValidated);
	};

	useEffect(() => {
		const validate = async () => {
			const res = await validateUserSession();
			console.log("res", res);
			if (res) setValidated(true);
		};
		validate();
	}, []);
	return (
		<UserContext.Provider value={{ validated, toggleValidation }}>
			{children}
		</UserContext.Provider>
	);
}
