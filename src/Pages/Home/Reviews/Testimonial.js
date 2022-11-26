import React from 'react';
import quote from '../../../assets/quote.svg'
import img1 from '../../../assets/people1.png'
import img2 from '../../../assets/people2.png'
import img3 from '../../../assets/people3.png'
import Reviews from './Reviews'
const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name:'Sahin Alam',
            address:'Pathantula',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:img1
        },
        {
            _id:2,
            name:'Riya Akter',
            address:'BagBari',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:img2
        },
        {
            _id:3,
            name:'Ayesha Begum',
            address:'Modina Market',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:img3
        },
    ]
    return (
        <section className='my-16'>
        <div className='flex justify-between'>
            <div>
                <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                <h2 className='text-4xl'>What Our Users Says</h2>
            </div>
            <figure>
                <img className=' w-24 lg:w-48' src={quote} alt=""></img>
            </figure>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 '>
            {
                reviews.map(review=><Reviews
                    key={review._id}
                    review={review}
                ></Reviews>)
                
            }
        </div>
    </section>
    );
};

export default Testimonial;