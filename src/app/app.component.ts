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

  public showWebcam: boolean = false;

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
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
