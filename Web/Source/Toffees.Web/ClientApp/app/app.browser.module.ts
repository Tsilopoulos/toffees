import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppModuleShared } from "./app.shared.module";
import { AppComponent } from "./components/app/app.component";
import { HttpAuth } from "./services/auth.service";
import { Http, ConnectionBackend, XHRBackend, RequestOptions } from "@angular/http";

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        {
            provide: "BIOMETRIC_URL",
            useFactory: getBaseUrl
        },
        {
            provide: Http,
            useFactory: getHttpAuth,
            deps: [XHRBackend, RequestOptions]
        }
    ]
})
export class AppModule {
}

export function getHttpAuth(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    return new HttpAuth(backend, defaultOptions);
}

export function getBaseUrl() {
    return "http://localhost:5001/";
}
