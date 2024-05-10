'use strict';

/**
 * latest-sermon controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-sermon.latest-sermon');
