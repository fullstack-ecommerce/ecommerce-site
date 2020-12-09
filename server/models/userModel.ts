import db from '../data/config-db';
import { FindByProp, UserProps } from '../interfaces';


function findById(id: string) {
   return db('users').where({id});
}

function getUsers() {
   return db("users as u")
      .select("u.id", "u.username", "u.email");
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
