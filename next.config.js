const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  env: {
    BASE_UEL: 'http://localhost:8080/api/v1',
    // BASE_UEL: 'https://client.mooiesterksolar.com/api/v1',
    BASEE_UEL: 'https://mooiesterksolar.com/api/v1/images',
  },
};
