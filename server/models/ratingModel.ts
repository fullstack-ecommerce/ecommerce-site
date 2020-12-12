import db from '../data/config-db';
import { 
   RatingProductIdsProps, 
   RatingProps 
} from '../interfaces/productInterfaces';

// Add rating
function addRating(rating: RatingProps) {
   return db("ratings").insert(rating, 'id');
}

// Add product and rating id's
function addRatingProductIds(body: RatingProductIdsProps) {
   return db("product_ratings").insert(body, 'id');
}

export {
   addRating,
   addRatingProductIds
}
