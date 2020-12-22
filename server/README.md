# - user register and login routes

> ### POST /auth/register

```
Expects:
{
    username: <string>,
    email: <string>,
    password: <string>,
}
```

```
Returns:
{
    message: "Created user sucessfully"
}
```

<br />

> #### POST /auth/login

```
Expects:
{
    email: <string>
    password: <string>
}

Returns:
{
    token: <string>,
    username: <string>,
    is_admin: <boolean>,
    user_id: <number>
}
```

<br />

> #### GET /auth/get_user/:user_id

```
Returns:
{
    id: <number>,
    username: <string>,
    email: <string>,
    is_admin: <boolean>,
    created_at: <timeStamp>
}
```

<br />

# - Reset user password

> #### PATCH /auth/forgot_password

```
Expects:
{
   email: <string>
}

Returns:
{
   message: "email sent!"
}
```

<br />

> #### PATCH /auth/reset_password/:token

```
Expects:
{
   password: <string>
}

Returns:
{
   message: "Password updated successfully!"
}
```

<br />

> # All the following routes require **`token`**

# - Return an array of all users

> #### GET /auth/users

```
Returns:
[
    {
       id: <number>,
       username: <string>,
       email: <string>,
       is_admin: <boolean>,
       created_at: <timeStamp>
    },
]
```

<br />

# - Create new product ( FOR ADMIN ONLY )

> #### POST /product/create

```
Expects:
{
   name: <string>,
   description: <string>,
   price: <number>,
   sizes: <string[]>  // array of strings,
   images: <string[]> // array of images
}
```

```
Returns:
    {
        message: "New producut added successfully"
    }
```

<br />

# - Return specific product

> #### GET /product/get/:product_id

```
{
        id: <number>,
        name: <string>,
        description: <string>,
        price: <number>,
        created_at: <timeStamp>,
        sizes: [{},{}],
        images: [{}, {}],
        comments: [{}, {}],
        ratings: [{}, {}]
}
```

## <br />

# - Return an array of all products

> #### GET /product/get_all

```
[
    {
        id: <number>,
        name: <string>,
        description: <string>,
        price: <number>,
        created_at: <timeStamp>,
        sizes: [{},{}],
        images: [{}, {}],
        comments: [{}, {}],
        ratings: [{}, {}]
    },
    ...
]
```

<br />

# - Return an paginate data

> #### GET /product/get?page={pageNumber}&limit={limitNumber}

```

    {
       next: {
          page: <number>,
          limit: <number>
       },
       paginatedProducts: [
         {
            id: <number>,
            name: <string>,
            description: <string>,
            price: <number>,
            created_at: <timeStamp>,
            sizes: [{},{}],
            images: [{}, {}],
            comments: [{}, {}],
            ratings: [{}, {}]
         },
       ]
    }
```

<br />

# - Update product

> #### PUT /product/edit/:product_id

```
Note ( ? ) means optional
```

```
Expects:
{
   name?: <string>,
   description?: <string>,
   price?: <number>,
}
```

```
Returns:
{
      message: "Prodcut updated successfully"
}
```

<br />

# - Delete project

> #### DELETE /prodcut/delete/:product_id

```
Returns:
{
    "message": "Product deleted successfully"
}
```

<br />

# - Add comment to product

> #### POST /comment/create/:product_id/:user_id

```
expects:
{
    comment: <string>,
    rating: <number>
}
```

```
returns:
{
   message: "Review added!"
}
```

<br />

# - Edit product comment ( OPERATION ONLY ALLOW FOR ADMIN )

> #### POST /comment/edit/:product_id/:comment_id

```
returns:
{
   message: "Comment updated successfully"
}
```

<br />

# - Delete comment

> #### DELETE /comment/delete/:product_id/:comment_id

```
returns:
{
   message: "Comment deleted successfully"
}
```

<br />

# - Add item to cart

> #### POST /user_cart/add/:user_id

```
expects:
{
   product_name: <string>,
   product_price: <string>,
   quantity: <number>,
   product_img: <string>
}
```

```
returns:
{
    message: 'Product added successfully!'
}
```

<br />

# - Get items in user cart

> #### GET /user_cart/get_all/:user_id

```
returns:
[
   {
      id: <number>,
      product_name:<string>,
      prodcut_price: <number>,
      product_size: <string>,
      quantity: <number>,
      product_img: <string>,
      created_at: <timeStamp>,
      user_id: <number>,
      cart_item_id: <number>
   },
]

```

# - Update items in user cart

> #### PATCH /user_cart/edit/:user_id/:cart_item_id

```
Note ( ? ) means optional
```

```
expects:
{
      prodcut_price?: <number>,
      product_size?: <string>,
      quantity?: <number>,
}
```

# - Delete item in user cart

> #### DELETE /user_cart/delete/:user_id/:cart_item_id

```
returns:
{
   message: "Item cart deleted successfully!"
}
```
