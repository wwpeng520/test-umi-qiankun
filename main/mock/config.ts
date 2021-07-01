export default {
  '/api/config': {
    apps: [
      {
        name: 'app1',
        entry:
          process.env.NODE_ENV === 'production'
            ? '/miniapps/app1/'
            : '//localhost:9000',
        activeRule: '/app1',
      },
    ],
  },
};
