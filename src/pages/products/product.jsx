import React, { useState, useEffect } from 'react';

import Truba from '../../assets/image/truba.webp'
import Tag from '../../assets/icon/bookmark.png'
import Doc from '../../assets/icon/document.png'
import Ser from '../../assets/image/sertifikat.jpeg'
import User from '../../assets/icon/user.svg'
import Phone from '../../assets/icon/phone.svg'
import Cross from '../../assets/icon/cross.svg'
import Chec from '../../assets/icon/check.png'





  export const Products = () => {
    const [data, setData] = useState([
    {
      name: 'Теплоизоляция труб 28/9',
      diameter: 28,
      thickness: 9,
      quantity: 100,
      price: 12.29,
    },
    {
      name: 'Теплоизоляция труб 35/9',
      diameter: 35,
      thickness: 9,
      quantity: 100,
      price: 14.59,
    },
    {
      name: 'Теплоизоляция труб 42/9',
      diameter: 42,
      thickness: 9,
      quantity: 100,
      price: 17.49,
    },
    {
      name: 'Теплоизоляция труб 48/9',
      diameter: 48,
      thickness: 9,
      quantity: 50,
      price: 19.39,
    },
    {
      name: 'Теплоизоляция труб 54/9',
      diameter: 54,
      thickness: 9,
      quantity: 50,
      price: 22.91,
    },
    {
      name: 'Теплоизоляция труб 60/9',
      diameter: 60,
      thickness: 9,
      quantity: 50,
      price: 28.90,
    },
    {
      name: 'Теплоизоляция труб 64/9',
      diameter: 64,
      thickness: 9,
      quantity: 50,
      price: 29.10,
    },
    {
      name: 'Теплоизоляция труб 76/9',
      diameter: 76,
      thickness: 9,
      quantity: 50,
      price: 43.23,
    },
    {
      name: 'Теплоизоляция труб 89/9',
      diameter: 76,
      thickness: 9,
      quantity: 30,
      price: 47.58,
    },
    {
      name: 'Теплоизоляция труб 110/9',
      diameter: 110,
      thickness: 9,
      quantity: 20,
      price: 63.10,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className='lg:flex mx-3 md:mx-7'>
      <div className='lg:w-3/4'>
        <div>
            <h1 className='flex-1 text-2xl md:text-4xl mb-4 pl-1 items-center border-l-2 border-l-blue-600'>Izoflex pipe insulation</h1>
        </div>
        <section className='md:flex'>
          <div className='md:w-3/5'>
            <p>
              The manufacturer IZOFLEX offers to buy pipe insulation made of foamed polyethylene in Nizhny Novgorod at wholesale prices. Pipe insulation is used in cold and hot water supply systems, sewerage, heating to protect pipelines from negative external influences and minimize heat loss. To order pipe insulation, visit our office, call +7 (831) 280-84-46 or order online. We will arrange delivery of goods to the site.
            </p>
          </div>
          <span className=' md:w-2/5'>
            <img src={Truba} alt="" />
          </span>
        </section>
        <div className="container md:mx-auto md:p-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Прайс-лист на утеплитель труб
        </h1>
        <table className="max-sm:grid table-auto mx-0 md:w-full text-center border border-gray-300">
          <thead className='text-sm md:text-md'>
            <tr className="bg-gray-100">
              <th className="md:px-4 py-2 text-left">Наименование</th>
              <th className="md:px-4 py-2 text-left">Диаметр</th>
              <th className="md:px-4 py-2 text-left">Толщина стенки</th>
              <th className="md:px-4 py-2 text-left">Кол-во м в пачке</th>
              <th className="md:px-4 py-2 text-left">Цена с НДС за м.л.</th>
              <th className="md:px-4 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className='max-md:text-sm' key={index}>
                <td className="border md:px-4 py-2">{item.name}</td>
                <td className="border md:px-4 py-2">{item.diameter}</td>
                <td className="border md:px-4 py-2">{item.thickness}</td>
                <td className="border md:px-4 py-2">{item.quantity}</td>
                <td className="border md:px-4 py-2">{item.price} Р</td>
                <td className="border md:px-4 py-2">
                  <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold lg:py-2 lg:px-4 rounded focus:outline-none focus:shadow-outline">
                    Заказать
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* Modal */}
          {showModal ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="grid bg-white rounded-lg shadow-md p-6 w-96">
              <div className='flex justify-end '>
                <button onClick={closeModal} className="text-right  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <img className='w-4' src={Cross} alt="" />
                </button>
              </div>         
              <div>
                <div>
                  <label htmlFor="">Name</label>
                  <div class="relative">
                    <input className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline" id="username" type="text" placeholder="First Name"/>
                    <div className="absolute left-0 inset-y-0 flex items-center">
                      <img className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500" src={User} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                <label htmlFor="">Phone</label>
                <div class="relative">
                  <input className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline" id="username" type="text" placeholder="Phone Number"/>
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <img className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500" src={Phone} alt="" />
                  </div>
                </div>
                </div>
                <div>
                  <label htmlFor="">Quantity</label>
                  <input className=" border-2 pl-5 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2  text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline" id="username" type="text" placeholder="The Number"/>
                </div>
                <div>
                  <label htmlFor="">Brand</label>
                  <input className=" border-2 pl-5 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2  text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline" id="username" type="text" placeholder="Brand Name "/>
                </div>
                <div>
                  <label htmlFor="">Address</label>
                  <input className=" border-2 pl-5 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2  text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline" id="username" type="text" placeholder="Adress..."/>
                </div>
                </div>
                <button className=" mt-6 bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Dispatch</button>
            </div>
          </div>
        ) : null}

          {/* Modal end */}
        </table>
        </div>
        <section className='flex max-md:block justify-between'>
          <div>
            <div className='text-center'>
              <h2 className='text-3xl text-blue-500'>Lorem ipsum dolor sit amet.</h2>
              <h4 className='text-sm'>Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div className='mt-7 text-md max-md:flex'>
              <div>
                <h3 className='flex gap-2 items-center'><img className='w-3 ' src={Chec} alt="" />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, magnam.</h3>
                <h3 className='flex gap-2 items-center'><img className='w-3 ' src={Chec} alt="" />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti.</h3>
                <h3 className='flex gap-2 items-center'><img className='w-3 ' src={Chec} alt="" />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, magnam.</h3>
              </div>
              <div>
                <h3 className='flex gap-2 items-center'><img className='w-3' src={Chec} alt="" />Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                <h3 className='flex gap-2 items-center'><img className='w-3' src={Chec} alt="" />Lorem ipsum dolor sit, amet.</h3>
                <h3 className='flex gap-2 items-center'><img className='w-3' src={Chec} alt="" />Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>            
              </div>
            </div>
          </div>
          <div>
            <img src={Truba} alt="" />
          </div>
        </section>
        <section className='my-7 gap-4 flex max-md:block  justify-between'>
          <div className='sm:mb-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta cupiditate minus, in distinctio voluptatem esse fuga doloremque sit quidem provident veniam sunt iure a eius quis vel nisi atque magni necessitatibus! Porro, id. Labore maxime, nisi temporibus, unde eaque nam ex facere in quam ullam distinctio ea odit vel?
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, tempore porro. Eos rem dolorum adipisci, accusantium deserunt ab assumenda consequatur. Fugiat delectus rem sequi nulla debitis accusantium voluptatum voluptatibus consequuntur?</p>
          </div>

        </section>
      </div>
      <div className='text-2xl max-md:text-base lg:w-1/3'>
          <div className='mt-10'>
            <h3 className='flex  items-center gap-3 border-t-4 p-3'><img className='flex h-5' src={Tag} alt="" />Heat and sound insulation</h3>
            <h3 className='flex  items-center gap-3 border-t-4 p-3'><img className='flex h-5' src={Tag} alt="" />Hydro-, steam-, wind insulation</h3>
            <h3 className='flex  items-center gap-3 border-t-4 p-3'><img className='flex h-5' src={Tag} alt="" />Pipe insulation</h3>
            <h3 className='flex  items-center gap-3 border-t-4 p-3'><img className='flex h-5' src={Tag} alt="" />Heat-insulating harness</h3>
            <h3 className='flex  items-center gap-3 border-t-4 p-3'><img className='flex h-5' src={Tag} alt="" />Accessories</h3>
            <h3 className='flex  items-center gap-3 border-t-4 p-3'><img className='flex h-5' src={Tag} alt="" /></h3>
          </div>
          <div className='mt-10'>
            <h2 className='text-2xl text-center mb-2'>NEW Damper tape</h2>
            <h3 className='flex text-3xl text-gray-400 items-end gap-3 border-t-4 p-3'>PRICE LISTS</h3>
            <div>
              <h3 className='flex items-center border-t-4 p-3'><img className='flex h-5' src={Doc} alt="" />Heat and sound insulation</h3>
              <h3 className='flex items-center border-t-4 p-3'><img className='flex h-5' src={Doc} alt="" />Hydro-vapor insulation</h3>
              <h3 className='flex items-center border-t-4 p-3'><img className='flex h-5' src={Doc} alt="" />Tourniquet</h3>
              <h3 className='flex items-center border-t-4 p-3'><img className='flex h-5' src={Doc} alt="" />Pipe insulation</h3>
              <h3 className='flex items-center border-t-4 p-3'><img className='flex h-5' src={Doc} alt="" />Scotch tape and foil polyfoam</h3>

            </div>
          </div>
          <div className='flex justify-center mt-7'>
            <img className='items-center' src={Ser} alt="" />
          </div>
      </div>
      {/* <div>
            {records.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
              </tr>
            ))}
          </div> */}
    </main>
  )
}