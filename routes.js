const routes = [
  {
      method: '*',
      path: '/',
      handler: (request, h) => {
          return 'Halaman tidak dapat diakses dengan method tersebut - Update 4';
      },
  },
  {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return 'Homepage - Update 4';
      },
  },
];

module.exports = routes;
