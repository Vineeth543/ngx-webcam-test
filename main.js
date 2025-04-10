"use strict";
(self["webpackChunkngx_webcam"] = self["webpackChunkngx_webcam"] || []).push([["main"],{

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _modules_webcam_webcam_webcam_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webcam/webcam/webcam.component */ 7540);




function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "webcam", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCapture", function AppComponent_div_0_Template_webcam_imageCapture_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.handleImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_0_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.triggerSnapshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trigger", ctx_r0.triggerObservable)("imageQuality", 1)("switchCamera", ctx_r0.switchCameraObservable)("allowCameraSwitch", true);
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.toggleWebcam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Open Webcam");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.switchCamera = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.showWebcam = true;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get switchCameraObservable() {
        return this.switchCamera.asObservable();
    }
    triggerSnapshot() {
        this.trigger.next();
        this.showWebcam = false;
        this.cdr.detectChanges();
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
        this.cdr.detectChanges();
    }
    handleImage(webcamImage) {
        console.log(webcamImage);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["appRoot"]], decls: 3, vars: 2, consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["showButton", ""], [1, "container"], [1, "webcam", 3, "trigger", "imageQuality", "switchCamera", "allowCameraSwitch", "imageCapture"], [1, "controls"], ["width", "72", "height", "72", "src", "assets/shutter.svg", "alt", "shutter", 3, "click"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 4, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showWebcam)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _modules_webcam_webcam_webcam_component__WEBPACK_IMPORTED_MODULE_0__.WebcamComponent], styles: [".container {\n  position: fixed;\n  inset: 0;\n  z-index: 99;\n}\n.container .webcam-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.container .webcam-wrapper video {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.container .controls {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFDTjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgei1pbmRleDogOTk7XHJcblxyXG4gIC53ZWJjYW0td3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICB2aWRlbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRyb2xzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _modules_webcam_webcam_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/webcam/webcam.module */ 5188);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _modules_webcam_webcam_module__WEBPACK_IMPORTED_MODULE_1__.WebcamModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _modules_webcam_webcam_module__WEBPACK_IMPORTED_MODULE_1__.WebcamModule] }); })();


/***/ }),

/***/ 9394:
/*!*******************************************************!*\
  !*** ./src/app/modules/webcam/domain/webcam-image.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcamImage": () => (/* binding */ WebcamImage)
/* harmony export */ });
/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */
class WebcamImage {
    constructor(imageAsDataUrl, mimeType, imageData) {
        this._mimeType = null;
        this._imageAsBase64 = null;
        this._imageAsDataUrl = null;
        this._imageData = null;
        this._mimeType = mimeType;
        this._imageAsDataUrl = imageAsDataUrl;
        this._imageData = imageData;
    }
    /**
     * Extracts the Base64 data out of the given dataUrl.
     * @param dataUrl the given dataUrl
     * @param mimeType the mimeType of the data
     */
    static getDataFromDataUrl(dataUrl, mimeType) {
        return dataUrl.replace(`data:${mimeType};base64,`, '');
    }
    /**
     * Get the base64 encoded image data
     * @returns base64 data of the image
     */
    get imageAsBase64() {
        return this._imageAsBase64 ? this._imageAsBase64
            : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
    }
    /**
     * Get the encoded image as dataUrl
     * @returns the dataUrl of the image
     */
    get imageAsDataUrl() {
        return this._imageAsDataUrl;
    }
    /**
     * Get the ImageData object associated with the canvas' 2d context.
     * @returns the ImageData of the canvas's 2d context.
     */
    get imageData() {
        return this._imageData;
    }
}


/***/ }),

/***/ 6045:
/*!****************************************************!*\
  !*** ./src/app/modules/webcam/util/webcam.util.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcamUtil": () => (/* binding */ WebcamUtil)
/* harmony export */ });
class WebcamUtil {
    /**
     * Lists available videoInput devices
     * @returns a list of media device info.
     */
    static getAvailableVideoInputs() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return Promise.reject('enumerateDevices() not supported.');
        }
        return new Promise((resolve, reject) => {
            navigator.mediaDevices.enumerateDevices()
                .then((devices) => {
                resolve(devices.filter((device) => device.kind === 'videoinput'));
            })
                .catch(err => {
                reject(err.message || err);
            });
        });
    }
}


