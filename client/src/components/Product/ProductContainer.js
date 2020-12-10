import React from 'react'
import RenderProduct from './RenderProduct'

const ProductContainer = (props) => {
    return (
        <div>
            <RenderProduct product={props.product} />
        </div>
    )
}

export default ProductContainer
