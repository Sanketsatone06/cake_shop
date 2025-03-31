import React from 'react'
import './feature.css'

const Feature = () => {
    return (
        <>
            <div className="container-fluid feature pb-5">
                <div className="container">
                    <div className='text-center lh-lg pt-5 mt-5 mb-5'>
                        <span className='text-danger fw-bold'>Our Features</span>
                        <h2 className='fs-5 fw-bold'>Quality is Our First Priority</h2>
                    </div>
                    <div className='row'>
                        <div className="col-12 col-lg-4 text-center">
                            <img src="./images\illustration\icon1.svg" alt="" />
                            <h2 className='text-danger'>Pet Boarding</h2>
                            <p>consectetur adipiscing elit, serfd <br /> dgo eiusmod tempor incididunt ut <br /> ore et dolore magna aliqua.</p>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <img src="./images\illustration\icon2.svg" alt="" />
                            <h2 className='text-danger'>Pet Boarding</h2>
                            <p>consectetur adipiscing elit, serfd <br /> dgo eiusmod tempor incididunt ut <br /> ore et dolore magna aliqua.</p>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <img src="./images\illustration\icon3.svg" alt="" />
                            <h2 className='text-danger'>Pet Boarding</h2>
                            <p>consectetur adipiscing elit, serfd <br /> dgo eiusmod tempor incididunt ut <br /> ore et dolore magna aliqua.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature