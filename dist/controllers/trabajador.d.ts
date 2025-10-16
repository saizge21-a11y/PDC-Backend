import type { Request, Response } from 'express';
export declare const getTrabajadores: (req: Request, res: Response) => Promise<void>;
export declare const getTrabajador: (req: Request, res: Response) => Promise<void>;
export declare const deleteTrabajador: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const postTrabajador: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const putTrabajador: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=trabajador.d.ts.map