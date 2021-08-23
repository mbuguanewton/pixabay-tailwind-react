import React, { useState, useEffect } from 'react'
import Card from './components/common/Card'
import ImageSearch from './components/ImageSearch'
import { useDebounce } from 'use-debounce'

function App() {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [term, setTerm] = useState('')

    const [value] = useDebounce(term, 2000)

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${value}&image_type=photo&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [value])

    return (
        <div className='container mx-auto'>
            <ImageSearch setTerm={setTerm} />
            <div className='grid grid-cols-4 gap-5 auto-cols-auto'>
                {images.length &&
                    images.map((image) => (
                        <Card key={image.id} image={image} />
                    ))}
            </div>
            {!images.length && loading && (
                <h2 className='text-center text-6xl mx-auto'>Loading ...</h2>
            )}
            {images.length === 0 && !loading && (
                <h2 className='text-3xl text-center'>😧 no images found</h2>
            )}
        </div>
    )
}

export default App
