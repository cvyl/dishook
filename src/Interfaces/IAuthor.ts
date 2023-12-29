import { IAttachment } from './IAttachment'

export interface IAuthor {
    name: string						// The name of the author
    url?: string						// The url of the author
    icon_url?: string | IAttachment		// The url of the author icon (only supports http(s) and attachments).
    proxy_icon_url?: string				// A proxied url of author icon.
}