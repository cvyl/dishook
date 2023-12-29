import { Embed, Webhook } from './src'

const hook = new Webhook('https://discord.com/api/webhooks/1190087534009663588/btLQkO8X0KuOI2ZwAKbA9boglM-YK3e5PKF_XX3fJar6rty23IUZuSyETiTQncXzxCCY')

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