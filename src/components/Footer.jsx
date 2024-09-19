import { BsLinkedin, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className='hidden dark:block' />

      <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between '>
        <p className='text-lg text-white font-semibold '>
          Address: Chennappa Garden, Attibele, Bangalore - 562107
        </p>

        <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white '>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='flex flex-col gap-5 text-md text-white '>
          <p>abhiraghavd@gmail.com</p>
          <p>+91 7204601510</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center pb-20 '>
        <p className='text-white font-semibold tracking-wider'>Social Media</p>

        <div className='flex gap-10 text-white text-2xl mb-10 hover:animate-bounce'>
          <BsLinkedin className='hover:scale-110' />
          <BsYoutube  className="hover: scale-110" />
          <BsWhatsapp className="hover:scale-110" />

        </div>

        <p className='text-gray-400 text-md tracking-wider'>@2024 Abhishek</p>
      </div>
    </footer>
  );
};

export default Footer;