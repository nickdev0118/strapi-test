'use strict';

/**
 * ten-m-child-pric router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ten-m-child-pric.ten-m-child-pric', {
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
