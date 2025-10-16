import { Router } from 'express';
import { deleteTrabajador, getTrabajador, getTrabajadores, postTrabajador, putTrabajador } from '../controllers/trabajador.js';
const router = Router();
router.get('/', getTrabajadores);
router.get('/:id', getTrabajador);
router.delete('/:id', deleteTrabajador);
router.post('/', postTrabajador);
router.put('/:id', putTrabajador);
export default router;
//# sourceMappingURL=trabajador.js.map