import React from 'react'

export const Create = () => {
    return (
        <>
            <section className="newPost">
                <div className="container boxItems">
                    <div className="img">
                        <img src="https://i.pinimg.com/564x/69/0f/18/690f188441a99e79db31b543455e943d.jpg" alt="" />
                    </div>
                    <form>
                        <div className="inputFile flexCenter">
                            <input type="file" />
                        </div>
                        <input type="text" placeholder='Title' />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <button>Create Post</button>
                    </form>
                </div>
            </section>
        </>
    )
}
