import { csv } from 'd3';
import { useState, useEffect } from 'react';

const csvUrl = 'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv';

export const useData = () => {
    // set State
    const [data, setData] = useState(null);

    //useEffect
    useEffect(() => {
        // declare row object of columns that need formatting/editting to be passed to csv() function from d3
        const row = (d) => {
            //convert to numbers
            d.sepal_length = +d.sepal_length;
            d.sepal_width  = +d.sepal_width;
            d.petal_length = +d.petal_length;
            d.petal_width  = +d.petal_width;
            
            return d;
        }

        csv(csvUrl, row).then((data) => {
            setData(data);
        })
    }, []);
    
    return data;
}