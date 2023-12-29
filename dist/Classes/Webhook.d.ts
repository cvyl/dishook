import { AxiosPromise } from 'axios';
import type { IAttachment, IWebhookParameter, IWebhookResponse, IEmbed } from '../Interfaces';
import { Request } from './Request';
import { Embed } from './Embed';
export declare class Webhook {
    protected client: Request;
    protected avatar_url?: string;
    protected username?: string;
    protected content?: string;
    protected tts?: boolean;
    protected file?: IAttachment | string;
    protected embeds?: Array<IEmbed>;
    constructor(hookUrl: string);
    setAvatarUrl(url: string): this;
    setUsername(username: string): this;
    setContent(content: string): this;
    addEmbed(embed: Embed): Webhook;
    setTTS(tts: boolean): this;
    setFile(file: IAttachment | string): this;
    send(): Promise<unknown>;
    get(): AxiosPromise<IWebhookResponse>;
    modify(options: IWebhookParameter): AxiosPromise<IWebhookResponse>;
    delete(): AxiosPromise<IWebhookResponse>;
    private toObject;
    static getWebhook(id: string, token: string): AxiosPromise<IWebhookResponse>;
    isValid(): Promise<boolean>;
}
