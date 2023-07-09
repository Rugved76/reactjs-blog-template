import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blog } from '../../assets/data/data'
import { AiOutlineDelete } from 'react-icons/ai'
import './details.css'

export const Details = () => {

    const { id } = useParams()
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        let blogs = blog.find((blogs) => blog.id === parseInt(id))
        if (blogs) {
            setBlogs(blogs)
        }
    }, [])
    return (
        <>
            {blogs ? (
                <section className="singlePost">
                    <div className="container">
                        <div className="left">
                            <img src={blogs.cover} alt="" />
                        </div>
                        <div className="right">
                            <button className="button">
                                <AiOutlineDelete/>
                            </button>
                        </div>
                        <h1>{blogs.title}</h1>
                        <p>{blogs.desc}</p>
                    </div>
                </section>
            ) : null}

        </>
    )
}
