import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../../css/Animes/animes.css'


const datas = [
    {
        id: 1,
        image: "/public/fondEcran.jpg",
        titre: "Titre",
        tag: "Dramatique",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur iste sunt laborum, distinctio commodi, consequuntur laboriosam, nulla ipsam vitae repellat veritatis unde ad et praesentium deserunt! Tempora, odio a"
    }, {
        id: 2,
        image: "/public/fondEcran.jpg",
        titre: "Titre",
        tag: "Dramatique",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur iste sunt laborum, distinctio commodi, consequuntur laboriosam, nulla ipsam vitae repellat veritatis unde ad et praesentium deserunt! Tempora, odio a"
    }, {
        id: 3,
        image: "/public/fondEcran.jpg",
        titre: "Titre",
        tag: "Dramatique",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur iste sunt laborum, distinctio commodi, consequuntur laboriosam, nulla ipsam vitae repellat veritatis unde ad et praesentium deserunt! Tempora, odio a"
    }, {
        id: 4,
        image: "/public/fondEcran.jpg",
        titre: "Titre",
        tag: "Dramatique",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur iste sunt laborum, distinctio commodi, consequuntur laboriosam, nulla ipsam vitae repellat veritatis unde ad et praesentium deserunt! Tempora, odio a"
    }, {
        id: 5,
        image: "/public/fondEcran.jpg",
        titre: "Titre",
        tag: "Dramatique",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur iste sunt laborum, distinctio commodi, consequuntur laboriosam, nulla ipsam vitae repellat veritatis unde ad et praesentium deserunt! Tempora, odio Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur porro totam eligendi vitae perferendis, sequi aliquid! Enim, distinctio modi. Sit voluptate dolor optio consequuntur? Commodi praesentium nihil delectus quos."
    }, 
]

const Slideshow = () => {
    return (
        <div>
        <Carousel infiniteLoop={true} showStatus={false} autoPlay interval={5000}>
            {datas.map((slide) => (
                <div key={slide.id} className="header">
                    <div className='header centreGauche contenaire'>
                        <div className='header centreGauche petit contenaire'>
                            <div className='header centreGauche titre'>
                                <h2>{slide.titre}</h2>
                            </div>
                            <div className='header centreGauche description'>
                                <p>{slide.text}</p>
                            </div>
                            <div className='header centreGauche tag'>
                                <p>{slide.tag}</p>
                            </div>
                            <div className='header centreGauche addList'>
                                <a href="€" target="_blank">Ajouter à la liste</a>
                            </div>
                        </div>  
                    </div>
                    <div className='header centreDroite contenaire'>
                        <div className='header centreDroite petit contenaire'>
                            <div className='header centreDroite image'>
                                <img src={slide.image}  />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
        {/* <img src="/public/fondEcran.jpg" alt="" /> */}
        </div>
    );
}

export default Slideshow;