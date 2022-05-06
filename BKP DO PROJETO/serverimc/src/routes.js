import { Router } from "express";
//import { route } from "express/lib/router";
import auth from "./middlewares/auth";
import SessionsController from "./controllers/SessionsController";
import HelloController from "./controllers/HelloController"
import UsersController from "./controllers/UsersController";


const routes = new Router();

routes.post("/sessions", SessionsController.create);

routes.use(auth);


//close

routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", UsersController.create);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

export default routes;