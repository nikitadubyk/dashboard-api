import { BaseController } from '../common/base.controller';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '../logger/logger.service';
import { HttpError } from '../errors/http-error';

export class UserController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);
        this.bindRoute([
            {
                path: '/login',
                method: 'post',
                func: this.login,
            },
            {
                path: '/register',
                method: 'post',
                func: this.register,
            },
        ]);
    }

    login(req: Request, res: Response, next: NextFunction) {
        next(new HttpError(401, 'ошибка авторизации', 'login'));
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register');
    }
}
