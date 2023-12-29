import {
	IAuthor,
	IField,
	IFooter,
	IEmbed,
	IProvider,
	IThumbnail,
	IVideo,
	IImage,
} from '../Interfaces'

export class Embed {
	protected title?: string
	protected type = 'rich'
	protected description?: string
	protected url?: string
	protected timestamp?: string
	protected color?: number
	protected footer?: IFooter
	protected image?: IImage
	protected thumbnail?: IThumbnail
	protected video?: IVideo
	protected provider?: IProvider
	protected author?: IAuthor
	protected fields?: Array<IField>

	public setTitle(title: string): Embed {
		this.title = title
		return this
	}

	public setDescription(description: string): Embed {
		this.description = description
		return this
	}

	public setURL(url: string): Embed {
		this.url = url
		return this
	}

	public setTimestamp(): Embed {
		this.timestamp = new Date().toISOString()
		return this
	}

	public setColor(color: number): Embed {
		this.color = color
		return this
	}

	public setFooter(footer: IFooter): Embed {
		this.footer = footer
		return this
	}

	public setImage(image: IThumbnail): Embed {
		this.image = image
		return this
	}

	public setThumbnail(thumbnail: IThumbnail): Embed {
		this.thumbnail = thumbnail
		return this
	}

	public setVideo(video: IVideo): Embed {
		this.video = video
		return this
	}

	public setProvider(provider: IProvider): Embed {
		this.provider = provider
		return this
	}

	public setAuthor(author: IAuthor): Embed {
		this.author = author
		return this
	}

	public addField(field: IField): Embed {
		if (typeof this.fields === 'undefined') this.fields = [field]
		else if (this.fields.length <= 25) this.fields?.push(field)
	
		return this
	}

	public setFields(fields: Array<IField>): Embed {
		this.fields = fields.slice(0, 25)
		return this
	}

	public toObject(): IEmbed {
		return {
			title: this.title,
			type: 'rich',
			description: this.description,
			url: this.url,
			timestamp: this.timestamp,
			color: this.color,
			footer: this.footer,
			image: this.image,
			thumbnail: this.thumbnail,
			video: this.video,
			provider: this.provider,
			author: this.author,
			fields: this.fields,
		}
	}

}