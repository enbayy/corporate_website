import React from 'react'
import { data } from '../../utils/data'
import DataInfo from '../../utils/dataInfo'

const ServicesPage = () => {
    return (
        <div>
            {data?.map((data)=>(
                <DataInfo key={data.id} data={data}/>
            ))}
        </div>
    )
}

export default ServicesPage