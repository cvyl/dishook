# Welcome to @ly-nld/dishook 👋
[![Version](https://img.shields.io/npm/v/@ly-nld/dishook.svg)](https://www.npmjs.com/package/@ly-nld/dishook)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://lgbt.sh/dishook/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ly-nld/dishook/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/ly-nld/@ly-nld/dishook)](https://github.com/ly-nld/dishook/blob/master/LICENSE)

> Simple Discord Webhook Wrapper

### 🏠 [Homepage](https://github.com/ly-nld/dishook)

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

Example usage
```ts
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
```
* Website: lgbt.sh
* Github: [@ly-nld](https://github.com/ly-nld)
* Issues: [issues page](https://github.com/ly-nld/dishook/issues).
