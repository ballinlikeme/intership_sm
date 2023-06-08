import { menuService } from "../services/MenuService.js";

class MenuController {
  async getMenu(req, res) {
    try {
      const menuItems = await menuService.getMenu();
      return res.json(menuItems);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

export const menuController = new MenuController();
