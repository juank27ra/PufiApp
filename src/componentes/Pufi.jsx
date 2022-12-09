import React from 'react'
import Footer from './Footer'
import Subscribe from './Subscribe'
import Instagram from './Instagram'
import Nabvar from './Nabvar'

export default function Pufi() {
  
  
    return (
    <div >
        <div>
          <Nabvar/> 
        </div>
      <div className='grid grid-row-4 grid-cols-2 mt-0 mr-0'>
        <div>
          <img alt='Umbrella' src='https://static.emol.cl/emol50/Fotos/2021/01/31/file_20210131074425.jpg' class=" h-[40em] w-full "/>
        </div>  
        <div  class=" h-[40em] w-full flex items-center justify-center ">
          <div className='text-center'>
            <div className='flex items-center justify-center mb-14'>
              <img alt='Rain small' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq590Y0ed0vyweT2cOTZ39bmH83dV1lXUiCQ&usqp=CAU' className=' h-24 w-30' />
            </div>  
            <h1 className='text-center text-black text-4xl mb-10'>Pufi RAIN</h1>
            <p className='mb-10'>_______</p>
            <p >Cómoda de llevar a cualquier</p>
            <p > lugar y con mucho estilo </p>
            <button className=' mt-14 text-semibold'>{"> VER MAS"}</button>
          </div>
        </div>

        <div  class=" h-[40em] w-full flex items-center justify-center  ">
          <div className='text-center'>
            <div className='flex items-center justify-center mb-14 '>
              <img alt='puff small' src='https://http2.mlstatic.com/D_NQ_NP_808282-MLA26650250002_012018-O.jpg' className='h-20 w-48'/>
            </div>  
            <p className='text-center text-black text-4xl mb-10'>Pufi PUFF</p>
            <p className='mb-10'>_______</p>
            <p >Ideal para descansar y estar cómodo</p>
            <p >  en muchos lugares </p>
            <button className=' mt-14 text-semibold'>{"> VER MAS"}</button>
          </div>
        </div>

          <img alt='' src='https://i.pinimg.com/736x/36/12/13/36121312692ec64e412dc1d04972e4ae.jpg' class="bg-gray-500 h-[40em] w-full "/>

          <img alt='' src="https://ae01.alicdn.com/kf/S6177cdfeb8f0479dabafd7586a54df9fZ/Cajas-de-almacenamiento-de-ropa-interior-organizador-de-armario-armario-caj-n-divisor-ahorro-de-espacio.jpg_Q90.jpg_.webp" class=" m-0.5 h-[40em] w-full "/> 

        <div  class=" h-[40em] w-full flex items-center justify-center  ">
          <div className='text-center'>
            <div className='flex items-center justify-center mb-10 '>
              <img alt='' src='https://ae01.alicdn.com/kf/Hef3bd91c72fc4e80b9f474e00f8e45c42/Organizador-de-armario-de-almacenamiento-plegable-caja-de-ropa-interior-de-los-organizadores-de-divisores-de.jpg' className='h-24 w-24 mb-6'/>
            </div>
          <h1 className='text-center text-black text-4xl mb-10'>Pufi CART</h1>
          <p className='mb-10'>_______</p>
          <p >Nunca fue tan fácil</p>
          <p >  organizar y guardar </p>
          <button className=' mt-14 text-semibold'>{"> VER MAS"}</button>
          </div>
        </div>
        
        <div  class=" m-0.5 h-[40em] w-full flex items-center justify-center ">
          <div className='text-center'>
          <div className='flex items-center justify-center mb-14'>
          <img alt='Nap small' src='https://http2.mlstatic.com/D_NQ_NP_723740-MCO31277362643_062019-O.webp' className=' h-20 w-20'/>
          </div>
          <p className='text-center text-black text-4xl mb-10'>Pufi NAP</p>
          <p className='mb-10'>_______</p>
          <p >Consigue dormir y disfrutar </p>
          <p > en todos los viajes </p>
          <button className=' mt-6 text-semibold'>{"> VER MAS"}</button>
          </div>
        </div>
        <img alt='' src='https://ae01.alicdn.com/kf/HTB1nJfbaEvrK1RjSszfq6xJNVXae/Almohada-inflable-de-apoyo-para-la-cabeza-coj-n-de-viaje-multifunci-n-para-dormir-en.jpg' class="bg-gray-500  m-0.5 h-[40em] w-full "/> 
      </div>

      <Instagram/>
      <div className='mb-32'>
        <Subscribe/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  )
}
