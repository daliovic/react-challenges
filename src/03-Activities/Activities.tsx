import React, { useEffect } from 'react'
import OneActivity from './OneActivity'

export default function Activities() {


    const [activities, setActivities] = React.useState<any>([])

    const getActivity = async () => {
        const response = await fetch('http://www.boredapi.com/api/activity/')
        const data = await response.json()
        setActivities([...activities, data])
    }


    useEffect(() => {
        //console.log(activities);
    }, [activities])
    return (
        <div>
            <button onClick={getActivity}>Get Activity</button>
            {activities.map((item: any) => 
               <OneActivity key={item.key} content={item}/>
            )}
        </div>
    )
}
