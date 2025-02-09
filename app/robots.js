import { data } from "@/data/site-details";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // Allow all pages to be crawled
    },
    sitemap: `https://${data.domain}/sitemap.xml`,
  };
}
