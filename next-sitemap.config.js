/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://haulhype.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/private/"],
      },
    ],
    additionalSitemaps: ["https://haulhype.com/sitemap.xml"],
  },
  exclude: ["/admin/*", "/api/*", "/_next/*", "/private/*"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/services") {
      priority = 0.9;
      changefreq = "monthly";
    } else if (path === "/blog") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/blog/")) {
      priority = 0.7;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
