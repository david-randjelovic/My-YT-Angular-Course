import { MenuItem } from "primeng/api";

export const MENU_ITEMS: MenuItem[] = [
    {
        label: 'Options',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog'
            },
            {
                label: 'Sign Out',
                icon: 'pi pi-sign-out'
            }
        ]
    }
];