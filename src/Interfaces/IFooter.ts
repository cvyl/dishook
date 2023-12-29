import { IAttachment } from './IAttachment'

export interface IFooter {
    text: string						// The text of the footer.
    icon_url: string | IAttachment		// The url of the footer icon (only supports http(s) and attachments).
    proxy_icon_url?: string				// A proxied url of footer icon.
}