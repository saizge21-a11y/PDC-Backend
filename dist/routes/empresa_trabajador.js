import { Router } from 'express';
import { getEmpresasPorTrabajador, asignarEmpresas } from '../controllers/empresa_trabajador.js';
const router = Router();
router.get('/:id', getEmpresasPorTrabajador);
router.post('/:id', asignarEmpresas);
export default router;
//# sourceMappingURL=empresa_trabajador.js.map