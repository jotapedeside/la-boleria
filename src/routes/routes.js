import { Router } from 'express';

//Cakes
import { validateCake } from '../middlewares/cakesMiddleware.js';
import { getCakes, postCake } from '../controllers/cakesController.js';

//Clients
import { validateClient } from '../middlewares/clientsMiddleware.js';
import { getClients, postClient, getClientOrders } from '../controllers/clientsController.js';

//Orders
import { validateOrder } from '../middlewares/ordersMiddleware.js';
import { getOrders, postOrder, getOrdersById } from '../controllers/ordersController.js';


const router = Router();


//Cakes
router.get('/cakes', getCakes);
router.post('/cakes', validateCake, postCake);

//Clients
router.get('/clients', getClients);
router.get('/clients/:id/orders', getClientOrders);
router.post('/clients', validateClient, postClient);

//Orders
router.get('/orders', getOrders);
router.get('/orders/:id', getOrdersById);
router.post('/orders', validateOrder, postOrder);


export default router;