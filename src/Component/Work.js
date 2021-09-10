import React from 'react'
import foodCommerce from '../img/foodcommerce.png';
import prettygal from '../img/pretty-gal.png';
import fitness from '../img/fitness.png'
import journalist from '../img/jurnalist.png'
import FoodBlog from '../img/Food-Blog.png'
import kallas from '../img/kallas.png'
import { useHistory } from 'react-router';
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
import './Scss/Work.scss'
const img = 'https://cdn.pixabay.com/photo/2017/07/12/08/35/network-2496193__340.jpg'
const img2 = 'https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265046__340.jpg'
const img3 = 'https://cdn.pixabay.com/photo/2017/09/05/10/08/office-2717014__340.jpg'



const Work = () => {
    const location = useHistory();
    return (
        <>
            <div className="work-container section-container">
                <div className="work">
                    <div className="about-header">
                        <h3 className="title">Work</h3>                    
                    </div>
                    <div className="main-projects">
                        <div className="project-item">
                            <h3 className="h3">1. Kalles</h3>
                            <div className="img-container">
                                <img src={kallas} alt="kallas" />
                                <div className="project-content">
                                    <p>This is a e-commerce site i develope. I create this site use react.js and also fetch data from <a href="https://fakestoreapi.com/products">www.fakestoreapi.com</a>. In this site special feature is search product, add and deleting from cart, from validation etc.</p>
                                    <div className="tools">
                                        <span>React.js</span>
                                        <span>scss</span>
                                        <span>fakestoreapi API</span>
                                    </div>
                                    <div className="links">
                                        <a target='_blink' href='https://github.com/NO-Alim/Kalle_s.git'><FaGithub /></a>
                                        <a target='_blink' href='https://affectionate-borg-346268.netlify.app/'><FaExternalLinkAlt /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-item">
                            <h3 className="h3">2. FoodCommerce</h3>
                            <div className="img-container">
                                <img src={foodCommerce} alt="foodcommerce" />
                                <div className="project-content">
                                    <p>This is a e-commerce site i develope. I create this site use react.js and also fetch data from <a href="https://www.thecocktaildb.com/">www.thecocktaildb.com</a>. In this site special feature is search product, add and deleting from cart, from validation etc.</p>
                                    <div className="tools">
                                        <span>React.js</span>
                                        <span>scss</span>
                                        <span>TheCocktailDB API</span>
                                    </div>
                                    <div className="links">
                                    <a target='_blink' href='https://github.com/NO-Alim/Food-commerce.git'><FaGithub /></a>
                                    <a target='_blink' href='https://food-commerce.netlify.app/'><FaExternalLinkAlt /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-item">
                            <h3 className="h3">3. Pretty-gal</h3>
                            <div className="img-container">
                                <img src={prettygal} alt="prettygal" />
                                <div className="project-content">
                                    <p>This is a e-commerce site i develope. I create this site use react.js. In this site special feature is search product, add and deleting from cart, product filter etc.</p>
                                    <div className="tools">
                                        <span>React.js</span>
                                        <span>scss</span>
                                    </div>
                                    <div className="links">
                                    <a target='_blink' href='https://github.com/NO-Alim/pretty-gal.git'><FaGithub /></a>
                                    <a target='_blink' href='https://prettygal.netlify.app/'><FaExternalLinkAlt /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-projects">
                    <h3 className="h3">Here few more projects.</h3>
                    <div className="projects-container">
                        <div className="project-cont-one project">
                            <div className="img-container">
                                <div className="img">
                                    <img src={fitness} alt="img"/>
                                    <div className="link-container">
                                        <a target='_blink' href='https://github.com/NO-Alim/Fitness-couch.git'><FaGithub /></a>
                                        <a target='_blink' href='https://fitnesscouch.netlify.app/bookOnline'><FaExternalLinkAlt /></a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="project-cont-two project">
                            <div className="img-container">
                                <div className="img">
                                    <img src={fitness} alt="img"/>
                                    <div className="link-container">
                                        <a target='_blink' href='https://github.com/NO-Alim/Fitness-couch.git'><FaGithub /></a>
                                        <a target='_blink' href='https://fitnesscouch.netlify.app/bookOnline'><FaExternalLinkAlt /></a>
                                    </div>
                                </div> 
                            </div>
                            <div className="img-container">
                                <div className="img">
                                    <img src={img3} alt="img"/>
                                    <div className="link-container">
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaGithub /></a>
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaExternalLinkAlt /></a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="project-cont-three project">
                            <div className="img-container"><div className="img">
                                <img src={img} alt="img"/>
                                <div className="link-container">
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaGithub /></a>
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaExternalLinkAlt /></a>
                                    </div>
                                </div> </div>
                            <div className="img-container"><div className="img">
                                <img src={img2} alt="img"/>
                                <div className="link-container">
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaGithub /></a>
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaExternalLinkAlt /></a>
                                    </div>
                                </div> </div>
                            <div className="img-container"><div className="img">
                                <img src={journalist} alt="img"/>
                                <div className="link-container">
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaGithub /></a>
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaExternalLinkAlt /></a>
                                    </div>
                                </div> </div>
                        </div>
                        <div className="project-cont-four project">
                            <div className="img-container">
                                <div className="img">
                                    <img src={journalist} alt="img"/>
                                    <div className="link-container">
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaGithub /></a>
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaExternalLinkAlt /></a>
                                    </div>
                                </div> 
                            </div>
                            <div className="img-container">
                                <div className="img">
                                    <img src={img3} alt="img"/>
                                    <div className="link-container">
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaGithub /></a>
                                        <a target='_blink' href='https://journalistportfolio.netlify.app'><FaExternalLinkAlt /></a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="project-cont-five project">
                            <div className="img-container">
                                <div className="img">
                                    <img src={FoodBlog} alt="img"/>
                                    <div className="link-container">
                                        <a target='_blink' href='https://github.com/NO-Alim/react-pro-one.git'><FaGithub /></a>
                                        <a target='_blink' href='https://food-bloger.netlify.app/'><FaExternalLinkAlt /></a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work
