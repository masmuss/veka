// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import pagefind from "astro-pagefind";
import { SITE } from "./src/lib/site-config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import wikiLink from "remark-wiki-link";
import { remarkCustomSyntax } from "./src/lib/wiki/remark-custom-syntax.mjs";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkDeflist from "remark-deflist";
import { unified } from "@astrojs/markdown-remark";
// bejamas:astro-fonts:start
/** @type {any} */
const BEJAMAS_ASTRO_FONTS = [
	{
		provider: fontProviders.google(),
		name: "Geist Mono",
		cssVariable: "--font-mono",
		subsets: ["latin"],
	},
	{
		provider: fontProviders.google(),
		name: "Geist",
		cssVariable: "--font-sans",
		subsets: ["latin"],
	},
	{
		provider: fontProviders.google(),
		name: "Spectral",
		cssVariable: "--font-heading",
		subsets: ["latin"],
	},
];
// bejamas:astro-fonts:end

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Build a map of wiki filenames to their full paths inside src/content/wiki
const wikiLinksMap = new Map();
try {
	const wikiFiles = fs.readdirSync(path.join(__dirname, "src/content/wiki"), { recursive: true });
	for (const file of wikiFiles) {
		if (typeof file === "string" && file.endsWith(".md")) {
			const slug = file.replace(/\.md$/, ""); // e.g. "notes/git-workflow"
			const basename = path.basename(slug); // e.g. "git-workflow"
			wikiLinksMap.set(basename.toLowerCase(), slug);
		}
	}
} catch (e) {
	console.warn("Failed to read wiki files for wikiLinksMap", e);
}

export default defineConfig({
	site: SITE.url,
	fonts: BEJAMAS_ASTRO_FONTS,
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	},
	integrations: [pagefind()],
	markdown: {
		processor: unified({
			remarkPlugins: [
				remarkMath,
				[wikiLink, {
					pageResolver: (name) => {
						return [name.replace(/ /g, '-').toLowerCase()];
					},
					hrefTemplate: (permalink) => {
						const resolved = wikiLinksMap.get(permalink) || permalink;
						return `/wiki/${resolved}`;
					}
				}],
				remarkDeflist,
				remarkCustomSyntax,
				remarkAlert,
			],
			rehypePlugins: [rehypeKatex],
		}),
		shikiConfig: {
			themes: {
				dark: "github-dark",
				light: "github-light",
			},
		},
	},
});
