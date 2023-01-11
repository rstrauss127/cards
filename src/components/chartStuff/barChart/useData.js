import { csv } from 'd3';
import { useState, useEffect } from 'react';

const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

export const useData = () => {
    //set state
    const [data, setData] = useState(null);

    //useEffect 
    useEffect(() => {
        //declare row object to be passed to csv() function from d3
        const row = (d) => {
            //convert to number, get 2019 numbers
            d.Population = +d['2019']*1000;

            return d;
        }

        csv(csvUrl, row).then((data) => {
            setData(data.slice(0,10)); //top 10
        })
    }, []);

    return data;
}