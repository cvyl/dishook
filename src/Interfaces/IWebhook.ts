import { IAttachment } from './IAttachment'
import { IEmbed } from './IEmbed'

export interface IWebhook {
	content?: string			// The message contents (up to 2000 characters)
	username?: string			// Override the default username of the webhook
	avatar_url?: string;		// Override the default avatar of the webhook
	tts?: boolean				//true if this is a TTS message    
	file?: IAttachment | string	// The contents of the file being sent
	embeds?: any[]				// Embedded rich content
	allowed_mentions?: any		// Allowed mentions for the message                                
	flags?: number				// The flags to use for the message
	components?: any[]			// The components to use for the message
	attachments?: any[]			// The attachments to use for the message
	message_reference?: any		// The message reference to use for the message
	embed?: Array<IEmbed>		// Embedded rich content
	thread_name?: string		// The name of the thread
	applied_tags?: string[]		// The tags to apply to the thread
	payload_json?: string		// JSON encoded body of any additional request fields
}