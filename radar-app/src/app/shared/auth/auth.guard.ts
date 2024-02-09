import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { inject, Injectable } from "@angular/core";
import { AuthService } from "@shared/services/auth.service";
import { User } from "@shared/models/user.model";
import { UserRole } from "@shared/enums/UserRole.enum";

@Injectable({
    providedIn: "root"
})
class AuthorizationService {
    hasTechRole(): boolean {
        const authService = inject(AuthService);

        const authenticatedUser: User|null = authService.authenticatedUser.getValue();
        const isUserAuthenticated: boolean = authenticatedUser != null;

        return isUserAuthenticated && (
            authenticatedUser?.role == UserRole.TECH_LEAD ||
            authenticatedUser?.role == UserRole.CTO ||
            authenticatedUser?.role == UserRole.ADMIN);
    }
}

export const techGuard: CanActivateFn =  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AuthorizationService).hasTechRole();
};
