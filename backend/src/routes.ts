import { Router } from 'express';
import InfosController from './controllers/InfosController';


const routes = Router();

routes.get('/infos' , InfosController.Index);
routes.get('/infos/:id' , InfosController.show);
routes.post('/infos', InfosController.create);

export default routes;