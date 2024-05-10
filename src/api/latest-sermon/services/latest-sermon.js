'use strict';

/**
 * latest-sermon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-sermon.latest-sermon');
