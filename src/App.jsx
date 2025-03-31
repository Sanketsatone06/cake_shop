import React from 'react'
import Nav from './Nav'
import Cake from './Cake'
import Info from './Info'
import Feature from './Feature'
import Video from './Video'
import Testenomial from './Testenomial'
import Pasetry from './Pasetry'
import Contact from './Contact'
import './App.css'

const Cakedata =[
    {
    img:'./images/illustration/items1.png',
    title:'Choclate',
    paragraph:'Land behold it created good saw after shed our set.',
    button:'$20 l Order Now'
    },
    {
    img:'./images/illustration/items2.png',
    title:'Sweetheart',
    paragraph:'Land behold it created good saw after shed our set.',
    button:'$20 l Order Now'
    },
    {
    img:'./images/illustration/items3.png.webp',
    title:'Blackforest',
    paragraph:'Land behold it created good saw after shed our set.',
    button:'$20 l Order Now'
    },
    {
    img:'./images/illustration/items4.png.webp',
    title:'Choclate',
    paragraph:'Land behold it created good saw after shed our set.',
    button:'$20 l Order Now'
    },
    {
    img:'./images/illustration/items5.png.webp',
    title:'Sweetheart',
    paragraph:'Land behold it created good saw after shed our set.',
    button:'$20 l Order Now'
    },
    {
        img:'./images/illustration/items6.png.webp',
        title:'Blackforest',
        paragraph:'Land behold it created good saw after shed our set.',
        button:'$20 l Order Now'
        },
    {
        img:'./images/illustration/items7.png.webp',
        title:'Choclate',
        paragraph:'Land behold it created good saw after shed our set.',
        button:'$20 l Order Now'
        },
    {
        img:'./images/illustration/items8.png.webp',
        title:'Sweetheart',
        paragraph:'Land behold it created good saw after shed our set.',
        button:'$20 l Order Now'
        },
    {
        img:'./images/illustration/items9.png.webp',
        title:'Blackforest',
        paragraph:'Land behold it created good saw after shed our set.',
        button:'$20 l Order Now'
        },
]

const App = () => {
  return (
    <>
    <Nav />
    <section className='hero'>
   <div className="imgs-box mb-5" >
    <div className="container position-relative top-10 con-text">
    <h3 className='display-1 fw-bolder'>Delicious Cake <br /> For Everyone</h3>
    <p> adipisicing elit. Ea, molestiae tenetur magnam  sunt soluta. <br /> Dolore earum et hic facilis consectetur. Consectetur earum facilis mollitia.</p>
    <button type='button' className='btn btn-warning rounded-pill ms-3 text-white'>Explore Menu</button>
    </div>
   </div>
    </section>

    <Cake Store={Cakedata}/>
    <Info />
    <Feature />
    <Video />
    <Testenomial />
    < Pasetry />
    < Contact />
    </>
  )
}

export default App