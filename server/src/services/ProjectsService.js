import { CONTENT_ITEMS } from "../data/content.js";

class ProjectsService {
  async getProjectsByName(name) {
    return CONTENT_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(name.toLowerCase()) ||
        item.text.toLowerCase().includes(name.toLowerCase())
    );
  }
}

export const projectsService = new ProjectsService();
