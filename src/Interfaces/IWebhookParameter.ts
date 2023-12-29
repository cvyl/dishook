export interface IWebhookParameter {
	name: string			// The name of the webhook
	channel_id: string		// The channel ID this webhook is for, or null if it's a global webhook
	avatar?: string			// The default avatar of the webhook
}