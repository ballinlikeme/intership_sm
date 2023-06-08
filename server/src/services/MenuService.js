import { MENU_ITEMS } from "../data/menu.js";

class MenuService {
  async getMenu() {
    return MENU_ITEMS;
  }
}

export const menuService = new MenuService();
