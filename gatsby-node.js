const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const fetch = require(`node-fetch`);

exports.onPreInit = async ({ actions, store }) => {
  const { setPluginStatus } = actions;
  const state = store.getState();
  const plugin = state.flattenedPlugins.find(
    (plugin) => plugin.name === "gatsby-source-instagram-all"
  );
  if (plugin) {
    const instagram_id = await fetchInstagramFeed();
    plugin.pluginOptions = {
      ...plugin.pluginOptions,
      ...{ access_token: instagram_id },
    };
    setPluginStatus({ pluginOptions: plugin.pluginOptions }, plugin);
  }
};

const fetchInstagramFeed = async () => {
  const response = await fetch(
    `https://contact-form.holisticindustries.com/api/site-param/c8de8bab-4d61-49fa-b745-5e2e53bc83a2`
  );
  const resultData = await response.json();
  return resultData.instagramAccessToken;
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      // result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/index.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

const axios = require("axios");
const crypto = require("crypto");

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // fetch raw data from the randomuser api
  const fetchRandomStore = () =>
    axios.get(
      `https://contact-form.holisticindustries.com/api/core-location/list`
    );
  // await for results
  const res = await fetchRandomStore();

  // map into these results and create nodes
  res.data.data.map((user, i) => {
    // Create your node object
    const userNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `RandomStore`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      name: user.name,
      latitude: user.latitude,
      longitude: user.longitude,
      dutchieEmbedUrl: user.dutchieEmbedUrl,
      city: user.city,
      state: user.state,
      stateCode: user.stateCode,
      postalCode: user.postalCode,
      type: user.type,
      address1: user.address1,
      address2: user.address2,
      phone: user.phone,
      storehours: user.locationHours,

      // etc...
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    // add it to userNode
    userNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(userNode);
  });

  return;
};
