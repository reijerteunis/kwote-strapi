'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::kwote.kwote', ({ strapi }) =>  ({
    async like(ctx) {
            const { id } = ctx.params;
            const { query } = ctx;

            let entity = await strapi.service('api::kwote.kwote').findOne(id, query);
            const entry = await strapi.entityService.update('api::kwote.kwote', id, {
                data: {
                  favorite: parseInt(entity.favorite)+1,
                },
              });

            const sanitizedEntity = await this.sanitizeOutput(entry, ctx);

            return this.transformResponse(sanitizedEntity);
    },

    async dislike(ctx) {
            const { id } = ctx.params;
            const { query } = ctx;

            let entity = await strapi.service('api::kwote.kwote').findOne(id, query);
            const entry = await strapi.entityService.update('api::kwote.kwote', id, {
                data: {
                  favorite: parseInt(entity.favorite)-1,
                },
              });

            const sanitizedEntity = await this.sanitizeOutput(entry, ctx);

            return this.transformResponse(sanitizedEntity);
    },

    async random(ctx) {
        const { query } = ctx;

        let entity = await strapi.service('api::kwote.kwote').find(query);

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));