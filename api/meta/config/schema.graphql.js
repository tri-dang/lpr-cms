const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  query: `
    metaBySlug(id: ID slug: String): Meta
  `,
  resolver: {
    Query: {
      metaBySlug: {
        resolverOf: 'Meta.findOne',
        async resolver(_, { slug }) {
          const entity = await strapi.services.meta.findOne({ slug });
          return sanitizeEntity(entity, { model: strapi.models.meta });
        },
      },
    },
  },
};
