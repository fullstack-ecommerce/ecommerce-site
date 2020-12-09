import express from 'express';
import bcrypt from 'bcryptjs';
import { add, deleteUser, findBy, getUsers, updateUser } from '../models/userModel';
import { rounds } from '../envVariables';
import { generateToken, onError } from '../middlewares';
import { 
   checkifEmailExist, 
   validateId, 
   validateLoginValues, 
   validateUserBody 
} from '../middlewares/validateUser';

const route = express();

route.get("/users", async (req, res) => {
   try {
      const users = await getUsers();
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({errorMessage: error.message});   
   }
})

route.post("/register", validateUserBody, checkifEmailExist, async (req, res) => {
   const user = req.body; 

   const hashPassword = bcrypt.hashSync(user.password, rounds);
   user.password = hashPassword;

   try {
      await add(user);
      res.status(201).json({message: "Created user successfully!."})
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.post('/login', validateLoginValues, async (req, res) => {
   const {email, password} = req.body;

   try {
      const [user] = await findBy({email});
      if(user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user);
         res.status(200).json({token, username: user.username});
      } else {
         return onError(res, 400, "Invalid email or password");
      }
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.delete("/delete/:user_id", validateId, async (req, res) => {
   const {user_id} = req.params;

   try {
      await deleteUser(user_id);
      res.status(200).json({message: "Account was delete successfully!."});
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

route.patch("/edit/:user_id", validateId, async (req, res) => {
   const {user_id} = req.params;
   const changes = req.body;

   try {
      if(changes.email) {
         return onError(res, 400, "Not allow to change email.");
      } else if(changes.username) {
         await updateUser(user_id, changes);
         res.status(200).json({message: "Username updated successfully!"});
      } else {
         const hashPassword = bcrypt.hashSync(changes.password, rounds);
         changes.password = hashPassword;
         await updateUser(user_id, changes);
         res.status(200).json({message: "Password updated succesfully!"});
      }
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

export default route;
