import { IAttachment } from './IAttachment'

export interface IImage {
    url: string | IAttachment		// Represents the URL of the image or an attachment object
    proxy_url?: string				// Represents the proxy URL of the image
    height?: number					// Represents the height of the image
    width?: number					// Represents the width of the image
}
