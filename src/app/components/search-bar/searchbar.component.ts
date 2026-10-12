import { Component } from "@angular/core";
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-searchbar',
    standalone: true,
    templateUrl: './searchbar.component.html',
    styleUrl: './searchbar.component.scss',
    imports: [LucideAngularModule],
})
export class SearchBarComponent {}