import { AxiosPromise } from 'axios'
import type { IAttachment, IWebhookParameter, IWebhookResponse } from '../Interfaces'
import { Request } from './Request'
export declare class Webhook {
	protected client: Request
	protected avatar_url?: string
	protected username?: string
	protected content?: string
	protected tts?: boolean
	protected file?: IAttachment | string
	constructor(hookUrl: string);
	setAvatarUrl(url: string): this;
	setUsername(username: string): this;
	setContent(content: string): this;
	setTTS(tts: boolean): this;
	setFile(file: IAttachment | string): this;
	send(): Promise<unknown>;
	get(): AxiosPromise<IWebhookResponse>;
	modify(options: IWebhookParameter): AxiosPromise<IWebhookResponse>;
	delete(): AxiosPromise<IWebhookResponse>;
	private toObject
	static getWebhook(id: string, token: string): AxiosPromise<IWebhookResponse>;
	isValid(): Promise<boolean>;
}
