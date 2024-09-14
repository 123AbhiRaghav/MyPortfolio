import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6"
import Profile from "../asset/profile.png"
import { FaUserAlt } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { MdWifiCalling2 } from "react-icons/md"
import { FaFileAlt } from "react-icons/fa"

const About = () => {
  return (
    <div  className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20 '>
      <div className='w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md'>
        <img src={Profile} className='h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125' />
      </div>

      <div className='w-full flex flex-col'>
        <p className='text-3xl font-bold text-black dark:text-white'>
         About Me
        </p>
        <p className='text-lg text-black dark:text-gray-400 leading-10'>
          Full-Stack Web Developer with ability to learn and collaborate in
          rapidly changing environments and compositions. Worked through hours
          of bootcamp structure, learning HTML, CSS  JavaScript, SQL Database, Bootstrap,
           NodeJs, ReactJs. Eager to tackle web development/design challenges to
          achieve lasting impacts on user experience.
        </p>

        <div className='mt-5 2xl:mt-10 flex flex-wrap gap-5'>
          <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FaUserAlt size={15}/> Abhishek Raghav D
          </p>
          <a href="mailto:abhiraghavd@gmail.com" target="_blank" className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
            <FiMail size={14} /> abhiraghavd@gmail.com
          </a>
          <a href="tel:+1234567890" className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
          <MdWifiCalling2 size={18} /> +91 7204601510
          </a> 
          <a href="https://www.linkedin.com/in/abhishek-raghav-d-8a1a2a308/" target="_blank" className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
          <FaLinkedin size={14} />  Linkdin
          </a>
          <a href="https://github.com/123AbhiRaghav" target="_blank" className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
           <FaGithub size={14}/> Github
          </a>
          <a href="https://wa.me/7204601510" target="_blank" className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer">
           <FaWhatsapp size={14}/> WhatsApp
          </a>
          <a href="https://drive.google.com/file/d/1ish3_OXtGcgc_bksIQwcdCUS5diqEj7F/view?usp=drive_link"
            className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer"
            target="_blank"
           >
          <FaFileAlt size={14}/> Resume URL
           </a>
        </div>
      </div>
    </div>
  )
}

export default About
