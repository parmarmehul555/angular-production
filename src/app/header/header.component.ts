import { Component, inject } from '@angular/core';
import { SearchService } from '../search.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private _service = inject(SearchService);
  onSearch(event: any) {
    this._service.updateSearchTerm(event.target.value);
  }
}
