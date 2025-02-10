import React from 'react'
import { data } from '../../utils/data'
import DataInfo from '../../utils/dataInfo';

const ProductPage = () => {
    return (
        <div className="bg-[#100f36] p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item) => (
                <DataInfo key={item.id} data={item} />
            ))}
        </div>
    );
};

export default ProductPage;