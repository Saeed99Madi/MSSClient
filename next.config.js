const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  env: {
    BASE_UEL: 'http://mooiesterksolar.com/api/v1/',
    BASEE_UEL: 'http://mooiesterksolar.com/api/v1/images/',
  },
};
