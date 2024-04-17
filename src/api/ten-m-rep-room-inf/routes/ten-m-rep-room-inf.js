'use strict';

/**
 * ten-m-rep-room-inf router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ten-m-rep-room-inf.ten-m-rep-room-inf', {
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
