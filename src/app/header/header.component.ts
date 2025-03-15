import { Component, inject } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private _service = inject(SearchService);
  onSearch(event: any) {
    this._service.updateSearchTerm(event.target.value);
  }
}
