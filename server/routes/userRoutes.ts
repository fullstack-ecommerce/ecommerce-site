import express from 'express';
import bcrypt from 'bcryptjs';
import { add, deleteUser, findBy, updateUser } from '../models/userModel';
import { rounds } from '../envVariables';
import { generateToken } from '../middlewares';
import { validateId, validateUserBody } from '../middlewares/validateUser';

const route = express();

route.post("/register", validateUserBody, async (req, res) => {
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

route.post('/login', async (req, res) => {
   const {email, password} = req.body;

   try {
      const [user] = await findBy({email});
      if(user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user);
         res.status(200).json({token, username: user.username});
      } else {
         res.status(400).json({errorMessage: "Invalid email or password"});
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
         res.status(400).json({errorMessage: "Not allow to change email."});
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
