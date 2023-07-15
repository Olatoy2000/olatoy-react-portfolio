import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {

const [text] = useTypewriter({
  words: ["Frontend Developer", "Researcher", "Agriculturist"],
  loop: true,
  typeSpeed: 100,
  deleteSpeed: 50,
  delaySpeed: 2000,
})
  return (
    <section id="home" className='w-full h-[800px] py-20 flex border-b-[1px] border-b-black'>
      <article className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal uppercase'>welcome to my world</h4>
          <h1 className='text-6xl font-bold text-white'>
            Hi, I'm {" "} <span className='text-designColor capitalize'> Toyyib Oladejo </span>
          </h1>
          <h2 className='text-4xl font-bold text-white'>
            a <span className=''>{text}</span>
            <Cursor 
            
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor ="#ff014f"
            />
          </h2>
          <p>With a passion for solving problems with code. I began my career as a Frontend developer, specializing in creating user-friendly and visually appealing web interfaces. 
          Driven by my curiosity and passion for knowledge, I also expanded my horizons and pursued a career as a researcher by delving into the world of technology research, exploring emerging trends and innovative solutions.
          </p>
        </div>
        <div className='flex'>
          <div>
            <h2 className="">FIND ME IN</h2>
          </div>
        </div>
      </article>
      <article></article>
    </section>
  )
}

export default Banner
