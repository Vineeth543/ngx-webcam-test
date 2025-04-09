import { WebcamImage } from "./modules/webcam/domain/webcam-image";
import { Observable, Subject } from "rxjs";
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "appRoot",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private trigger: Subject<void> = new Subject<void>();
  private switchCamera: Subject<boolean | string> = new Subject<
    boolean | string
  >();

  public showWebcam: boolean = true;

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get switchCameraObservable(): Observable<boolean | string> {
    this.switchCamera.next(true);
    return this.switchCamera.asObservable();
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.showWebcam = false;
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log(webcamImage);
  }
}
