import {Router} from 'express';
import { deleteDepartamento, getDepartamento, getDepartamentos, postDepartamento, putDepartamento } from '../controllers/departamento.js';
const router = Router();


router.get('/', getDepartamentos);
router.get('/:id', getDepartamento);
router.delete('/:id', deleteDepartamento);
router.post('/', postDepartamento);
router.put('/:id', putDepartamento);

export default router;