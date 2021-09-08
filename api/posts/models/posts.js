'use strict';

const axios = require('axios').default

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  async afterCreate(result, data) {
    axios.post('https://api.netlify.com/build_hooks/6138d564048bf9e207dbcc29')
  },
  async afterUpdate(resul, data) {
    axios.post('https://api.netlify.com/build_hooks/6138d564048bf9e207dbcc29')
  }
};
