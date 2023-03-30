const routes = [
  {
      method: '*',
      path: '/',
      handler: (request, h) => {
          return 'Halaman tidak dapat diakses dengan method tersebut - Update 3';
      },
  },
  {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return 'Homepage - Update 2';
      },
  },
];

module.exports = routes;
