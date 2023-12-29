import { Embed, Webhook } from './src'

const hook = new Webhook('https://discord.com/api/webhooks/1190087534009663588/btLQkO8X0KuOI2ZwAKbA9boglM-YK3e5PKF_XX3fJar6rty23IUZuSyETiTQncXzxCCY')

const embed = new Embed()


embed
	.setTitle('Hello, world!')
	.setDescription('This is a description')
//.setColor(0x00ff00)
	.setTimestamp()
	.addField({
		name: 'Field 1',
		value: 'Hello, world!',
		inline: true,
	})

hook.addEmbed(embed).send()
//get information about the embed using our wrapper via hook.get(HERE)
hook.get().then(console.log)
