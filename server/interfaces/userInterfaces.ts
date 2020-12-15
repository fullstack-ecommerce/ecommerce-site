export interface UserProps {
   username?: string;
   email?: string;
   password?: string;
   reset_link?: string;
   is_admin?: boolean;
}

export interface FindByProp {
   email?: string;
   reset_link?: string;
}
