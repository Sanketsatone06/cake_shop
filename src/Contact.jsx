import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <section className="container-fluid pick pt-5 pb-5 mt-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <img className='img-fluid mb-4' src="./images\illustration\logo2_footer.png" alt="" />
                    <p className='mb-4 fw-bold lh-lg'>Land behold it created good saw after she'd Our <br /> set living. Signs midst dominion creepeth morning <br /> laboris nisi ufsit aliquip.</p>
                    <ul className='text-decoration-none social'>
                        <li><a href=""></a><i class="bi bi-twitter-x"></i></li>
                        <li><a href=""></a><i class="bi bi-facebook"></i></li>
                        <li><a href=""></a><i class="bi bi-linkedin"></i></li>
                        <li><a href=""></a><i class="bi bi-pinterest"></i></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                        <h2 className='fw-bold'>Quick Links</h2>
                        <ul className='Quick lh-lg'>
                            <li><a href="#"></a>Home</li>
                            <li><a href="#"></a>About</li>
                            <li><a href="#"></a>Services</li>
                            <li><a href="#"></a>Blog</li>
                            <li><a href="#"></a>Conatct</li>
                        </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                        <h2 className='fw-bold'>Cakes</h2>
                        <ul className='lh-lg flav'>
                            <li><a href=""></a>Blackforest</li>
                            <li><a href=""></a>Bodhubon</li>
                            <li><a href=""></a>Rongdhonu</li>
                            <li><a href=""></a>Meghrong</li>
                        </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                        <h2 className='fw-bold'>Contact-us</h2>

                        <p>76/A, Green Lane, Dhanmondi, NYC</p>
                        <h2 className='text-danger'>+10 (78) 738-9083</h2>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact