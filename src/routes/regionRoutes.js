import fastify from 'fastify';
import RegionController from '../controllers/regionController.js';

const router = fastify();

router.post('/regions', RegionController.createRegion);
router.get('/regions/:id', RegionController.getRegion);
router.get('/regions', RegionController.getAllRegions);
router.put('/regions/:id', RegionController.updateRegion);
router.delete('/regions/:id', RegionController.removeRegion);
router.get('/regions/:id/children', RegionController.getChildren);
router.get('/regions/:id/parent', RegionController.getParent);
router.patch('/regions/:id/move', RegionController.moveRegion);


export default router;