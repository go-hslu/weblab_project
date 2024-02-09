import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { techGuard } from "./auth.guard";

describe("authGuard", () => {
    const executeGuard: CanActivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() => techGuard(...guardParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it("should be created", () => {
        expect(executeGuard).toBeTruthy();
    });
});