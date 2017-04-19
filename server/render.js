import React from 'react';
import cookie from 'react-cookie';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
// import qs from 'qs';
import routes from '../app/web/routes';
import configureStore from '../app/web/store/configureStore';
// import App from '../app/web/components/app';
import { setUser } from '../app/actions/auth.actions';


function renderFullPage(html, initialState) {
  let styles;

  // load extracted styles in head when in production
  if (process.env.NODE_ENV === 'development') styles = '';
  else styles = '<link rel="stylesheet" href="/styles.css" />';

  let app = `
    <!doctype html>
    <html>
      <head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <title>Relevant: A Social News Reader</title>

        <meta name="description"
          content="
            Relevant is a social news reader that promotes reliable information and rewards expertise. Instead of relying on quantity (# of likes, followers), Relevant’s algorithm relies on a quality metric - relevance score. This system is designed to penalise clickbait and fake news while promoting useful and reliable information."
        />
        <meta property="og:description"
          content="
            Relevant is a social news reader that promotes reliable information and rewards expertise. Instead of relying on quantity (# of likes, followers), Relevant’s algorithm relies on a quality metric - relevance score. This system is designed to penalise clickbait and fake news while promoting useful and reliable information."
        />
        <meta property="og:title" content="Relevant: A Social News Reader" />
        <meta property="og:url" content="https://relevant.community" />
        <meta property="og:image" content="https://relevant.community/img/fbfimg" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@flickr" />
        <meta name="twitter:title" content="Relevant: A Social News Reader" />
        <meta name="twitter:description" content="
            Relevant is a social news reader that promotes reliable information and rewards expertise. Instead of relying on quantity (# of likes, followers), Relevant’s algorithm relies on a quality metric - relevance score. This system is designed to penalise clickbait and fake news while promoting useful and reliable information." />
        <meta name="twitter:image" content="https://relevant.community/img/fbfimg" />

        ${styles}
      </head>
      <body>
        <div id="app">${html}</div>
         <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  return app;
}

function fetchComponentData(dispatch, components, params, req) {
  const promises = components
    .filter((component) => component && component.fetchData) // 1
    .map((component) => component.fetchData) // 2
    .map(fetchData => {
      console.log(fetchData);
      return fetchData(dispatch, params, req); // 3
    });
  return Promise.all(promises);
}

export default function handleRender(req, res) {
  // const params = qs.parse(req.query);
  cookie.plugToRequest(req, res);

  // const initialState = {routing : {path: req.originalUrl}};
  let confirm = {};
  console.log('req ', req.unconfirmed);
  if (req.unconfirmed) confirm = { auth: { confirmed: false } };
  const initialState = { ...confirm };
  console.log('initialState ', initialState);

  // Create a new Redux store instance
  const store = configureStore(initialState);
  if (req.user) store.dispatch(setUser(req.user));

  match(
    { routes: routes(store), location: req.originalUrl },
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        console.error('ROUTER ERROR:', error);
        res.status(500);
      } else if (!renderProps) {
        res.status(500);
      } else {
        // console.log("RENDERING", req.originalUrl)
        let renderHtml = () => {
          const component = (
            <Provider store={store}>
              <div className='parent'>
                <RouterContext {...renderProps} />
              </div>
            </Provider>
          );
          return renderToString(component);
        };

        // This code pre-fills the data on the server
        fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
          .then(() => {
            console.log('GOT DATA, RENDERING COMPONENTS');
            res.send(renderFullPage(renderHtml(), store.getState()));
          })
          .catch(err => {
            console.log(err);
            return res.end(err.message);
          });

        // res.send(renderFullPage(renderHtml(), store.getState()));
      }
    }
  );
}

