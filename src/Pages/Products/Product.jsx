import { useLoaderData } from "react-router-dom"

const Product = () => {

    const product = useLoaderData()
    const { category, brand, description, thumbnail, price } = product
    return (
        <div className="py-10 px-4 w-[400px] mx-auto">
            <div className="bg-[#242526] text-white p-4 border border-gray-600">
                <div>
                    <h1 className="text-2xl font-bold">{category}</h1>
                    <img className="w-[200px] ml-12" src={thumbnail} alt="product-images" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{brand}</h3>
                <p>{description}</p>
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <p>P : {price}</p>
                    </div>
                    <div><button className="bg-blue-600 py-1 px-4 rounded-lg cursor-pointer">Add Card</button></div>
                </div>
            </div>
        </div>
    )
}

export default Product