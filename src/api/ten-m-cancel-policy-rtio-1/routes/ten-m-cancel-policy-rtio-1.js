'use strict';

/**
 * ten-m-cancel-policy-rtio-1 router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ten-m-cancel-policy-rtio-1.ten-m-cancel-policy-rtio-1', {
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
