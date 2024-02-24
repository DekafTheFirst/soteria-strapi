'use strict';

module.exports = [
    {
      method: 'GET',
      path: '/registrations',
      handler: 'registrations.create',
      config: {
        policies: [], // Optionally, you can specify policies for authentication and authorization
      },
    },
  ];

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::registeration.registeration');
