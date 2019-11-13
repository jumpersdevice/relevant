import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import { setUser, setCommunity } from 'modules/auth/auth.actions';
import routes from 'modules/_app/web/routes';
import configureStore from 'core/web/configureStore';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import path from 'path';
import { AppRegistry } from 'react-native-web';
import useragent from 'express-useragent';
import { Dimensions } from 'react-native';
import { getScreenSize } from 'app/utils/nav';
import { client } from 'app/core/apollo.client.server';
import { ApolloProvider } from '@apollo/react-common';

import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

const { NODE_ENV } = process.env;
const sheet = new ServerStyleSheet();

const statsFileName =
  NODE_ENV !== 'development' ? 'loadable-stats' : 'loadable-stats-dev';
const statsFile = path.resolve(`app/public/dist/${statsFileName}.json`);

// This is the stats file generated by webpack loadable plugin
// We create an extractor from the statsFile
let extractor =
  NODE_ENV !== 'development'
    ? new ChunkExtractor({ statsFile, entrypoints: 'app' })
    : null;

export function createInitialState(req, res) {
  const cachedCommunity = req.user ? req.user.community : null;

  if (cachedCommunity && req.url === '/') return res.redirect(`/${cachedCommunity}/new`);

  const userAgent = req.headers['user-agent']
    ? useragent.parse(req.headers['user-agent'])
    : {};
  const width = userAgent.isMobile ? 320 : 1000;
  Dimensions.set({ window: { width } });

  return {
    auth: {
      user: req.user,
      confirmed: req.confirmed || (req.user && req.user.confirmed),
      // TODO - get this from req.user
      community: req.params.community || cachedCommunity
    },
    navigation: {
      width,
      screenSize: getScreenSize(width)
    }
  };
}

export const initStore = compose(
  configureStore,
  createInitialState
);

export default async function handleRender(req, res) {
  const store = initStore(req, res);
  // TODO - get rid of this - need to convert util/api to middleware
  // and populate user store with req.user
  if (req.user) store.dispatch(setUser(req.user));
  store.dispatch(setCommunity(store.getState().auth.community));
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  try {
    // throw new Error('temp disable ssr');

    await handleRouteData({ req, store });
    const { app, rnWebStyles } = renderApp({ url: req.url, store });

    const html = renderFullPage({
      app,
      fullUrl,
      rnWebStyles,
      initialState: store.getState(),
      req
    });
    res.send(html);
  } catch (err) {
    console.log('RENDER ERROR', err); // eslint-disable-line
    res.send(renderFullPage({ initialState: store.getState(), fullUrl, req }));
  }
}

export function renderFullPage({ app, rnWebStyles, initialState, fullUrl, req }) {
  let cssStyleTags = '';
  let styledComponentsTags = '';

  // load extracted styles in head when in production
  if (NODE_ENV === 'development') {
    extractor = new ChunkExtractor({ statsFile, entrypoints: 'app' });
  } else {
    styledComponentsTags = sheet.getStyleTags();
    cssStyleTags = extractor.getStyleTags();
  }
  const meta = fetchMeta({ initialState, req });

  const scriptTags = extractor.getScriptTags();

  return `<!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <title>Relevant: The Only Social Network Built On Trust</title>
        <link rel="icon" href="https://relevant.community/favicon.ico?v=2" />
        <meta name="description" content="${meta.description}" />
        <meta property="og:description" content="${meta.description}" />
        <meta property="og:title" content="${meta.title}" />
        <meta property="og:url" content="${meta.url}" />
        <meta property="og:image" content="${meta.image}" />

        <meta name="twitter:card" content="${meta.type}" />
        <meta name="twitter:site" content="@relevantfeed" />
        <meta name="twitter:title" content="${meta.title}" />
        <meta name="twitter:description" content="${meta.description}" />
        ${meta.image ? `<meta name="twitter:image" content="${meta.image}" />` : ''}

        <meta name="apple-itunes-app" content="app-id=1173025051 app-argument=${fullUrl}">

        <meta name="google-play-app" content="app-id=com.relevantnative">
        <link rel="apple-touch-icon" href="/img/RoundedIcon.png">
        <link rel="android-touch-icon" href="/img/RoundedIcon.png">

        ${rnWebStyles}
        ${cssStyleTags}
        ${styledComponentsTags}
      </head>
      <body>
        <div id="app">${app}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          window.__APOLLO_STATE__ = ${JSON.stringify(client.extract())};
        </script>
        ${scriptTags}
      </body>
    </html>
  `;
}

export function fetchMeta({ initialState, req }) {
  const defaultMeta = {
    title: 'Relevant: The only social network built on trust.',
    description: 'Find your community and join the discussion.',
    image: 'https://relevant.community/img/fbImage.png',
    url: 'https://relevant.community' + req.originalUrl,
    type: 'summary_large_image'
  };

  const { feed, postId, commentId } = req.params;
  const postMeta = getPostMeta({ postId, commentId, initialState });
  const communityMeta = getCommunityMeta({ initialState });

  Object.keys(postMeta).forEach(key => {
    if (!postMeta[key]) delete postMeta[key];
  });

  if (postId) return { ...defaultMeta, ...communityMeta, ...postMeta };
  if (feed) return { ...defaultMeta, ...communityMeta };
  return defaultMeta;
}

function getPostMeta({ initialState, postId, commentId }) {
  const { posts } = initialState;
  if (!postId && !commentId) return {};
  const post = posts.posts[postId];
  const comment = posts.posts[commentId];
  const userImage = comment ? comment.embeddedUser.image : null;
  const userComment = comment ? `@${comment.embeddedUser.name}: ${comment.body}` : null;
  if (!post) return {};
  const linkData = post.metaPost ? posts.links[post.metaPost] : post;
  const { title } = linkData;
  const image = userImage || linkData.image || 'https://relevant.community/img/r-big.png';
  const description = userComment || post.body || linkData.description;
  const type = image && !userImage ? 'summary_large_image' : 'summary';
  return { title, image, description, type };
}

function getCommunityMeta({ initialState }) {
  const { auth, community: communityState } = initialState;
  const community = communityState.communities[auth.community];
  if (!community) return {};
  const { description } = community;
  const image = community.image || 'https://relevant.community/img/r-big.png';
  const title = community.name;
  const type = 'summary';
  return { image, title, description, type };
}

export async function handleRouteData({ req, store }) {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(async ({ route, match }) => {
    const { params } = match;
    const { fetchData } = route.component;
    // TODO can you get away without sending params and send whole store?
    return fetchData instanceof Function
      ? fetchData(store.dispatch, params)
      : Promise.resolve(null);
  });
  return Promise.all(promises);
}

export function renderApp({ url, store }) {
  const context = {};
  const nonce = new Date().getTime();

  const App = () => (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    </ApolloProvider>
  );

  AppRegistry.registerComponent('App', () => App);

  const app = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <ChunkExtractorManager extractor={extractor}>{App()}</ChunkExtractorManager>
    </StyleSheetManager>
  );

  const { getStyleElement } = AppRegistry.getApplication('App');
  const rnWebStyles = renderToStaticMarkup(getStyleElement({ nonce }));

  return { app, rnWebStyles };
}
