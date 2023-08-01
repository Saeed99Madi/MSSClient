const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  env: {
    BASE_UEL: 'https://64.227.103.130/api/v1',
    BASEE_UEL: 'https://64.227.103.130/api/v1/images',
  },
};
