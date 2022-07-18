import React, { useEffect, useState } from "react";


const AvgRating = ({ movies }) => {

    const [averageRating, setAvgRating] = useState(0);

    useEffect(() => {
        console.log('In AvgRating UseEffect');
        if (movies.length > 0) {
            const newRating = movies?.reduce((accm, next) => {
                return accm + next.rating
            }, 0);
            setAvgRating(Math.floor(newRating / movies.length));
        }
    }, [movies]);

    return (
        <div className="content-box">
            <div> The average rating is {averageRating}</div>
        </div>
    )
}

export default AvgRating;