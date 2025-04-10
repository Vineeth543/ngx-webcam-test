import { WebcamImage } from "./modules/webcam/domain/webcam-image";
import { Observable, Subject } from "rxjs";
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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

  public showWebcam: boolean = false;

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get switchCameraObservable(): Observable<boolean | string> {
    return this.switchCamera.asObservable();
  }

  constructor(private cdr: ChangeDetectorRef) {}

  public triggerSnapshot(): void {
    this.trigger.next();
    this.showWebcam = false;
    this.cdr.detectChanges();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
    this.cdr.detectChanges();
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log(webcamImage);
  }
}
