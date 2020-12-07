export interface UserProps {
   username?: string;
   email: string;
   password?: string;
}

export interface FindByProp {
   email?: string;
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
