import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'

const Testimonial = React.lazy(
    () => import('./Testimonial')
)

export default function TestimonialLazy() {
    const { isNearScreen, fromRef } = useNearScreen({ distance : '200px' })
    return <div ref={fromRef}>
        <Suspense fallback={'Not Testimonial'}>
            {isNearScreen ? <Testimonial /> : 'Gaaaaaa'}
        </Suspense>
    </div>
}
