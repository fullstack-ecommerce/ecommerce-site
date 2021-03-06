import db from '../data/config-db';
import { FindByProp, UserProps } from '../interfaces/userInterfaces';


function findById(id: string) {
   return db('users as u')
      .where({id})
      .select("u.id", "u.username", 'u.email', "u.is_admin", 'u.created_at');
}

function getUsers() {
   return db("users as u")
      .select("u.id", "u.username", "u.email", "u.is_admin", "u.created_at");
}

function findBy(filter: FindByProp) {
   return db("users").where(filter);
}

async function add(user: UserProps) {
   const [id] = await db("users").insert(user, 'id');
   return findById(id);
}

function updateUser(id: string, changes: UserProps) {
   return db("users").where({id}).update(changes);
}

function deleteUser(id: string) {
   return db("users").where({id}).del();
}

export {
   findById,
   getUsers,
   findBy,
   add,
   updateUser,
   deleteUser
}
