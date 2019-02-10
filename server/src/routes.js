const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const SongsController = require("./controllers/SongsController");

module.exports = app => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );

  app.post("/login", AuthenticationController.login);

  app.get("/projects", SongsController.index);

  app.get("/projects/:projectId", SongsController.show);
  
  app.post("/projects", SongsController.post);
  app.put("/projects/:songId", SongsController.put);
};
