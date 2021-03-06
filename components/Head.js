import { NextSeo } from 'next-seo';

const SEOHead = ({title, description, twitter, name, content}) => (
    <NextSeo
      title={title}
      description={description}
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        site_name: name,
      }}
      twitter={{
        handle: {twitter},
        site: '@site',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[{
        property: 'dc:creator',
        content: content
      }, {
        name: name,
        content: content
      }, {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      }]}
    />
);

export default SEOHead;