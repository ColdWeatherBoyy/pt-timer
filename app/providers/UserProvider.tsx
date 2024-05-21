"use client";

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { getUserId, validateUserSession } from "../utilities/authFunctions";

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
		const validate = async () => {
			const res = await validateUserSession();
			res ? setValidated(true) : setValidated(false);
		};
		validate();
	}, [validated]);

	useEffect(() => {
		const getId = async () => {
			const userId = await getUserId();
			if (userId) setUserId(userId);
		};
		if (validated) {
			getId();
		} else {
			setUserId("");
		}
	}, [validated, userId]);

	return (
		<UserContext.Provider value={{ validated, setValidated, userId }}>
			{children}
		</UserContext.Provider>
	);
}
