import { IAttachment } from './IAttachment';
export interface IFooter {
    text: string;
    icon_url: string | IAttachment;
    proxy_icon_url?: string;
}
