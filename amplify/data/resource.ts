import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

export enum Unit {
	seconds = "secs",
	minutes = "mins",
}

const schema = a.schema({
	Unit: a.enum([Unit.minutes, Unit.seconds]),
	Timer: a
		.model({
			userId: a.string().required(),
			unit: a.ref("Unit").required(),
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
