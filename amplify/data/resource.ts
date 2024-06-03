import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

export enum Unit {
	seconds = "secs",
	minutes = "mins",
}

const schema = a.schema({
	Type: a.enum([Unit.minutes, Unit.seconds]),
	Timer: a
		.model({
			userId: a.string().required(),
			type: a.ref("Type").required(),
			duration: a.integer().required(),
			interval: a.integer().required(),
		})
		.secondaryIndexes((index) => [index("userId")])
		.authorization((allow) => [allow.ownerDefinedIn("userId")]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
	schema,
	authorizationModes: {
		defaultAuthorizationMode: "userPool",
	},
});
