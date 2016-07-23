import {bootstrap} from '@angular/platform-browser-dynamic'
import {App} from './app/app';
import {HTTP_PROVIDERS} from "@angular/http";

//noinspection TypeScriptValidateTypes
bootstrap(App, [
    ...HTTP_PROVIDERS
]).catch(err => console.error(err));
