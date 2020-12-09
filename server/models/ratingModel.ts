import db from '../data/config-db';
import { RatingProductIdsProps, RatingProps } from '../interfaces';

function addRating(rating: RatingProps) {
   return db("ratings").insert(rating, 'id');
}

function addRatingProductIds(body: RatingProductIdsProps) {
   return db("product_ratings").insert(body, 'id');
}

export {
   addRating,
   addRatingProductIds
}
