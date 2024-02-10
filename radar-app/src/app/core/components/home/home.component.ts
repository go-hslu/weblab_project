import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
      MatCardModule
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css"
})
export class HomeComponent {

}
