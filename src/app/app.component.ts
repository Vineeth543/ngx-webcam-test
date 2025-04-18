import { Subject } from "rxjs";
import { WebcamImage } from "./modules/webcam/domain/webcam-image";
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "appRoot",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public _trigger$: Subject<void> = new Subject<void>();
  public _showWebcam: boolean = false;

  public _toggleWebcam(): void {
    this._showWebcam = !this._showWebcam;
  }

  public _handleImage(webcamImage: WebcamImage): void {
    this._showWebcam = false;
    console.log(webcamImage);
  }
}
