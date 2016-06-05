import {bootstrap} from '@angular/platform-browser-dynamic'
import {App} from './app/app';
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS} from "@angular/router";
import {provide} from "@angular/core";

bootstrap(App, [
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
]).catch(err => console.error(err));
