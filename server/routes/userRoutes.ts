import express from 'express';
import bcrypt from 'bcryptjs';
import { 
   add, 
   deleteUser, 
   findBy, 
   findById, 
   getUsers,
   updateUser 
} from '../models/userModel';
import { rounds } from '../envVariables';
import { generateToken, onError } from '../middlewares';
import { 
   checkifEmailExist, 
   validateId, 
   validateLoginValues, 
   validateUserBody 
} from '../middlewares/validateUser';
import { checkForRole, validateToken } from '../restricted/restrictedMiddleware';

const route = express();

// @GET /auth/users
route.get("/users", async (req, res) => {
   try {
      const users = await getUsers();
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });   
   }
})

// @POST /auth/register
route.post("/register", validateUserBody, checkifEmailExist, async (req, res) => {
   const user = req.body; 

   const hashPassword = bcrypt.hashSync(user.password, rounds);
   user.password = hashPassword;

   try {
      await add(user);
      res.status(201).json({ message: "Created user successfully!." })
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @POST /auth/login
route.post('/login', validateLoginValues, async (req, res) => {
   const { email, password } = req.body;

   try {
      const [user] = await findBy({ email });
      if(user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user);
         res
            .status(200)
            .json({ token,
                username: user.username,
                is_admin: user.is_admin, 
                user_id: user.id 
            });
      } else {
         return onError(res, 400, "Invalid email or password");
      }
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @GET /auth/get_user/:user_id
route.get('/get_user/:user_id', async (req, res) => {
   const { user_id } = req.params;

   try {
      const [user] = await findById(user_id);
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
})

// @DELETE /auth/delete/:user_id
route.delete("/delete/:user_id", validateId, async (req, res) => {
   const { user_id } = req.params;

   try {
      await deleteUser(user_id);
      res.status(200).json({ message: "Account was delete successfully!." });
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
});

// @PATCH /auth/edit/:user_id
route.patch("/edit/:user_id", validateId, async (req, res) => {
   const { user_id } = req.params;
   const changes = req.body;

   try {
      if(changes.email) {
         // At the moment users can't change their email
         return onError(res, 400, "Not allow to change email.");
      } else if(changes.username) {
         await updateUser(user_id, changes);
         res.status(200).json({ message: "Username updated successfully!" });
      } else {
         const hashPassword = bcrypt.hashSync(changes.password, rounds);
         changes.password = hashPassword;
         await updateUser(user_id, changes);
         res.status(200).json({ message: "Password updated succesfully!" });
      }
   } catch (error) {
      res.status(500).json({errorMessage: error.message});
   }
});

// add validteToken, checkForRole middewares later
// not going to add it at the moment for faster teseting purposes
route.patch("/change_role/:user_id", validateId, async (req, res) => {
   const { user_id } = req.params;
   try {
      await updateUser(user_id, req.body);
      res.status(200).json({ message: "Role has been updated!." });
   } catch (error) {
      res.status(500).json({ errorMessage: error.message });
   }
})

export default route;
