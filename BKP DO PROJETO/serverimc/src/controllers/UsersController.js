import User from "../models/User";
import { createPasswordHash } from "../services/auth";

class UsersController {
    async index(req, res)  {
      try{
        const users = await User.find();
        return res.json(users);
      } catch(err){
         console.error(err);
         return res.status(500).json({ error: "internal server error."})
      }
  }

    async show(req, res)   {
      try{
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user){
          return res.status(404).json();
        }

        return res.json(user);

      }catch (err) {
        console.error(err);
        return res.status(500).json({ error: "internal server error."})
      }
  }

    async create(req, res) {
    try {
      const { login, password } = req.body;

      const user = await User.findOne({ login });

      if (user) {
          return res.status(422).json({ message:  "User ${login} already exists."});
      } 
      //cripto
      const encryptedPassword =  await createPasswordHash(password);
      const newUser = await User.create({login,
        password:encryptedPassword});

      return res.status(201).json(newUser);
    } catch(err){
      console.error(err);
      return res.status(500).json({ error: "internal server error."})

    }
  } 

    async update(req, res)   {
    try {
      const { id } = req.params;
      const { login, password} = req.body;

      const user = await User.findById(id);
      
      if (!user) {
        return res.staatus(404).json();
      }
       
      await user.updateOne({login, password});
      return res.status(200).json()
    } catch(err){
      console.error(err);
      return res.status(500).json({ error: "internal server error."})
    }
  }

    async destroy(req, res)   {
      try{
        const {id} = req.params;
        const user = await User.findById(id);

        if (!user){
          return res.status(404).json();
        }
        await user.deleteOne();

        return res.status(200).json();
      }  catch (err) {
        console.error(err);
        return res.status(500).json({ error: "internal server error."})
      }
        
}
}
  export default new UsersController();