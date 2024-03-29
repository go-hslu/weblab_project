import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TechDetailsComponent } from "./tech-details.component";

describe("TechDetailsComponent", () => {
    let component: TechDetailsComponent;
    let fixture: ComponentFixture<TechDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TechDetailsComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(TechDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
