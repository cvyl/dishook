import type { IUser } from './IUser';
export interface IWebhookResponse {
    id: string;
    type: number;
    guild_id: string;
    channel_id: string;
    user?: IUser;
    name: string;
    avatar: string;
    token: string;
    application_id: string;
    url?: string;
    source_guild?: {
        id: number;
        name: string;
        icon?: string;
    };
    source_channel?: {
        id: number;
        name: string;
        icon: string;
    };
}
