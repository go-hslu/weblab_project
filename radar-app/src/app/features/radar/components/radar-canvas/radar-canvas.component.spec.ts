import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RadarCanvasComponent } from "./radar-canvas.component";

describe("RadarCanvasComponent", () => {
    let component: RadarCanvasComponent;
    let fixture: ComponentFixture<RadarCanvasComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RadarCanvasComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(RadarCanvasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
