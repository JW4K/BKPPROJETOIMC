import jwt from "jsonwebtoken";
import User from "../models/User";
import { checkPassword } from "../services/auth";
import authConfig from "../config/auth";

class SessionsController {
   async create(req, res){
     const {login, password} = req.body
     const user = await User.findOne ({ login })

     if (!user){
         return res.status(401).json({ error: "User ou senha invalida"});
     }

     const passwordChecked = await checkPassword(user, password);
     if (!passwordChecked){
         return res.status(401).json({ message: "User / Password Invalid." })};

     const { id } = user;

     return res.json({
         user: {
             id,
             login
         },
        token: jwt.sign({ id }, authConfig.secret, {
           expiresIn: authConfig.expiresIn, 
        })
        });
   }

}
export default new SessionsController();