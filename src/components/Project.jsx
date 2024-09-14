import { projectStats, tools } from "../data";

const Project = () => {
  return (
    <div>
      <div
        className='w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-10'
      >
        {projectStats.map((p, index) => (
          <div key={index}  className='flex flex-col gap-2 items-center px-4 py-3 bg-[#0000FF20] rounded-md hover:animate-bounce'>
            <p className='text-white text-2xl font-bold'>{p.value}</p>
            <p className='text-white text-sm'>{p.name}</p>
          </div>
        ))}
      </div>

      <div
        className='w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 mt-16'
      >
        {tools.map((t, index) => (
          <div key={index }  className='flex gap-2 items-center bg-white rounded-md shadow-lg px-5 py-1 hover:animate-bounce'>
            <img src={t.icon} className='w-10 h-10' />
            <p className=' text-black text-md'>{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;