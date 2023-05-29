import { IMG_URL } from '../config'


export default RestrauntCard = ({name, cuisines, cloudinaryImageId, avgRating}) => {
    return (
        <div className="restaurant">
            <img src={`${IMG_URL}${cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h5>{avgRating}</h5>
        </div>
    )
}