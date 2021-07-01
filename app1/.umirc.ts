import { defineConfig } from 'umi';

const BASE_URL = '/miniapps/app1/';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 开启 qiankun 配置（子应用）
  qiankun: {
    slave: {},
  },
  // 部署在非根路径
  base: BASE_URL,
  publicPath: process.env.NODE_ENV === 'production' ? BASE_URL : '/',
  mfsu: {},
  webpack5: {},
  // 开启代码分割
  dynamicImport: {},
  routes: [
    { path: '/', component: '@/pages/index' },
    // { path: '/app1/project', microApp: 'app1' },
  ],
  fastRefresh: {},
});
