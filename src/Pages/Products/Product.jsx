import { useState } from "react"
import { useLoaderData } from "react-router-dom"

const Product = () => {
    const product = useLoaderData()
    const { category, brand, description, thumbnail, price } = product

    const [showCard, setShowCard] = useState([]);

    const handelAddToCard = (product) => {
        // console.log('handel add to card',id);
        const newAddCard = [...showCard, product]
        setShowCard(newAddCard)
    }
    return (
        <div className="lg:flex flex-col lg:flex-row md:flex-row ">
            <div className="w-[70%]">
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
                            <div><button onClick={() => handelAddToCard(product)} className="bg-blue-600 py-1 px-4 rounded-lg cursor-pointer">Add Card</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[30%] md:w-[20%] px-4 py-4 my-4
         w-full mx-auto h-screen bg-[#242526] text-white overflow-hidden">
                <p className="text-3xl font-bold mb-4">Totall Card : {showCard.length}</p>
                <h3 className="text-2xl font-bold mb-2">Name :</h3>
                <div>
                    {showCard.map((card, idx) =>
                        <div className="mb-4 border-b-2 border-gray-400 py-2 " key={idx}>
                            <h4>{card.title}</h4>
                            <p className="mt-4 text-xl font-semibold">Price :</p>
                            <span>{card.price}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product