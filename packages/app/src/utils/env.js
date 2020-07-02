const { WEB, BROWSER } = process.env;

let apiUrl;

if (process.env.WEB !== 'true') {
  require('../../publicenv');
  apiUrl = process.env.API_SERVER;
} else if (WEB === 'true' && BROWSER) {
  apiUrl = window.API_SERVER;
} else {
  apiUrl = process.env.API_SERVER;
}

export const API_URL = apiUrl;
