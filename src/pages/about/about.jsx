import React from 'react';
import Building from "../../assets/image/building.jpg";
// import Food from "../../assets/image/food.jpeg";
// import Ofis from "../../assets/image/ofis.jpg";
// import Kurs from "../../assets/image/kurs.jpeg";

export const About = () => {


  return (
    <div className='mt-7'>
      <section className='flex justify-between mx-7' >
        <div className='w-2/5'>
          <img className='w-5/6 h-5/6' src={Building} alt="" />
        </div>
        <div className='w-3/5'>
          <h1 className='text-4xl font-bold mb-7'>About Us</h1>
        <p className='w-full'>We at <span className='font-bold'>Isoflex Kft</span>. have manufactured a variety of pipe insulation and pipe 
          shell types since 1997, and the continuous expansion of our product range have 
          made us one of the three largest insulated pipe support manufacturers in Europe.
          Our engineering insulation materials gradually reached every point in Hungary 
          and spread to an increasing number of markets in Europe. Our products comply with
          both European and American standards for insulation materials, and stocks from our 
          manufacturing units are kept continuously high to ensure fast service for customers. 
          We are proud that, in spite of the dynamic expansion of production, we retain the 
          capacity to manufacture individual insulation material to order, enabling us to 
          satisfy extreme or especially complex customer requirements.     <br />                                                                                                         
           <br />Our main insulating materials are polyurethane, rubber, polyethylene and, more 
          recently, rock wool, and our shells and pipe support linings have long been complemented by different insulation tapes.</p>
        </div>
      </section>
    </div>
  );
};
