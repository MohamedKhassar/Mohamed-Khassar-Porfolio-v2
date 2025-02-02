import PropTypes from "prop-types"
import { AiFillStar } from "react-icons/ai"
import { FiStar } from "react-icons/fi"

const ReviewsCard = ({ content,
    name,
    imgSrc,
    company, classes }) => {
        const ratings=Array(5).fill(<AiFillStar className="text-yellow-300 text-[18px]" />)
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
            <div className="flex gap-1 items-center mb-3">
                {ratings.map((rating)=>(
                    rating
                ))}
            </div>
            <p className="text-zinc-400 mb-8">
                {content}
            </p>
            <div className="flex items-center gap-2 mt-auto">
                <figure className="img-box rounded-lg">
                    <img 
                    src={imgSrc} 
                    alt={name}
                    className="img-cover"
                    width={44}
                    height={44}
                    />
                </figure>
                <div>
                    <p>
                        {name}
                    </p>
                    <p className="text-xs text-zinc-400 tracking-wider">
                        {company}
                    </p>
                </div>
            </div>
        </div>
    )
}

ReviewsCard.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default ReviewsCard