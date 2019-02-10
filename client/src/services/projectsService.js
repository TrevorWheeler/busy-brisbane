import Api from "@/services/Api";

export default {
  index() {
    return Api().get("projects");
  },
  show (projectId) {
    return Api().get(`projects/${projectId}`);
  },

  post(project) {
    return Api().post("projects", project);
  },

 put(project) {
    return Api().put(`projects/${project.id}`, project);
  }
};
