import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  /**
   *
   */
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get('role', context.getHandler());
    if (!role) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user;
    console.log(user);
    return role == user.role;
  }
}
