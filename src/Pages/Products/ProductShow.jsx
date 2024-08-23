import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';

const ProductShow = ({ product }) => {
    const { id, brand, category, description, thumbnail, price } = product || {}
    const navigate = useNavigate()
    const handelSingleItemNavigate = () => {
        const user = true
        if (user) {
            navigate(`/product/${id}`)
        }
        else{
            navigate('/')
        }
    }
    return (
        <div>
            <div className="p-4 shadow-lg">
                <h1 className="text-2xl font-bold">{brand}</h1>
                <div>
                    <img className="w-[200px] h-52 mb-2" src={
                        thumbnail} alt="img" />
                    <h3 className="text-2xl font-bold">{category}</h3>
                </div>
                <p className="mb-2">{description}</p>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold">P : {price}</p>
                    <div>
                        {/* <Link to={`/product/${id}`}><button  className="py-2 px-4 bg-cyan-600 text-white rounded-lg cursor-pointer">View Details</button></Link> */}
                        <button onClick={handelSingleItemNavigate} className="py-2 px-4 bg-cyan-600 text-white rounded-lg cursor-pointer">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductShow.propTypes = {
    product: PropTypes.object.isRequired,
}
export default ProductShow
