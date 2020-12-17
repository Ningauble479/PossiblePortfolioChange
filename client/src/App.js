import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js'
import { useSpring, animated } from 'react-spring'
import CenterBox from './Components/CenterBox'
import {useState} from 'react'
import Header from './Components/Header';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / -10 + 500}px,${y / -10 + 350}px,0)`
const trans2 = (x, y) => `translate3d(${x / -10 + 500}px,${y / -10 - 50}px,0)`
const trans3 = (x, y) => `translate3d(${x / -10 - 500}px,${y / -10 - 50}px,0)`
const trans4 = (x, y) => `translate3d(${x / -10 - 500}px,${y / -10 + 350}px,0)`
const trans5 = (x, y) => `translate3d(${x / -10 + 500}px,${y / -10 + 150}px,0)`
const trans6 = (x, y) => `translate3d(${x / -10 + 500}px,${y / -10 - 250}px,0)`
const trans7 = (x, y) => `translate3d(${x / -10 - 500}px,${y / -10 + 150}px,0)`
const trans8 = (x, y) => `translate3d(${x / -10 - 500}px,${y / -10 - 250}px,0)`
const trans9 = (x, y) => `translate3d(${x / -10 - 0}px,${y / -10 + 50}px,0)`


function App() {

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 100, tension: 0, friction: -10 } })) 
  const [showCenter, setShow] = useState(false)

  return (
    <div className="App" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Header/>
      <header className="App-header">
        <Particles src={logo} width='50vw' height='50vh' />
        <animated.div class={ showCenter === true ? "center-box-anim" : "center-box-hidden"} style={{ transform: props.xy.interpolate(trans9) }}>
          <CenterBox/>
        </animated.div>
        <animated.div class="move-card" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div class="move-card" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} style={{ transform: props.xy.interpolate(trans2) }} />
        <animated.div class="move-card" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} style={{ transform: props.xy.interpolate(trans3) }} />
        <animated.div class="move-card" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} style={{ transform: props.xy.interpolate(trans4) }} />
        <animated.div class="move-card" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} style={{ transform: props.xy.interpolate(trans5) }} />
        <animated.div class="move-card" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} style={{ transform: props.xy.interpolate(trans6) }} />
        <animated.div class="move-card" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} style={{ transform: props.xy.interpolate(trans7) }} />
        <animated.div class="move-card" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} style={{ transform: props.xy.interpolate(trans8) }} />
      </header>
    </div>
  );
}

export default App;
