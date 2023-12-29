import axios, { AxiosPromise } from 'axios'
import type {
	IAttachment,
	IWebhook,
	IWebhookParameter,
	IWebhookResponse,
	IEmbed,
} from '../Interfaces'
import { Request } from './Request'
import { Embed } from './Embed'

export class Webhook {
	protected client: Request
	protected avatar_url?: string
	protected username?: string
	protected content?: string
	protected tts?: boolean
	protected file?: IAttachment | string
	protected embeds?: Array<IEmbed>

	constructor(hookUrl: string) {
		this.client = new Request(
			axios.create({
				baseURL: hookUrl,
			})
		)
	}

	public setAvatarUrl(url: string): this {
		this.avatar_url = url
		return this
	}

	public setUsername(username: string): this {
		this.username = username
		return this
	}

	public setContent(content: string): this {
		this.content = content
		return this
	}

	public addEmbed(embed: Embed): Webhook {
		if (typeof this.content === 'undefined') this.embeds = [embed.toObject()]
		// else if (this.embeds.length <= 10 ) 
		this.embeds?.push(embed.toObject())
		return this
	}

	public setTTS(tts: boolean): this {
		this.tts = tts
		return this
	}

	public setFile(file: IAttachment | string): this {
		this.file = file
		return this
	}

	public async send() {
		return this.client
			.send('post', this.toObject())
			.then((res) => res)
			.catch((err) => err)
	}

	public async get(): AxiosPromise<IWebhookResponse> {
		return this.client
			.send('get', {})
			.then((res) => res as AxiosPromise<IWebhookResponse>)
			.catch((err) => err)
	}

	public async modify(options: IWebhookParameter,): AxiosPromise<IWebhookResponse> {
		return this.client
			.send('patch', options)
			.then((res) => res as AxiosPromise<IWebhookResponse>)
			.catch((err) => err)
	}

	public async delete(): AxiosPromise<IWebhookResponse> {
		return this.client
			.send('delete', {})
			.then((res) => res as AxiosPromise<IWebhookResponse>)
			.catch((err) => err)
	}

	private toObject(): IWebhook {
		const obj: IWebhook = {}

		if (this.content) obj.content = this.content
		if (this.username) obj.username = this.username
		if (this.avatar_url) obj.avatar_url = this.avatar_url
		if (this.tts) obj.tts = this.tts
		if (this.file) obj.file = this.file
		if (this.embeds) obj.embeds = this.embeds
		return obj
	}

	public static async getWebhook(id: string, token: string): AxiosPromise<IWebhookResponse> {
		return axios.get(`https://discord.com/api/webhooks/${id}/${token}`)
	}

	public async isValid(): Promise<boolean> {
		return this.client.send('get', {}).then((res) => {
			if (res) return true
			return false
		})
	}
}



