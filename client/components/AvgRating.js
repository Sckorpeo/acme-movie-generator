import React, { useEffect, useState } from "react";


const AvgRating = ({ movies }) => {

    const [averageRating, setAvgRating] = useState(0);
    useEffect(() => {
        const newRating = movies?.reduce((prev, next) => {
            return (prev + next.rating) / 2
        }, averageRating);
        setAvgRating(newRating);
    }, [movies]);

    return (
        <div className="content-box">
            <div> The average rating is {averageRating}</div>
        </div>
    )
}

export default AvgRating;