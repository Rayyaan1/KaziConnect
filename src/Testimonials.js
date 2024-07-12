import React, { useRef } from 'react'
import './Testimonials.css'


const Testimonials= () => {
        const slider = useRef();
        let tx = 0;


    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }  
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward = () =>{
        if(tx <  0){
            tx += 25;
        }  
        slider.current.style.transform = `translateX(${tx}%)`
           
    }


  return (
    <div className='testimonials'>
        <img src="/next-icon.png" alt=""  className='next-icon'onClick=
        {slideForward} />
        <img src="/back-icon.png" alt="" className='back-icon' onClick=
        {slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src="/person1.jfif" alt="" />
                            <div>
                                <h3>Kennedy M</h3>
                                <span>Pangani, Nairobi</span>
                            </div>
                        </div>
                    </div>
                    <p>KaziKonnect made finding a reliable plumber so easy!
                    I booked a service through their platform, and the professional arrived on time and did an excellent job.
                    It's my go-to site for any home service needs
                    </p>


                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src="/person2.jfif" alt="" />
                            <div>
                                <h3>Gabriel K</h3>
                                <span>Majengo, Mombasa</span>
                            </div>
                        </div>
                    </div>
                    <p>
                    As a busy mom, I love how KaziKonnect simplifies finding trustworthy service providers.
                     From lawn mowing to electrical work, I've used their platform multiple times and have always had a great experience.
                    
                    </p>


                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src="/person3.jpg" alt="" />
                            <div>
                                <h3>John Otieno</h3>
                                <span>Kisumu Dala</span>
                            </div>
                        </div>
                    </div>
                    <p>
                    KaziKonnect is a game-changer for small businesses like mine. I can reach more customers and get more jobs with their easy-to-use platform.
                     It's been a huge boost to my business!
                    
                    </p>


                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src="/person4.webp" alt="" />
                            <div>
                                <h3>Fatuma Ali</h3>
                                <span>Thika Town</span>
                            </div>
                        </div>
                    </div>
                    <p>KaziKonnect made finding a reliable plumber so easy!
                    I booked a service through their platform, and the professional arrived on time and did an excellent job.
                    It's my go-to site for any home service needs
                    </p>


                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials

