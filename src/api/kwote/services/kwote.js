'use strict';

/**
 * kwote service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kwote.kwote');
