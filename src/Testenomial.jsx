import React from 'react'
import './Testenomial.css'

const Testenomial = () => {
    return (
        <React.Fragment>
            <section className='container align-items-center'>
                <div>
                    <span className='text-danger'><p className='fw-bold fs-5 text-center'>Testimonial</p></span>
                    <h2 className='fw-bold text-center mb-5'>What Customers Say</h2>
                </div>
                <div className="row align-items-center justify-content-center mb-5 mt-5">
                    <div className="col-12 col-md-6 col-lg-5 test mb-5 m-1">
                            <p className='mb-5 fw-bold d-inline'>
                                ""Leather detail shoulder contrastic colour contour <br /> stunning silhouette working peplum. Statement <br /> buttons cover-up tweaks patch."
                            </p>
                            <div>
                                <img className='img-fluid' src="./images\illustration\Homepage_testi.png" alt="" /> <br />
                                <span className='text-danger'>Olive Jems</span><br />
                                <p>UIX designer</p>
                            </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 test mb-5 m-1">
                            <p className='mb-5 fw-bold d-inline'>
                                ""Leather detail shoulder contrastic colour contour <br /> stunning silhouette working peplum. Statement <br /> buttons cover-up tweaks patch."
                            </p>
                            <div>
                                <img className='img-fluid ' src="./images\illustration\Homepage_testi2.png" alt="" /> <br />
                                <span className='text-danger'>Olive Jems</span> <br />
                                <p>UIX designer</p>
                            </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}

export default Testenomial