/***/ }),

/***/ 5188:
/*!*************************************************!*\
  !*** ./src/app/modules/webcam/webcam.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcamModule": () => (/* binding */ WebcamModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webcam/webcam.component */ 7540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



const COMPONENTS = [
    _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_0__.WebcamComponent
];
class WebcamModule {
}
WebcamModule.ɵfac = function WebcamModule_Factory(t) { return new (t || WebcamModule)(); };
WebcamModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WebcamModule });
WebcamModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WebcamModule, { declarations: [_webcam_webcam_component__WEBPACK_IMPORTED_MODULE_0__.WebcamComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_webcam_webcam_component__WEBPACK_IMPORTED_MODULE_0__.WebcamComponent] }); })();


/***/ }),

/***/ 7540:
/*!***********************************************************!*\
  !*** ./src/app/modules/webcam/webcam/webcam.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcamComponent": () => (/* binding */ WebcamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _domain_webcam_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/webcam-image */ 9394);
/* harmony import */ var _util_webcam_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/webcam.util */ 6045);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);





const _c0 = ["video"];
const _c1 = ["canvas"];
function WebcamComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebcamComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.rotateVideoInput(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class WebcamComponent {
    constructor() {
        /** Defines the max width of the webcam area in px */
        this.width = 640;
        /** Defines the max height of the webcam area in px */
        this.height = 480;
        /** Defines base constraints to apply when requesting video track from UserMedia */
        this.videoOptions = WebcamComponent.DEFAULT_VIDEO_OPTIONS;
        /** Flag to enable/disable camera switch. If enabled, a switch icon will be displayed if multiple cameras were found */
        this.allowCameraSwitch = true;
        /** Flag to control whether an ImageData object is stored into the WebcamImage object. */
        this.captureImageData = false;
        /** The image type to use when capturing snapshots */
        this.imageType = WebcamComponent.DEFAULT_IMAGE_TYPE;
        /** The image quality to use when capturing snapshots (number between 0 and 1) */
        this.imageQuality = WebcamComponent.DEFAULT_IMAGE_QUALITY;
        /** EventEmitter which fires when an image has been captured */
        this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */
        this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /** Emits when the webcam video was clicked */
        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /** Emits the active deviceId after the active video device was switched */
        this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /** available video devices */
        this.availableVideoInputs = [];
        /** Indicates whether the video device is ready to be switched */
        this.videoInitialized = false;
        /** Index of active video in availableVideoInputs */
        this.activeVideoInputIndex = -1;
        /** MediaStream object in use for streaming UserMedia data */
        this.mediaStream = null;
        /** width and height of the active video stream */
        this.activeVideoSettings = null;
    }
    /**
     * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
     */
    set trigger(trigger) {
        if (this.triggerSubscription) {
            this.triggerSubscription.unsubscribe();
        }
        // Subscribe to events from this Observable to take snapshots
        this.triggerSubscription = trigger.subscribe(() => {
            this.takeSnapshot();
        });
    }
    /**
     * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
     * @param switchCamera Indicates which webcam to switch to
     *   true: cycle forwards through available webcams
     *   false: cycle backwards through available webcams
     *   string: activate the webcam with the given id
     */
    set switchCamera(switchCamera) {
        if (this.switchCameraSubscription) {
            this.switchCameraSubscription.unsubscribe();
        }
        // Subscribe to events from this Observable to switch video device
        this.switchCameraSubscription = switchCamera.subscribe((value) => {
            if (typeof value === 'string') {
                // deviceId was specified
                this.switchToVideoInput(value);
            }
            else {
                // direction was specified
                this.rotateVideoInput(value !== false);
            }
        });
    }
    /**
     * Get MediaTrackConstraints to request streaming the given device
     * @param deviceId
     * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
     * @returns
     */
    static getMediaConstraintsForDevice(deviceId, baseMediaTrackConstraints) {
        const result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;
        if (deviceId) {
            result.deviceId = { exact: deviceId };
        }
        return result;
    }
    /**
     * Tries to harvest the deviceId from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the id.
     * @param mediaStreamTrack
     * @returns deviceId if found in the mediaStreamTrack
     */
    static getDeviceIdFromMediaStreamTrack(mediaStreamTrack) {
        if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
            return mediaStreamTrack.getSettings().deviceId;
        }
        else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
            const deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
            return WebcamComponent.getValueFromConstrainDOMString(deviceIdObj);
        }
    }
    /**
     * Tries to harvest the facingMode from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the value.
     * @param mediaStreamTrack
     * @returns facingMode if found in the mediaStreamTrack
     */
    static getFacingModeFromMediaStreamTrack(mediaStreamTrack) {
        if (mediaStreamTrack) {
            if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
                return mediaStreamTrack.getSettings().facingMode;
            }
            else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
                const facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
                return WebcamComponent.getValueFromConstrainDOMString(facingModeConstraint);
            }
        }
    }
    /**
     * Determines whether the given mediaStreamTrack claims itself as user facing
     * @param mediaStreamTrack
     */
    static isUserFacing(mediaStreamTrack) {
        const facingMode = WebcamComponent.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
        return facingMode ? 'user' === facingMode.toLowerCase() : false;
    }
    /**
     * Extracts the value from the given ConstrainDOMString
     * @param constrainDOMString
     */
    static getValueFromConstrainDOMString(constrainDOMString) {
        if (constrainDOMString) {
            if (constrainDOMString instanceof String) {
                return String(constrainDOMString);
            }
            else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
                return String(constrainDOMString[0]);
            }
            else if (typeof constrainDOMString === 'object') {
                if (constrainDOMString['exact']) {
                    return String(constrainDOMString['exact']);
                }
                else if (constrainDOMString['ideal']) {
                    return String(constrainDOMString['ideal']);
                }
            }
        }
        return null;
    }
    ngAfterViewInit() {
        this.detectAvailableDevices()
            .then(() => {
            // start video
            this.switchToVideoInput(null);
        })
            .catch((err) => {
            this.initError.next({ message: err });
            // fallback: still try to load webcam, even if device enumeration failed
            this.switchToVideoInput(null);
        });
    }
    ngOnDestroy() {
        this.stopMediaTracks();
        this.unsubscribeFromSubscriptions();
    }
    /**
     * Takes a snapshot of the current webcam's view and emits the image as an event
     */
    takeSnapshot() {
        // set canvas size to actual video size
        const _video = this.nativeVideoElement;
        const dimensions = { width: this.width, height: this.height };
        if (_video.videoWidth) {
            dimensions.width = _video.videoWidth;
            dimensions.height = _video.videoHeight;
        }
        const _canvas = this.canvas.nativeElement;
        _canvas.width = dimensions.width;
        _canvas.height = dimensions.height;
        // paint snapshot image to canvas
        const context2d = _canvas.getContext('2d');
        context2d.drawImage(_video, 0, 0);
        // read canvas content as image
        const mimeType = this.imageType ? this.imageType : WebcamComponent.DEFAULT_IMAGE_TYPE;
        const quality = this.imageQuality ? this.imageQuality : WebcamComponent.DEFAULT_IMAGE_QUALITY;
        const dataUrl = _canvas.toDataURL(mimeType, quality);
        // get the ImageData object from the canvas' context.
        let imageData = null;
        if (this.captureImageData) {
            imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
        }
        this.imageCapture.next(new _domain_webcam_image__WEBPACK_IMPORTED_MODULE_0__.WebcamImage(dataUrl, mimeType, imageData));
    }
    /**
     * Switches to the next/previous video device
     * @param forward
     */
    rotateVideoInput(forward) {
        if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
            const increment = forward ? 1 : (this.availableVideoInputs.length - 1);
            const nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
            this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
        }
    }
    /**
     * Switches the camera-view to the specified video device
     */
    switchToVideoInput(deviceId) {
        this.videoInitialized = false;
        this.stopMediaTracks();
        this.initWebcam(deviceId, this.videoOptions);
    }
    /**
     * Event-handler for video resize event.
     * Triggers Angular change detection so that new video dimensions get applied
     */
    videoResize() {
        // here to trigger Angular change detection
    }
    get videoWidth() {
        const videoRatio = this.getVideoAspectRatio();
        return Math.min(this.width, this.height * videoRatio);
    }
    get videoHeight() {
        const videoRatio = this.getVideoAspectRatio();
        return Math.min(this.height, this.width / videoRatio);
    }
    get videoStyleClasses() {
        let classes = '';
        if (this.isMirrorImage()) {
            classes += 'mirrored ';
        }
        return classes.trim();
    }
    get nativeVideoElement() {
        return this.video.nativeElement;
    }
    /**
     * Returns the video aspect ratio of the active video stream
     */
    getVideoAspectRatio() {
        // calculate ratio from video element dimensions if present
        const videoElement = this.nativeVideoElement;
        if (videoElement.videoWidth && videoElement.videoWidth > 0 &&
            videoElement.videoHeight && videoElement.videoHeight > 0) {
            return videoElement.videoWidth / videoElement.videoHeight;
        }
        // nothing present - calculate ratio based on width/height params
        return this.width / this.height;
    }
    /**
     * Init webcam live view
     */
    initWebcam(deviceId, userVideoTrackConstraints) {
        const _video = this.nativeVideoElement;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // merge deviceId -> userVideoTrackConstraints
            const videoTrackConstraints = WebcamComponent.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
            navigator.mediaDevices.getUserMedia({ video: videoTrackConstraints })
                .then((stream) => {
                this.mediaStream = stream;
                _video.srcObject = stream;
                _video.play();
                this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
                const activeDeviceId = WebcamComponent.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);
                this.cameraSwitched.next(activeDeviceId);
                // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
                // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.
                this.detectAvailableDevices()
                    .then(() => {
                    this.activeVideoInputIndex = activeDeviceId ? this.availableVideoInputs
                        .findIndex((mediaDeviceInfo) => mediaDeviceInfo.deviceId === activeDeviceId) : -1;
                    this.videoInitialized = true;
                })
                    .catch(() => {
                    this.activeVideoInputIndex = -1;
                    this.videoInitialized = true;
                });
            })
                .catch((err) => {
                this.initError.next({ message: err.message, mediaStreamError: err });
            });
        }
        else {
            this.initError.next({ message: 'Cannot read UserMedia from MediaDevices.' });
        }
    }
    getActiveVideoTrack() {
        return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
    }
    isMirrorImage() {
        if (!this.getActiveVideoTrack()) {
            return false;
        }
        // check for explicit mirror override parameter
        {
            let mirror = 'auto';
            if (this.mirrorImage) {
                if (typeof this.mirrorImage === 'string') {
                    mirror = String(this.mirrorImage).toLowerCase();
                }
                else {
                    // WebcamMirrorProperties
                    if (this.mirrorImage.x) {
                        mirror = this.mirrorImage.x.toLowerCase();
                    }
                }
            }
            switch (mirror) {
                case 'always':
                    return true;
                case 'never':
                    return false;
            }
        }
        // default: enable mirroring if webcam is user facing
        return WebcamComponent.isUserFacing(this.getActiveVideoTrack());
    }
    /**
     * Stops all active media tracks.
     * This prevents the webcam from being indicated as active,
     * even if it is no longer used by this component.
     */
    stopMediaTracks() {
        if (this.mediaStream && this.mediaStream.getTracks) {
            // pause video to prevent mobile browser freezes
            this.nativeVideoElement.pause();
            // getTracks() returns all media tracks (video+audio)
            this.mediaStream.getTracks()
                .forEach((track) => track.stop());
        }
    }
    /**
     * Unsubscribe from all open subscriptions
     */
    unsubscribeFromSubscriptions() {
        if (this.triggerSubscription) {
            this.triggerSubscription.unsubscribe();
        }
        if (this.switchCameraSubscription) {
            this.switchCameraSubscription.unsubscribe();
        }
    }
    /**
     * Reads available input devices
     */
    detectAvailableDevices() {
        return new Promise((resolve, reject) => {
            _util_webcam_util__WEBPACK_IMPORTED_MODULE_1__.WebcamUtil.getAvailableVideoInputs()
                .then((devices) => {
                this.availableVideoInputs = devices;
                resolve(devices);
            })
                .catch(err => {
                this.availableVideoInputs = [];
                reject(err);
            });
        });
    }
}
WebcamComponent.DEFAULT_VIDEO_OPTIONS = { facingMode: 'environment' };
WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;
WebcamComponent.ɵfac = function WebcamComponent_Factory(t) { return new (t || WebcamComponent)(); };
WebcamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WebcamComponent, selectors: [["webcam"]], viewQuery: function WebcamComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, inputs: { width: "width", height: "height", videoOptions: "videoOptions", allowCameraSwitch: "allowCameraSwitch", mirrorImage: "mirrorImage", captureImageData: "captureImageData", imageType: "imageType", imageQuality: "imageQuality", trigger: "trigger", switchCamera: "switchCamera" }, outputs: { imageCapture: "imageCapture", initError: "initError", imageClick: "imageClick", cameraSwitched: "cameraSwitched" }, decls: 6, vars: 7, consts: [[1, "webcam-wrapper", 3, "click"], ["autoplay", "", "muted", "", "playsinline", "", 3, "width", "height", "resize"], ["video", ""], ["class", "camera-switch", 3, "click", 4, "ngIf"], [3, "width", "height"], ["canvas", ""], [1, "camera-switch", 3, "click"]], template: function WebcamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebcamComponent_Template_div_click_0_listener() { return ctx.imageClick.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function WebcamComponent_Template_video_resize_1_listener() { return ctx.videoResize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WebcamComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "canvas", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.videoStyleClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx.videoWidth)("height", ctx.videoHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowCameraSwitch && ctx.availableVideoInputs.length > 1 && ctx.videoInitialized);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".webcam-wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  line-height: 0;\n}\n.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%] {\n  transform: scale(-1, 1);\n}\n.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  display: none;\n}\n.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC\");\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  position: absolute;\n  right: 13px;\n  top: 10px;\n  height: 48px;\n  width: 48px;\n  background-size: 80%;\n  cursor: pointer;\n  background-position: center;\n  transition: background-color 0.2s ease;\n}\n.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmNhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLHVCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7QUFBSjtBQUdFO0VBQ0Usb0NBQUE7RUFDQSx1eERBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBQURKO0FBR0k7RUFDRSxxQ0FBQTtBQUROIiwiZmlsZSI6IndlYmNhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWJjYW0td3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogMDtcblxuICB2aWRlby5taXJyb3JlZCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIH1cblxuICBjYW52YXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2FtZXJhLXN3aXRjaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUU5VWxFUVZSNDJ1MmFUMmhkUlJUR2YrY1JRcWdoU3FpaGRCRkRrUklTSzJLRGZ6RFd4SGFSUUhFaGFJTktxYTFnS1FoZDZFWkxOK0lpZENIK1Ewb1dJa1ZSQzIxQlF4WFJpdFZhU2JLb0pTR3RZR29LMnRRL3RVMWpZNXYwYzVGNTRYbDdiL0tTTy9QeUV0KzNlNWY3NXA3enpad3paNzR6VUVJSkpmeWZZYUVHbGxRR1ZBR1psRU5kQnk2WjJjU2lZRlRTS2trZlMvcEgvbkJGMGtGSmRVVzlBaVJWQVNlQXVrRDhEZ05yek95U3J3RXpuZzE4S2FEekFMWHVHOFczQWlTdEF2cUJpc0JSTmc0MG10bFB4YllDT2d2Z1BPNGJuY1dXK0pwVmVEUVhSUWhJeWdEZkEwMEY1cjBYdU5mTXJnY2xRRkk5OEREUUNOUUE1WkZYcW9DV0JWcDhYd0hSSGVFcWNON2xveS9OYkhCZXN5cXBRMUtmRmovNm5DK1p2RmFBcEZyZ1BhQ1pwWVZ2Z0NmTmJEaVJBRWxOd0dGZytSSXQvWDhIMnMyczl3WUNKRFVBUjRIcUpYNysrUk40ME13R3BnbVFWQUgwQVEyQlB6NEFISFBsOG5CT0FxdHlGV1Fqc0E2b0w0QWRhODFzUER2N3V3SW1vZDhrdlNKcDlSeVM4TzJTWG5iL0RZVmQyWTlWU3JvUTRBTlhKTzJXVkptaXhxaDBrek1Xd0w0TGtpcVJ0RG5BNEQxem1mRThqOWc5QWV6Y25BSGFQY2ZYZGJmZG5QWjJZcHM2K0R3QXZPL1oxbmFUZEFwWTdYbmc0OEJEWm5ZMU1wTVZRQnV3M2lYYzVUbmIwd0J3QlBqVXpQNmVvZXp1QXJaNnN2TTBnZUpMa3ZaRVlubDNua250b3FST1NiY2tTVzJTdWozWk9JYW5nYzdHUEp1VXROR2RGSWZtTWVhdmt0b1NTS2lXOUxNUHczMFE4SnFrZWttakNiT1pSaHVjbExRamdZU054VUJBajZSeVo5QVRnVUpwVXRKVENTUjh2cEFFWEhBeVdLNUJYWUZJR0hPbGVwU0Fsb1VrNE5FWWd5b2tuUWhFd2hGSjBlOGg2VlNhUWVlckNiNXVaZ2RpOXV0eFlCTndPVUQ5M2hJVlhzd000SU5DaTZLOXdBc3pGQzJEd0xPQkRqSGJZcDU5a2FySVVuUmR6WXkvM0NscVZrbGFVaGZ3VElDajdLMjVPcUE3YTR3V2FnVnNtNE1lL3h6d2cyY0NxcU9ORnpPN0RQeFNDQUppNDM2R1VCZ0hIZ3VRRDJvVGxKNTVvU3pQOXliY2NzdHRTSncxc3pkakZPU25JLzhkVENHWkh3Y09ScDROeDd5M0IxaVo4L3NtNE1XOC9FdXhnNXdJc1MvSGFBcDN6ZVA0L0c3b2JSRFhJNGppVElBMjJIN1hkYzdYK1MzQTVsQzdRQlEzNTdhcTNWQWpDZVNrd1VmQUpyZnZ6K1I4QTlBRExBdFpCK1RpbnBqQzVKTUErLy9qd1BaWm5GOEc3SitMOHo0SVdCL3piRytnSXVqVldmTEJXL05TdFZNbXFhRzRQT0pSc0lqaXg3aDhJR25MUXVvQmJRa2k1c1ZBSkh5WW03WWtOYVJSdFh3UThHMWNIcFgwaUtScmdVallubzE3U2YwTHJRaEpVa2RDZUhXa1ZJVEdKSTBrMVFlUzNpa0dTVXpPeUpVSkpOem5ZbmV1T0NucFRsZGN4YTJrUDN4SllxT2VTRGpxWkc4U2hKTG5FOFRUdU1TNkl5dTFCVzdkalpxa2ZvOU4wUU91WUptWVFkZGZCN1JHK2dMVE56cUFZOUZyTCs1L253RWJ2RGRKSmUzenpPcmhOUDNBV1JxbWs1NXQzWmNCdWozYjJnYjBTYnJiby9OTnprN2ZGenU3cy9FNUVpQytycm1lUVUwS3gyc2t2UkZvT3gyWnpsbVNkZ2JzdzQ5SmV0dnRCcGs4bk02NGQvY0diTnRKMHM3Y0d5Smx3SGVFdit0M25xbkxTZ1BBVU9TR3lHM0FIVXhkenFvSmJFY3ZjTCtaVGVUZUVhcHpKS3hnYWVPY2MvN01mMDZEN2tGcmd1UzBWREFNdEdhZHYrRTQ3RFQ5dGNDaEplajhJU2ZwRCthYmdUZTQ1dU9rRmk4bW5RK0pCVlErZDRWWHVPcHRqYXZjeW90OHBxODZtZndrOExXWm5hT0VFa29vb1lRU1NvakR2OEFoUU5lR2ZlMGpBQUFBQUVsRlRrU3VRbUNDXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTNweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map