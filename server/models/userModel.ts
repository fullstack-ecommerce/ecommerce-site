import db from '../data/config-db';
import { FindByProp, UserProps } from '../interfaces';


function findById(id: string) {
   return db('users').where({id});
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
   findBy,
   add,
   updateUser,
   deleteUser
}
