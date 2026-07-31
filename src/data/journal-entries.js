export const journalEntries = [
  {
    date: "2026-07-31",
    content: "There was an invalid SSL certificate error on this site (526). Switching the SSL setting to a different option and then re-switching it back to the original setting in Cloudflare fixed it. Might have been a caching issue and doing this forced it to revalidate. Learned this certificate is like an ID for a site so it can securely connect to a browser using HTTPS. My setup for this site actually uses two SSL certificates because I have a custom domain that is managed by Cloudflare and my site is hosted by Github Pages. So when someone access my site on a browser, a connecton is created with Cloudflare, then Cloudflare creates a connection with Github Pages to get the content. Github Pages is what serves my site, so it's called an origin server. Cloudflare sits in front of Github Pages and it's called a reverse proxy.",
  }
];