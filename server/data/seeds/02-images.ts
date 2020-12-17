import * as Knex from 'knex';

export async function seed(knex: Knex) {
  // Deletes ALL existing entries
  return knex('images')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('images').insert([
        {img_url: "https://cdni.llbean.net/is/image/wim/220626_683_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"},
        {img_url: "https://cdni.llbean.net/is/image/wim/220626_683_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"},
        {img_url: "https://cdni.llbean.net/is/image/wim/220626_683_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"},
        {img_url: "https://cdni.llbean.net/is/image/wim/220626_683_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"},
        {img_url: "https://cdni.llbean.net/is/image/wim/220626_683_41?hei=764&wid=665&resMode=sharp2&defaultImage=llbstage/A0211793_2"},
      ]);
    });
};
