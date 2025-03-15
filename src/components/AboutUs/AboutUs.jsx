import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className="w-full flex h-screen overflow-hidden">
        <div className="flex-1 md:p-15 p-5">
          <h1 className="text-4xl md:text-6xl font-semibold">Express the power of your ideas with Freepik</h1>
          <p className="mt-5 md:mt-10 text-xl md:text-2xl md:pr-20 pr-5">
            Founded in 2010, we’re the one-stop platform for all the cool solutions, content, and inspiration you need to express the power of your ideas.
          </p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row justify-between gap-0 md:p-0 p-5">
          <img
            src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full md:w-55 md:rounded-t-full h-50 md:h-50 mt-5 md:mt-70"
          />

          <img
            src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full md:w-55 rounded-t-full h-50 md:h-90 mt-5 md:mt-30"
          />

          <img
            src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full md:w-100 rounded-t-full h-50 md:h-80 rotate-180 mt-5 md:mt-0"
          />
        </div>
      </div>

      <div className="w-full flex h-full md:flex-row flex-col md:p-10 gap-10 md:mt-0 mt-20" >
        <div className="flex-1 flex gap-0 md:p-0 p-5">
          <img
            src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full h-80"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold">Express the power of your ideas with Freepik</h1>
          <p className="mt-5 md:mt-10 text-lg md:pr-20 pr-5">
            Founded in 2010, we’re the one-stop platform for all the cool solutions, content, and inspiration you need to express the power of your ideas.
            Founded in 2010, we’re the one-stop platform for all the cool solutions, content, and inspiration you need to express the power of your ideas.
          </p>
        </div>

      </div>

      <div className="w-full h-full">
        <div className="pt-5 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">We say it straight</h2>
          <p className="px-5 md:px-20 mt-4 text-base md:text-lg text-gray-400 md:text-center">
            Yeah, that’s right. We talk to each other openly and honestly. Why? Because we care about working in an environment where everyone communicates directly and respectfully.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-15 px-18">
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-20 h-20 rounded-md"
            />
            <h2 className="mt-4 font-semibold text-xl">We walk and then we run</h2>
            <p className="mt-4 text-sm md:text-base">We like to take it one step at a time. We explore our playground, own it, and then expand it to meet new challenges. Each goal sets the stage for the next.</p>
          </div>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-20 h-20 rounded-md"
            />
            <h2 className="mt-4 font-semibold text-xl">We walk and then we run</h2>
            <p className="mt-4 text-sm md:text-base">We like to take it one step at a time. We explore our playground, own it, and then expand it to meet new challenges. Each goal sets the stage for the next.</p>
          </div>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-20 h-20 rounded-md"
            />
            <h2 className="mt-4 font-semibold text-xl">We walk and then we run</h2>
            <p className="mt-4 text-sm md:text-base">We like to take it one step at a time. We explore our playground, own it, and then expand it to meet new challenges. Each goal sets the stage for the next.</p>
          </div>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-20 h-20 rounded-md"
            />
            <h2 className="mt-4 font-semibold text-xl">We walk and then we run</h2>
            <p className="mt-4 text-sm md:text-base">We like to take it one step at a time. We explore our playground, own it, and then expand it to meet new challenges. Each goal sets the stage for the next.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AboutUs
