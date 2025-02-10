import React from 'react'

const DataInfo = ({ data }) => {
    const { title, description, image } = data;
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full mx-auto">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">{title}</h1>
                <p className="text-gray-600 text-base">{description}</p>
            </div>
        </div>
    )
}

export default DataInfo;