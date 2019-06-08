import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: `
    <div style="margin:10vh;">
      <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link'[routerLink]=>"['/welcome']"Home</a></li>
          <li><a class='nav-link'>Product List</a></li>
        </ul>
      </nav>  
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'the l o s e r  e x p e r i e n c e';
}
