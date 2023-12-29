import { IAttachment } from './IAttachment';
export interface IImage {
    url: string | IAttachment;
    proxy_url?: string;
    height?: number;
    width?: number;
}
