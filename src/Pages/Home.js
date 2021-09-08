import React from 'react'
import './Scss/Home.scss'
import { useSpring, animated } from 'react-spring'
import Contact from '../Component/Contact'
import Work from '../Component/Work'
import Experience from '../Component/Experience'
import About from '../Component/About'
import Header from '../Component/Header'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Home = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

    return (
        <div className="home" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <Header />
            <About />
            <Experience />
            <Work />
            <Contact />
            <animated.div className="header-bg-one" style={{ transform: props.xy.interpolate(trans1) }}/>
            <animated.div className="header-bg-two bg-fixed" style={{ transform: props.xy.interpolate(trans2) }}/>
            <animated.div className="header-bg-three bg-fixed" style={{ transform: props.xy.interpolate(trans3) }}/>
            <animated.div className="header-bg-four bg-fixed" style={{ transform: props.xy.interpolate(trans4) }}/>
            <animated.div className="header-bg-five bg-fixed" style={{ transform: props.xy.interpolate(trans2) }}/>
            <animated.div className="header-bg-six bg-fixed" style={{ transform: props.xy.interpolate(trans1) }}/>
            <animated.div className="header-bg-seven bg-fixed" style={{ transform: props.xy.interpolate(trans4) }}/>
            <animated.div className="header-bg-eight bg-fixed" style={{ transform: props.xy.interpolate(trans2) }}/>
        </div>
    )
}

export default Home
