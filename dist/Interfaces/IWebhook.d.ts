import { IAttachment } from './IAttachment';
import { IEmbed } from './IEmbed';
export interface IWebhook {
    content?: string;
    username?: string;
    avatar_url?: string;
    tts?: boolean;
    file?: IAttachment | string;
    embeds?: any[];
    allowed_mentions?: any;
    flags?: number;
    components?: any[];
    attachments?: any[];
    message_reference?: any;
    embed?: Array<IEmbed>;
    thread_name?: string;
    applied_tags?: string[];
    payload_json?: string;
}
