import React, { useState } from 'react'
import { RiImageAddLine } from 'react-icons/ri'
import { IoSettingsOutline } from 'react-icons/io5'
import { BsBagCheck } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrHelp } from 'react-icons/gr'
import { BiLogOut } from 'react-icons/bi'

import { Link } from 'react-router-dom'

export const User = () => {
    const user = true
    const [profileOpen, setProfileOpen] = useState(false)

    const close = () => {
        setProfileOpen(false)
    }

    return (
        <>
            <div className="profile">
                {user ? (
                    <>
                        <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
                            <img src="https://i.pinimg.com/564x/69/0f/18/690f188441a99e79db31b543455e943d.jpg" alt="images" />
                        </button>

                        {profileOpen && (
                            <div className="openProfile boxItems" onClick={close}>
                                <Link to="/account">
                                    <div className="img">
                                        <img src="https://i.pinimg.com/564x/69/0f/18/690f188441a99e79db31b543455e943d.jpg" alt="images" />
                                    </div>
                                    <div className="text">
                                        <h4>
                                            Dua Lipa
                                            <p>Los Angeles, CA</p>
                                        </h4>
                                    </div>
                                </Link>
                                <Link to='/create'>
                                    <button className="box">
                                        <RiImageAddLine className='icon' />
                                        <h4>Create Post</h4>
                                    </button>
                                </Link>

                                <button className="box">
                                    <IoSettingsOutline className='icon' />
                                    <h4>My Account</h4>
                                </button>

                                <button className="box">
                                    <BsBagCheck className='icon' />
                                    <h4>My Order</h4>
                                </button>

                                <button className="box">
                                    <AiOutlineHeart className='icon' />
                                    <h4>Wishlist</h4>
                                </button>
                                <button className="box">
                                    <GrHelp className='icon' />
                                    <h4>Help</h4>
                                </button>

                                <button className="box">
                                    <BiLogOut className='icon' />
                                    <h4>Log Out </h4>
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <Link to='/login'>
                        <button>My Account</button>
                    </Link>
                )}
            </div>
        </>
    )
}
