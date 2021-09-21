import React from 'react'
import {FaHtml5,FaCss3,FaSass,FaJsSquare,FaReact,FaCaretRight} from 'react-icons/fa'
import './Scss/About.scss'
import author from '../img/alim.jpg'
import {useSpring,animated} from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const About = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div>
            <div className="about-container section-container">
                <div className="about-header">
                    <h3 className="title">About Me</h3>                    
                </div>
                <div className="flex-container">
                    <div className="flex-item item-one">
                        <h5 className="h5">Hi, I'm Abdul Alim. I'm A Multi-Talented Human With Few Years Of Experiences In Front-End-Design.I Help Designers, Small Agencies And Businesses Bring Their Ideas To Life.</h5>
                        <p>I Spent The Last Four Years Working As A Front-End-Designer. I Acquired Project And Time Management Skills, As Well As The Ability To Communicate With Team Members And Clients While Effectively Meeting Milestones And Deadlines.I Have Worked On Multiple Of Responsive Web Design Projects Using (Photoshop, Illustrator) And Development (HTML, CSS, Scss, JS, React, Redux Etc.).</p>
                        <p>I Am Currently Working From Bangladesh. I Am Always Available To Discuss Your Project Over The Phone Or Via Whatsapp. These Days I Enjoy Spending My Free Time Photography, Traveling And Watching Movie.</p>
                        <p style={{color: '#fff', fontWeight: '400'}}>Here Are A Few Technologies I've Been Working With Recently :</p>
                        <div className="technology-list flex-container">
                            <div className="flex-item item-one">
                                <li><span><FaHtml5/></span> HTML5</li>
                                <li><span><FaCss3/></span> CSS</li>
                                <li><span><FaSass/></span> Scss</li>
                            </div>
                            <div className="flex-item item-two">
                                <li><span><FaJsSquare/></span> JavaScript (ES6+)</li>
                                <li><span><FaReact/></span> React js</li>
                                <li><span><FaCaretRight/></span> Material-UI</li>
                            </div>
                        </div>
                    </div>
                    <div className="flex-item item-two">
                        <div className="img-container">
                            <div className="img">
                                {/* <div className="img-content">
                                    <h3 className="h4"></h3>
                                    <div className="content">
                                        <h6>Front-end Developer</h6>
                                        <h6>Web Developer</h6>
                                        <h6>Photographer</h6>
                                        <h6>web Developer</h6>
                                    </div>
                                </div>
                                <img src={author} alt="alim" /> */}

                                <animated.div
                                className="img-card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans) }}
                                ><img src={author} alt="alim" /></animated.div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
