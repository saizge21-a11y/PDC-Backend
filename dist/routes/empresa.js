import { Router } from 'express';
import { deleteEmpresa, getEmpresa, getEmpresas, getEmpresasByUbicacion, postEmpresa, putEmpresa } from '../controllers/empresa.js';
const router = Router();
router.get('/', getEmpresas);
router.get('/:id', getEmpresa);
router.delete('/:id', deleteEmpresa);
router.post('/', postEmpresa);
router.put('/:id', putEmpresa);
router.get("/filtrar", getEmpresasByUbicacion);
export default router;
//# sourceMappingURL=empresa.js.map