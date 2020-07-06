export const standardRoutes = [
  // { key: 'feed', title: 'Subscriptions' },
  { key: 'top', title: 'Relevant' },
  { key: 'new', title: 'New' },
  { key: 'spam', title: 'Spam' }
];

export const tagRoutes = [
  { key: 'top', title: 'Relevant' },
  { key: 'new', title: 'New' },
  { key: 'spam', title: 'Spam' }
  // { key: 'people', title: 'People' },
];

export function getDiscoverState(nextProps, prevState) {
  const { tag, sort } = nextProps.match.params;
  const routes = tag ? tagRoutes : standardRoutes;
  if (sort && sort !== prevState.sort) {
    const tabIndex = prevState.routes.findIndex(tab => tab.key === sort);
    return { tabIndex, routes, sort };
  }
  if (!sort) return { tabIndex: -1, routes, sort };
  return null;
}
