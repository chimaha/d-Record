// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    site: "https://hamachi25.github.io",
    base: "/d-Record",
    integrations: [
        starlight({
            title: "d-Record",
            locales: {
                root: {
                    label: "日本語",
                    lang: "ja",
                },
            },
            logo: {
                light: "./src/assets/light-title.svg",
                dark: "./src/assets/dark-title.svg",
                replacesTitle: true,
            },
            social: {
                github: "https://github.com/hamachi25/d-Record",
            },
            sidebar: [
                {
                    label: "ガイド",
                    items: [
                        { label: "インストール", slug: "guides/install" },
                        { label: "機能", slug: "guides/feature" },
                        { label: "Q&A", slug: "guides/qa" },
                    ],
                },
            ],
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 4,
            },
            pagefind: false,
            head: [
                {
                    tag: "meta",
                    attrs: {
                        name: "google-site-verification",
                        content: "IX_BtfrZkqoIAYxiNbckPHxuTa1RLD7S7Mu1zJfMPfM",
                    },
                },
            ],
        }),
    ],
});