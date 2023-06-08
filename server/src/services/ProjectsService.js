import { CONTENT_ITEMS } from "../data/content.js";

class ProjectsService {
  async getProjects() {
    return CONTENT_ITEMS;
  }
}

export const projectsService = new ProjectsService();
