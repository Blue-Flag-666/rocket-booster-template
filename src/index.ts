import useProxy from 'rocket-booster';

addEventListener('fetch', (event) => {
  const proxy = useProxy();
  proxy.use('/', {
    upstream: {
      domain: 'www.xvideos.com',
      protocol: 'https',
    },
    headers: {
    request: {
      'host': 'www.xvideos.com',
    },
  });

  const response = proxy.apply(event.request);
  event.respondWith(response);
});
