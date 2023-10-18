import { Request, Response, Router } from 'express';
import * as ProductController from './products.controller';

const router = Router();

router
    .route('/products')
    .get(ProductController.readAllProducts)

router
    .route('/products/:search')
    .get(ProductController.searchProductsByName)    

router
    .route('/products')
    .post(ProductController.createProduct)

router
    .route('/products')
    .put(ProductController.updateProduct)

router
    .route('/products/:productID')
    .delete(ProductController.deleteProduct)

export default router;