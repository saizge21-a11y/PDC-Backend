import { Router } from 'express';
import { deletePais, getPais, getPaises, postPais, putPais } from '../controllers/pais.js';
const router = Router();
router.get('/', getPaises);
router.get('/:id', getPais);
router.delete('/:id', deletePais);
router.post('/', postPais);
router.put('/:id', putPais);
export default router;
//# sourceMappingURL=pais.js.map