import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {user, setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    user ? navigate('/result') : setShowLogin(true);
  }
  return (
    <motion.div className="flex justify-center items-center text-center flex-col my-20" initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.8}} className='text-center border rounded-full border-neutral-500 bg-white px-6 py-1 gap-2 inline-flex text-stone-500'>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:2}} className='text-4xl max-w-[300px] text-center mt-10 mx-auto sm:text-7xl sm:max-w-[590px]'>Turn text to <span className='text-blue-500'>image</span>, in seconds</motion.h1>
      <motion.p initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6,duration:0.8}} className='mt-5 text-center mx-auto max-w-xl'>Unleash your creativity with AI. Turn your imagination into visual art in seconds. Just tyoe and watch the magic unfold.</motion.p>
      <motion.button onClick={onClickHandler} whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}} className='mt-8 px-12 text-white bg-black rounded-full flex items-center gap-2 w-auto py-2.5 cursor-pointer'>
        Generate images 
        <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1,duration:1}} className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item,index)=> (
          <motion.img whileHover={{scale:1.05, duration:0.1}} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index%2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" key={index} width={70} />
        ))}
      </motion.div>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2, duration:0.8}} className='mt-2 text-neutral-600'>Generated images from Imagen</motion.p>
    </motion.div>
  )
}

export default Header
