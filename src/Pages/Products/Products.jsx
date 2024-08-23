import { useLoaderData } from "react-router-dom"
import ProductShow from "./ProductShow"

const Products = () => {

    const { products } = useLoaderData()
    return (
        <div className=" grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 pt-4 pb-4">
            {
                products?.map(product => <ProductShow key={product.id} product={product}/>)
            }

        </div>
    )
}

export default Products