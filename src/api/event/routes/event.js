'use strict';

module.exports = {
    routes: [
        {
            "method": "GET",
            "path": "/events/register",
            "handler": "events.register"
        }
    ],
  };

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::event.event');
