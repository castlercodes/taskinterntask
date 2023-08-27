import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BarChart from './BarChart';

function DataDisplay() {
    interface DataObjectCasesWithDates {
        cases: Record<string, number>;
        deaths: Record<string, number>;
        recovered: Record<string, number>;
    }

    const [casesWithDate, setCasesWithDate] = useState <DataObjectCasesWithDates>()
    const [userData, setUserData] = useState({
        labels: [] as string[],
        datasets: [
            {
                label: "Cases",
                data: [] as string[],
            }
        ]
    })
    useEffect(() => {
        setUserData({
            labels: Object.keys(casesWithDate?casesWithDate.cases:""),
            datasets: [
                {
                    label: "Cases Versus Time",
                    data: Object.values(casesWithDate?casesWithDate.cases:"")
                }
            ],
        });
    }, [casesWithDate]);
    
    useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        setCasesWithDate(response.data); // Assuming the data is an array of objects
        console.log(response.data);
    };
    fetchData();
    console.log(casesWithDate);
    }, [])

  return (
    <div>
      <BarChart chartData={userData} />
    </div>
  )
}

export default DataDisplay
