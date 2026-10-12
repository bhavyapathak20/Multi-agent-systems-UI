import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { LeftSectionComponent } from './components/left-section/lefsection.component';
import { SearchBarComponent } from './components/search-bar/searchbar.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NavbarComponent, LeftSectionComponent, SearchBarComponent, PipelineComponent],
})
export class App {
  protected readonly title = signal('multi-agent-app');
}
