const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
    const links = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/AllProducts', changefreq: 'daily', priority: 1 },
    ];

    if (links.length) {
      const sitemapStream = new SitemapStream({ hostname: 'http://mooiesterksolar.com/' });

        links.forEach(link => {
            sitemapStream.write(link);
        });

        sitemapStream.end();

        // Resolve the promise to get the XML buffer and convert it to a string
        const xmlBuffer = await streamToPromise(sitemapStream);
        const xml = xmlBuffer.toString();

        // Write the XML to a file
        const writeStream = createWriteStream('./public/sitemap.xml');
        writeStream.write(xml);
        writeStream.close();

        console.log('Sitemap generated and saved in the public directory!');
    } else {
        console.log('No links provided to generate the sitemap.');
    }
}

generateSitemap();
