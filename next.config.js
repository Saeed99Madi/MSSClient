const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  env: {
    BASE_UEL: 'https://mooiesterksolar.com/api/v1',
    BASEE_UEL: 'https://mooiesterksolar.com/api/v1/images',
  },
};
