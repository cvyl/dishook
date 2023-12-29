import type { IUser } from './IUser'

export interface IWebhookResponse {
	id: string              // The id of the webhook
	type: number            // The type of the webhook
	guild_id: string        // The guild id this webhook is for, if any
	channel_id: string      // The channel id this webhook is for, if any
	user?: IUser            // The user this webhook was created by (not returned when getting a webhook with its token)
	name: string            // The default name of the webhook
	avatar: string          // The default user avatar hash of the webhook
	token: string           // The secure token of the webhook (returned for Incoming Webhooks)
	application_id: string  // The bot/OAuth2 application that created this webhook
	url?: string            // The url used for executing the webhook (returned by the webhooks OAuth2 flow)
	source_guild?: {        // The guild of the channel that this webhook is following (returned for Channel Follower Webhooks)
		id: number              // The guild id this webhook is for
		name: string		// The guild name this webhook is for
		icon?: string           // The guild icon hash this webhook is for
	}
	source_channel?: {      // The channel that this webhook is following (returned for Channel Follower Webhooks)
		id: number              // The channel id this webhook is for
		name: string            // The channel name this webhook is for
		icon: string            // The channel icon hash this webhook is for
	}
}