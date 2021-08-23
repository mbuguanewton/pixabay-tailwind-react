import React from 'react'

function ImageSearch({ term, setTerm }) {
    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <div className='flex items-center border-b-2 border-teal-500 py-2'>
                <input
                    type='text'
                    value={term}
                    onChange={(e) => {
                        setTerm(e.target.value)
                    }}
                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    placeholder='Search Image Term ...'
                />
            </div>
        </div>
    )
}

export default ImageSearch
