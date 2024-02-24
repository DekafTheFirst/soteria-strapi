'use strict';

module.exports = {
    register: async (ctx) => {
      console.log("Custom endpoint for events is working!");
      ctx.send("Custom endpoint for events is working!");
    }
};

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event');
