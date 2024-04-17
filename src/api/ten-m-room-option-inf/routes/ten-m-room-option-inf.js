'use strict';

/**
 * ten-m-room-option-inf router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ten-m-room-option-inf.ten-m-room-option-inf', {
  config: {
    find: {
      middlewares: ["global::tenant-middleware"],
    },
    findOne: {
      middlewares: ["global::tenant-middleware"],
    },
    delete: {
      middlewares: ["global::tenant-middleware"],
    },
    update: {
      middlewares: ["global::tenant-middleware"],
    },
    create: {
      middlewares: ["global::tenant-middleware"],
    },
  }
});
