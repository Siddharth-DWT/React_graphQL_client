import {gql} from "@apollo/client";

const ProductFilter =  gql`
        query ProductDetails($productDetailsId: [ID!]) {
            productDetails(id: $productDetailsId) {
                productId
                allOptions {
                    type
                    sortPriority
                    options {
                        id
                        message
                        sortPriority
                        status
                        type
                        value
                    }
                }
            }
        }`;

export default ProductFilter;
