import Application from '@/modules/application';
import configure from '@/modules/configure';
import router from './router';
import {json} from 'express';
const application = new Application();

configure.Plugin(application);
configure.Global(application);

application.Router(router);

export default application;


