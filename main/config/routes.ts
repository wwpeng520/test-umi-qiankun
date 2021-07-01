export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '.', component: '@/pages/index' },
      // qiankun 子应用
      { name: 'app1', path: '/app1', microApp: 'app1' },
    ],
  },
];
