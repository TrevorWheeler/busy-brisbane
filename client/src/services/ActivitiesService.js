import Api from "@/services/Api";

export default {
  index(search) {
    return Api().get("activities", {
      params: {
        search: search
      }
    });
  },
  show(activityId) {
    return Api().get(`activities/${activityId}`);
  },

  post(activity) {
    return Api().post("activities", activity);
  },

  put(activity) {
    return Api().put(`activities/${activity.id}`, activity);
  }
};
