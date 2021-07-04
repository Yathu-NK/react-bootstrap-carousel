import React from 'react'
import {Carousel} from 'react-bootstrap'

import "./Carousel.css"

export default function ControlledCarousel(props) {
    return (
            <Carousel fade>
            {props.images.map((item,key)=>{
                return (
                    <Carousel.Item   style={{'height':"auto"},{maxHeight:"500px"}} key={key} interval={props.autoplay ? props.autoplay :10000}>
                        <img
                        style={{width:"100%",height:"auto"}} 
                        className="d-block w-100"
                        src={item.img}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>{props.title}</h3>
                        <p>{props.subtitle}</p>
                        {props.children}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

