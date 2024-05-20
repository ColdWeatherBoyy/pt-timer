import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// const schema = a.schema({
// 	MinuteTimer: a
// 		.model({
// 			// userId: a.string(),
// 			length: a.integer(),
// 		})
// 		// .secondaryIndexes((index) => [index("userId")])
// 		// .authorization((allow) => [allow.owner()]),
// 		.authorization((allow) => allow.authenticated()),
// 	SecondTimer: a
// 		.model({
// 			// userId: a.string(),
// 			length: a.integer(),
// 		})
// 		// .secondaryIndexes((index) => [index("userId")])
// 		// .authorization((allow) => [allow.owner()]),
// 		.authorization((allow) => allow.authenticated()),
// });

const schema = a.schema({
	Timer: a
		.model({
			userId: a.string(),
			type: a.enum(["MINUTE", "SECOND"]),
			length: a.integer(),
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
