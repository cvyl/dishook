import { IAuthor } from './IAuthor'
import { IField } from './IField'
import { IFooter } from './IFooter'
import { IImage } from './IImage'
import { IProvider } from './IProvider'
import { IThumbnail } from './IThumbnail'
import { IVideo } from './IVideo'

export interface IEmbed {
    title?: string
    type?: 'rich'
    description?: string
    url?: string
    timestamp?: string
    color?: number
    footer?: IFooter
    image?: IImage
    thumbnail?: IThumbnail
    video?: IVideo
    provider?: IProvider
    author?: IAuthor
    fields?: Array<IField>
}