import { useLoaderData } from "react-router-dom"

const Product = () => {

    const product = useLoaderData()
    const { brand,description, thumbnail, price } = product
    return (
        <div className="flex justify-center mb-4 mt-4 items-center">
            <div className="card  w-[800px] items-center shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={thumbnail}
                        alt="product-image"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand}</h2>
                    <p>{description}</p>
                   <div className="flex justify-between items-center gap-8">
                   <div>
                        <p>P : {price}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">add card</button>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Product