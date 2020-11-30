const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  query: `
    albumBySlug(id: ID slug: String): Album
  `,
  resolver: {
    Query: {
      albumBySlug: {
        resolverOf: 'Album.findOne',
        async resolver(_, { slug }) {
          const entity = await strapi.services.album.findOne({ slug });
          return sanitizeEntity(entity, { model: strapi.models.album });
        },
      },
    },
  },
};
