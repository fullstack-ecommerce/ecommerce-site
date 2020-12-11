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

export interface ProductProps {
   name?: string;
   price?: number
}

export interface ImgsProps {
   img_url: string;
}

export interface SizesProps {
   size: string;
}

export interface NextPage {
   page: number;
   limit: number;
}

export interface CreateProductsProps {
   name: string;
   description: string;
   price: number;
   sizes: SizesProps[];
   images: ImgsProps[];
}

export interface ResultProp {
   next?: NextPage;
   previous?: NextPage;
   paginatedProducts?: CreateProductsProps[];
}


export interface ProductImgIdsProps {
   product_id: number;
   img_id: number;
}

export interface ProductSizeIdsProps {
   size_id: number;
   product_id: number;
}

export interface CartItemsProps {
   product_name?: string;
   product_price?: number;
   quantity?: number;
   product_img?: string;
}

export interface CartUserItemIdsProps {
   user_id: number;
   cart_item_id: number;
}

export interface CommentProps {
   comment: string;
}

export interface CommentProductIdsProps {
   product_id: number;
   user_id: number;
   comment_id: number;
}

export interface RatingProps {
   rating: number;
}

export interface RatingProductIdsProps {
   product_id: number,
   user_id: number;
   rating_id: number
}