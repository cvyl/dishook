export interface IAttachment {
    filename: string				// The name of the file attached
    id: string						// The attachment ID
    size: number					// The size of the file in bytes
    url: string						// The source URL of the file
    proxy_url: string				// The proxied URL of the file
    height?: number					// The height of the file (if image)
    width: number					// The width of the file (if image)
}