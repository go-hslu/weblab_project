import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { techRoleGuard } from "./tech-role.guard";

describe("techRoleGuard", () => {
    const executeGuard: CanActivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() => techRoleGuard(...guardParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it("should be created", () => {
        expect(executeGuard).toBeTruthy();
    });
});
