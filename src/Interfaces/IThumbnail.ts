import { IAttachment } from './IAttachment'

export interface IThumbnail {
    url: string | IAttachment		// Represents the URL of the thumbnail image or an attachment object
    proxy_url?: string				// Represents the proxy URL of the thumbnail image
    height?: number					// Represents the height of the thumbnail image
    width?: number					// Represents the width of the thumbnail image
}