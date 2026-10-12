import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LucideAngularModule, MoveRight, Search} from 'lucide-angular';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [importProvidersFrom(LucideAngularModule.pick({ Search, MoveRight }))]
})
  .catch((err) => console.error(err));
