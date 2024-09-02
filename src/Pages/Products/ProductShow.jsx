import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';

const ProductShow = ({ product }) => {
    const { id, title, thumbnail, price } = product || {}
    const navigate = useNavigate()
    const handelSingleItemNavigate = () => {
        const user = true
        if (user) {
            navigate(`/product/${id}`)
        }
        else {
            navigate('/')
        }
    }
    const sliceCondition = title.length > 10;
    return (
        <button className="cursor-pointer" onClick={handelSingleItemNavigate}>
            <div className=" text-white hover:bg-purple-800 p-4 bg-[#270f43] rounded-lg shadow-lg w-[200px] h-[300px]">
                <div>
                    <img className="w-[200px]" src={
                        thumbnail} alt="img" />
                    <h1 className="font-bold mb-2">{sliceCondition ? title.slice(0, 25) + '...' : title}</h1>
                    <p className="font-semibold">P : {price}</p>
                </div>
                <div className="rating rating-xs">
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
                {/* <div> */}
                {/* <Link to={`/product/${id}`}><button  className="py-2 px-4 bg-cyan-600 text-white rounded-lg cursor-pointer">View Details</button></Link> */}
                {/* </div> */}
            </div>
        </button>
    )
}

ProductShow.propTypes = {
    product: PropTypes.object.isRequired,
}
export default ProductShow
