"use client";

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { validateUserSession } from "../utilities/amplify/amplify.auth";

interface ContextInterface {
	validated: boolean;
	setValidated: Dispatch<SetStateAction<boolean>>;
	userId: string;
}

export const UserContext = createContext<ContextInterface>({
	validated: false,
	setValidated: () => {},
	userId: "",
});

export default function UserProvider({ children }: { children: React.ReactNode }) {
	const [validated, setValidated] = useState(false);
	const [userId, setUserId] = useState("");

	useEffect(() => {
		console.log("userprovider");
		const validate = async () => {
			const data = await validateUserSession();

			if (data) {
				setUserId(data.userId);
				setValidated(true);
			} else {
				setUserId("");
				setValidated(false);
			}
		};
		validate();
	}, [validated]);

	return (
		<UserContext.Provider value={{ validated, setValidated, userId }}>
			{children}
		</UserContext.Provider>
	);
}
