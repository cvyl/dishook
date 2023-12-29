import { IAttachment } from './IAttachment';
export interface IAuthor {
    name: string;
    url?: string;
    icon_url?: string | IAttachment;
    proxy_icon_url?: string;
}
