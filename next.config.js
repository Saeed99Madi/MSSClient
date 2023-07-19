const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  env: {
    BASE_UEL: 'http://64.227.103.130/api/v1/',
    BASEE_UEL: 'http://64.227.103.130/api/v1/images/',
  },
};
