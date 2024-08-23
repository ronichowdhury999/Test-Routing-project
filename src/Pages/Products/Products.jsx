import { useLoaderData } from "react-router-dom"
import ProductShow from "./ProductShow"

const Products = () => {

    const { products } = useLoaderData()
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
            {
                products?.map(product => <ProductShow key={product.id} product={product}/>)
            }

        </div>
    )
}

export default Products