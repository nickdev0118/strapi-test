'use strict';

/**
 * first service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::first.first');
