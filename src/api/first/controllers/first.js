'use strict';

/**
 * first controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::first.first');
