import { IAuthor, IField, IFooter, IEmbed, IProvider, IThumbnail, IVideo, IImage } from '../Interfaces'
export declare class Embed {
	protected title?: string
	protected type?: 'rich'
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
	setTitle(title: string): Embed;
	setDescription(description: string): Embed;
	setURL(url: string): Embed;
	setTimestamp(timestamp: string): Embed;
	setColor(color: number): Embed;
	setFooter(footer: IFooter): Embed;
	setImage(image: IThumbnail): Embed;
	setThumbnail(thumbnail: IThumbnail): Embed;
	setVideo(video: IVideo): Embed;
	setProvider(provider: IProvider): Embed;
	setAuthor(author: IAuthor): Embed;
	addField(field: IField): Embed;
	setFields(fields: Array<IField>): Embed;
	toObject(): IEmbed;
}
