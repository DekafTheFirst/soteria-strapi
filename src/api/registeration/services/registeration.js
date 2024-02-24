'use strict';

/**
 * registeration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::registeration.registeration');
