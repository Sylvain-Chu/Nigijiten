import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../../css/Animes/animes.css'

const MyComponents = {

    DatePicker: function DatePicker(props) {
        const urlImage = "url("
        return <div className='anime presentation' style={{ backgroundImage: `url(${props.image})` }}>
                    <a href="">
                        <div className='anime link'>
                            <div className='anime haut'>
                                <h2>{props.titre}</h2>
                            </div>
                            <div className='anime bas'>
                                <div className='anime gauche'>
                                    <p>Saison {props.saison} - Episodes {props.episode}</p>
                                </div>
                                <div className='anime droit'>
                                    <p>{props.langage}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>;
    }
  }

const datas = [
    {
        id: 1,
        image1: "/public/fondEcran.jpg",
        titre1: "Titre",
        saison1: "2",
        episode1: "12",
        langue1: "VOSTFR",

        image2: "/public/fondEcran.jpg",
        titre2: "Titre",
        saison2: "2",
        episode2: "12",
        langue2: "VOSTFR",

        image3: "/public/fondEcran.jpg",
        titre3: "Titre",
        saison3: "2",
        episode3: "12",
        langue3: "VOSTFR",

        image4: "/public/fondEcran.jpg",
        titre4: "Titre",
        saison4: "2",
        episode4: "12",
        langue4: "VOSTFR",
    }, {
        id: 1,
        image1: "/public/fondEcran.jpg",
        titre1: "Titre",
        saison1: "2",
        episode1: "12",
        langue1: "VOSTFR",

        image2: "/public/fondEcran.jpg",
        titre2: "Titre",
        saison2: "2",
        episode2: "12",
        langue2: "VOSTFR",

        image3: "/public/fondEcran.jpg",
        titre3: "Titre",
        saison3: "2",
        episode3: "12",
        langue3: "VOSTFR",

        image4: "/public/fondEcran.jpg",
        titre4: "Titre",
        saison4: "2",
        episode4: "12",
        langue4: "VOSTFR",
    }, {
        id: 1,
        image1: "/public/fondEcran.jpg",
        titre1: "Titre",
        saison1: "2",
        episode1: "12",
        langue1: "VOSTFR",

        image2: "/public/fondEcran.jpg",
        titre2: "Titre",
        saison2: "2",
        episode2: "12",
        langue2: "VOSTFR",

        image3: "/public/fondEcran.jpg",
        titre3: "Titre",
        saison3: "2",
        episode3: "12",
        langue3: "VOSTFR",

        image4: "/public/fondEcran.jpg",
        titre4: "Titre",
        saison4: "2",
        episode4: "12",
        langue4: "VOSTFR",
    }, 
]

const Slideshow = (props) => {
    return (
        <div className='body'>
            <div className='category contenaire'>
                <div className='category haut'>
                    <h2>{props.category}</h2>
                </div>
            </div>
            <div className="bar"></div>
            <Carousel showIndicators={false} showStatus={false} infiniteLoop={true} transitionTime={1000}>
                {datas.map((slide) => (
                    <div className='anime contenaire'>
                        <MyComponents.DatePicker titre={slide.titre1} saison={slide.saison1} episode={slide.episode1} langage={slide.langue1} image={slide.image1} />
                        <MyComponents.DatePicker titre={slide.titre2} saison={slide.saison2} episode={slide.episode2} langage={slide.langue2} image={slide.image2} />
                        <MyComponents.DatePicker titre={slide.titre3} saison={slide.saison3} episode={slide.episode3} langage={slide.langue3} image={slide.image3} />
                        <MyComponents.DatePicker titre={slide.titre4} saison={slide.saison4} episode={slide.episode4} langage={slide.langue4} image={slide.image4} />                        
                    </div>
                ))}
            </Carousel>
        </div> 
           
    );
}

export default Slideshow;