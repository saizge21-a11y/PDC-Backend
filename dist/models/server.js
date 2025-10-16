import express from 'express';
import cors from 'cors';
import routePais from '../routes/pais.js';
import routeDepartamento from '../routes/departamento.js';
import routeMunicipio from '../routes/municipio.js';
import routeEmpresa from '../routes/empresa.js';
import routeTrabajador from '../routes/trabajador.js';
import db from '../db/connection.js';
import routeEmpresa_trabajador from '../routes/empresa_trabajador.js';
import "./relations.js";
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API - Proyecto'
            });
        });
        this.app.use('/api/pais', routePais);
        this.app.use('/api/departamento', routeDepartamento);
        this.app.use('/api/municipio', routeMunicipio);
        this.app.use('/api/empresa', routeEmpresa);
        this.app.use('/api/trabajador', routeTrabajador);
        this.app.use('/api/empresa-trabajador', routeEmpresa_trabajador);
    }
    midlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default Server;
//# sourceMappingURL=server.js.map