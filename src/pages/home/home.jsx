import { useEffect, useState } from 'react';
import img from '../../assets/image/kub.jpeg';
import { request } from '../../config/Request';
import Volume from '../../assets/icon/volume1.png';
import Umbrella from '../../assets/icon/umbrella1.png';
import Cylinder from '../../assets/icon/circle1.png';




  export const Home = () => {
  const [products, setProducts] = useState([]);
      useEffect(() => {
    request.get('/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return (
    <main>
      <section className='md:flex justify-between mx-7 mt-1'>
        <div className='md:w-1/3 bg-blue-500 hover:bg-blue-400 p-9'>
          <span className='flex justify-center p-5'>
            <img className='items-center w-16' src={Volume} alt="" />
          </span>
          <div className='text-center'>
            <h1 className='text-2xl text-white'>Heat and noise insulation</h1>
            <p className='mb-3'>Universal building insulation</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-4 border-white  '>More details</button>
          </div>
          
        </div>
        <div className='md:w-1/3 bg-blue-500 hover:bg-blue-400 p-9'>
          <span className='flex justify-center p-5'>
            <img className='items-center w-16' src={Umbrella} alt="" />
          </span>
          <div className='text-center'>
            <h1 className='text-2xl text-white'>Wind vapor barrier</h1>
            <p className='mb-3'>Reliable insulation of roof wall structures</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-4 border-white  '>More details</button>
          </div>
          
        </div>
        <div className='md:w-1/3 bg-blue-500 hover:bg-blue-400 p-9'>
          <span className='flex justify-center p-5'>
            <img className='items-center w-16' src={Cylinder} alt="" />
          </span>
          <div className='text-center'>
            <h1 className='text-2xl text-white'>Pipe insulation</h1>
            <p className='mb-3'>Heat and noise insulation for pipes of various diameters</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-4 border-white  '>More details</button>
          </div>
          
        </div>
      </section>
      <section className='mx-7 mb-7 border-b-4 border-b-blue-600'>
        <div className='mt-7'>
          <h1 className='flex-1 text-4xl mb-4 pl-1 items-center border-l-2 border-l-blue-600'>Products of the manufacturing company ISOFLEX</h1>
          <p className='text-lg text-blue-500'>
            Official catalog of polyethylene foam insulation manufactured by the Igoffex production company in Nikhniy Novgorod. Buy waterproofing at
            Factory price with delivery throughout Russia.
          </p>
        </div>
      </section>
      <section className='mx-7'>
        <div class="grid   sm:grid-cols-2 md:grid-cols-3 gap-4 mb-7">
          <div class="bg-white  text-center border-b-4 border-white hover:border-blue-600">
            <img src={img} alt="Product 1" className='mx-auto h-auto object-contain'/>
            <h2 class="mt-4">Product 1</h2>
          </div>
          <div class="bg-white  text-center border-b-4 border-white hover:border-blue-600">
            <img src={img} alt="Product 2" className="mx-auto h-auto object-contain"/>
            <h2 class="mt-4">Product 2</h2>
          </div>
          <div class="bg-white  text-center border-b-4 border-white hover:border-blue-600">
            <img src={img} alt="Product 3" className="mx-auto h-auto object-contain"/>
            <h2 class="mt-4">Product 3</h2>
          </div>
        </div>
        
      </section>
    </main>
  )
}


