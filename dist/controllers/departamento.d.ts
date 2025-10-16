import type { Request, Response } from 'express';
export declare const getDepartamentos: (req: Request, res: Response) => Promise<void>;
export declare const getDepartamento: (req: Request, res: Response) => Promise<void>;
export declare const deleteDepartamento: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const postDepartamento: (req: Request, res: Response) => Promise<void>;
export declare const putDepartamento: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=departamento.d.ts.map