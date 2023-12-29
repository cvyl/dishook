import { IAttachment } from './IAttachment';
export interface IThumbnail {
    url: string | IAttachment;
    proxy_url?: string;
    height?: number;
    width?: number;
}
