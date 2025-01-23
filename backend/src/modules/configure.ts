import {plugins, middleware} from '@/config/index';
import Application from './application';
const Plugin = (application: Application) => {
  plugins.forEach((plugin) => {
    application.use(plugin);
  })
}
const Global = (application: Application) => {
  middleware.forEach((mw) => {
    application.use(mw);
  })
}

const configure = {
  Plugin: Plugin,
  Global: Global
};

export default configure;