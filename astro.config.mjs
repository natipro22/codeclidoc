import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CodeCLI Doc',
			logo: { src:"./src/assets/codeCLI.png", alt: "CodeCLI Logo", replacesTitle: true},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', link: '/guides/example/' },
				// 	],
				// },
				{
					label: 'Commands',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/commands/generate/overview/' },
						{ 
							label: 'Generate',
							items: [
								{ label: 'Overview', link: '/commands/generate/generate' },
								{ label: 'Class', link: '/commands/generate/class/' },
								{ label: 'Enum', link: '/commands/generate/enum/' },
								{ label: 'Interface', link: '/commands/generate/interface/' },
								{ label: 'Record', link: '/commands/generate/record/' },
								{ label: 'Controller', link: '/commands/generate/controller/' },
								{ label: 'Service', link: '/commands/generate/service/' },
								{ label: 'Minimal API', link: '/commands/generate/minimal-api/' },
								{ label: 'Endpoint', link: '/commands/generate/endpoint/' },
							]
						},
						{ 
							label: 'Blazor',
							items: [
								{ label: 'Overview', link: '/commands/blazor/overview/' },
								{ label: 'Component', link: '/commands/blazor/component/' },
								{ label: 'CSS', link: '/commands/blazor/css/' },
								{ label: 'Razor', link: '/commands/blazor/razor/' },
							]
						},
						{ 
							label: 'MediatR',
							items: [
								{ label: 'Overview', link: '/commands/mediatr/overview/' },
								{ label: 'Command', link: '/commands/mediatr/command/' },
								{ label: 'Query', link: '/commands/mediatr/query/' },
								{ label: 'Notification', link: '/commands/mediatr/notification/' },
							]
						},
						{ 
							label: 'Fluent Validation',
							items: [
								{ label: 'Overview', link: '/commands/fluent-validation/overview/' },
								{ label: 'Validator', link: '/commands/fluent-validation/validator/' },
							]
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
