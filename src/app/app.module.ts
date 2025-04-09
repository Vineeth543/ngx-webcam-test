import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { WebcamModule } from "./modules/webcam/webcam.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, WebcamModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
