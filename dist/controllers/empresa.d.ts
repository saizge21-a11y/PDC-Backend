import type { Request, Response } from 'express';
export declare const getEmpresas: (req: Request, res: Response) => Promise<void>;
export declare const getEmpresa: (req: Request, res: Response) => Promise<void>;
export declare const deleteEmpresa: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const postEmpresa: (req: Request, res: Response) => Promise<void>;
export declare const putEmpresa: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getEmpresasByUbicacion: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=empresa.d.ts.map