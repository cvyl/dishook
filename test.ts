import { Embed, Webhook } from '@ly-nld/dishook'

const hook = new Webhook('WEBHOOK_HERE')

const embed = new Embed()


embed
	.setTitle('Hello, world!')
	.setDescription('This is a description')
	.setURL('https://google.com')
	.setColor(0x00ff00)
	.setFooter({
		text: 'This is a footer',
		icon_url: 'https://google.com',
	})
	.setTimestamp()
	.addField({
		name: 'Field 1',
		value: 'Hello, world!',
		inline: true,
	})

hook.addEmbed(embed).send()

hook
	.setTTS(true)
	.setContent('Hello, world!')
	.setUsername('Webhook')
	.setAvatarUrl('https://google.com')
	.send()