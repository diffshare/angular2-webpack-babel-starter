import {bootstrap} from '@angular/platform-browser-dynamic'
import {App} from './app/app';
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS} from "@angular/router";

//noinspection TypeScriptValidateTypes
bootstrap(App, [
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
]).catch(err => console.error(err));
