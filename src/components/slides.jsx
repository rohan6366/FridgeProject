import {useState} from 'react'
import Slide from './slide1'
import Slide2 from './slide2'
import Slide3 from './slide3'

function Slides() {

    const [numSlides, setNumSlides] = useState(3)
    return (
        <div className="slides__container">
            <Slide></Slide>
        </div>
    )
}

export default Slides
