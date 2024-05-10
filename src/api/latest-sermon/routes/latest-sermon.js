'use strict';

/**
 * latest-sermon router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-sermon.latest-sermon');
