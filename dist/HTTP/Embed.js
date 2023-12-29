'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Embed = void 0
class Embed {
	setTitle(title) {
		this.title = title
		return this
	}
	setDescription(description) {
		this.description = description
		return this
	}
	setURL(url) {
		this.url = url
		return this
	}
	setTimestamp(timestamp) {
		this.timestamp = timestamp
		return this
	}
	setColor(color) {
		if (color !== undefined && color !== null) {
			color = parseInt(color.toString().replace('#', ''), 16)
		}
		this.color = color
		return this
	}
	setFooter(footer) {
		this.footer = footer
		return this
	}
	setImage(image) {
		this.image = image
		return this
	}
	setThumbnail(thumbnail) {
		this.thumbnail = thumbnail
		return this
	}
	setVideo(video) {
		this.video = video
		return this
	}
	setProvider(provider) {
		this.provider = provider
		return this
	}
	setAuthor(author) {
		this.author = author
		return this
	}
	addField(field) {
		if (!this.fields)
			this.fields = []
		this.fields.push(field)
		return this
	}
	setFields(fields) {
		this.fields = fields.slice(0, 25)
		return this
	}
	toObject() {
		return {
			title: this.title,
			type: this.type,
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
exports.Embed = Embed
