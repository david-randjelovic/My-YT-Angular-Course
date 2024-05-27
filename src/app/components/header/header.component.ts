import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MENU_ITEMS } from '../../constants/menu-items.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public profilePictureUrl: string = '../../../assets/profile-default.svg'; 
  public items: MenuItem[] = MENU_ITEMS;

  constructor() {}

}
