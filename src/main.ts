import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FileText, LucideAngularModule, MoveRight, PencilLine, Search, ShieldHalf } from 'lucide-angular';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [importProvidersFrom(LucideAngularModule.pick({ Search, MoveRight, FileText, PencilLine, ShieldHalf }))]
})
  .catch((err) => console.error(err));
