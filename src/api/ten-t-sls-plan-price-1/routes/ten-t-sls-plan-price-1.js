'use strict';

/**
 * ten-t-sls-plan-price-1 router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ten-t-sls-plan-price-1.ten-t-sls-plan-price-1', {
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
