module.exports = {
  plugins: [
    `gatsby-plugin-anchor-links`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Barlow:300,400,500,600,700,800',
            'Zilla Slab:300,400,500,600,700,800',
          ],
        },
      },
    },
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: (config, { plugins }) => {
          config.plugins.push(
            plugins.define({
              __MANIFEST_PLUGIN_HAS_LOCALISATION__: JSON.stringify('false'),
            })
          )
        },
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.scss'], // applies purging only on the bulma css file
        //ignore: ['config.sass', 'innerpages.sass']
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url:
          'https://contact-form.holisticindustries.com/api/core-location/list',
        rootKey: 'storeAddress',
        schemas: {
          storeAddress: `
            id: Int
            name: String
            customerFacingName: String
            latitude: Float
            longitude: Float
            dutchieEmbedUrl: String
            phone: String
            city: String
            state: String
            stateCode: String
            postalCode: String
            type: String
            address1: String
            address2: String
            locationHours: [locationHours]
          `,
          locationHours: `
            id: Int
            guid: String
            locationId: Int,
            text: String
            sortOrder: Int,
            createdAt: String
            updatedAt: String
          `,
        },
      },
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url:
          'https://contact-form.holisticindustries.com/api/site-param/c8de8bab-4d61-49fa-b745-5e2e53bc83a2',
        rootKey: 'accessTokens',
        schemas: {
          accessTokens: `
            instagramAccessToken: String
            googleMapsKey: String            
          `,
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },
    {
      resolve: 'gatsby-source-instagram-all',
      options: {
        access_token: ''
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-150593779-4', // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        icon: 'src/img/Strane_S.svg',
        // background_color: `#f7f0eb`,
        // theme_color: `#a2466c`,
        display: `standalone`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}