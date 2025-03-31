import React from 'react'
import './Cake.css'

const Cake = (props) => {
    const data = props.Store;
  return (
    <>
    <section className="container">
        <div className="row">
            {
                data.map((e)=>{
                    return(
                        <div className="col-12 col-lg-4">
                            <div className="box">
                        <div className="img-box">
                            <img src={e.img} className='img-fluid' alt="" />
                            <h3>{e.title}</h3>
                            <p>{e.paragraph}</p>
                            <button type='button' className='btn btn-warning rounded-pill '>{e.button}</button>
                        </div>
                    </div>
                    </div>
                    )
                   
                })
            }
        </div>
    </section>
    </>
  )
}

export default Cake