import { NextFunction, Response, Request } from 'express';

export interface Route {
    path: string;
    func: (req: Request, res: Response, next: NextFunction) => void;
    method: 'get' | 'post' | 'delete' | 'patch' | 'put';
}
