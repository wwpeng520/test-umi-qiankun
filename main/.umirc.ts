import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {},
  },
  routes,
  fastRefresh: {},
  mfsu: {},
  webpack5: {},
  // 开启代码分割
  dynamicImport: {},
});
