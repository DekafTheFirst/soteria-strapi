'use strict';

module.exports = {
    async create(ctx) {
      const { eventId } = ctx.request.body;
      const userId = ctx.state.user.id; // Assuming user is authenticated
  
      try {
        // Your registration logic here
  
        ctx.send({ message: 'User successfully registered for event' });
      } catch (error) {
        ctx.badRequest('Error registering user for event', error);
      }
    },
  };

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::registeration.registeration');
