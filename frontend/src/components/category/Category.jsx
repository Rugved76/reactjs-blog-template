import React from 'react'
import './category.css'
import { category } from '../../assets/data/data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { MdNavigateNext } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'

const SampleNextArrow = (props) => {
    const { onclick } = props
    return (
        <div className="control-btn" onclick={onclick}>
            <button className='next'>
                <MdNavigateNext className='icon' />
                {/* <GrFormPrevious className='icon' /> */}
            </button>
        </div>
    )
}

const SamplePrevArrow = (props) => {
    const { onclick } = props
    return (
        <div className="control-btn" onclick={onclick}>
            <button className='prev'>
                <GrFormPrevious className='icon' />
            </button>
        </div>
    )
}
export const Category = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidestoShow: 3,
        SLidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpont: 800,
                settings: {
                    slidestoShow: 2,
                    SLidesToScroll: 2,
                }
            }
        ]
    }
    return (
        <>
            <section className="category">
                <div className="content">
                    <Slider {...settings}>
                        {category.map((item) => {
                            <div className="boxs" key={item.id}>
                                <div className="box">
                                    <img src={item.cover} alt="" />

                                    <div className="overlay">
                                        <h4>{item.category} </h4>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </Slider>
                </div>
            </section>
        </>
    )
}
