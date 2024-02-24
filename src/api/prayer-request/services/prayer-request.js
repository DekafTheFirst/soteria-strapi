'use strict';

/**
 * prayer-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prayer-request.prayer-request');
