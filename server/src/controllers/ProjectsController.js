import { projectsService } from "../services/ProjectsService.js";

class ProjectsController {
  async getProjects(req, res) {
    try {
      const projects = await projectsService.getProjects();
      return res.json(projects);
    } catch (e) {}
  }

  async getProjectsByName(req, res) {
    try {
      const { name } = req.params;
      const projects = await projectsService.getProjectsByName(name);
      return res.json(projects);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

export const projectsController = new ProjectsController();
