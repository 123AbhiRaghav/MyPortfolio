import { projects } from "../data";

const Works = () => {
  return (
    <div className='w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
      <h4 className='text-3xl font-bold text-black dark:text-white mt-10 '>
        Projects
      </h4>

      <div className='flex flex-wrap gap-10 lg:gap-20 justify-center '>
        {projects.map((p, index) => (
          <div
            key={index}
            className='w-[350px] h-[450px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md '
          >
            <img
              src={p.img}
              alt={p.name}
              className='w-full h-[250px] object-cover rounded-md '
            />

            <div className='w-full h-[200px] bg-white dark:bg-[#04133e] flex flex-col justify-between'>
              <div>
                <h4 className='text-2xl text-black dark:text-white font-semibold py-2 px-1 text-center'>
                  {p.title}
                </h4>
                <p className='text-sm text-orange-600 px-1 uppercase text-center'>
                  {p.cat}
                </p>
              </div>

              {/* View Project Button */}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2 text-blue-500 hover:text-red-500"
                >
                  View Project
                </a>
              )}

              {/* Two Additional Buttons for Frontend and Backend */}
              <div className="flex justify-between px-4 mt-2">
                {p.frontendUrl && (
                  <a
                    href={p.frontendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center py-2 text-blue-500 hover:text-red-500"
                  >
                    Frontend
                  </a>
                )}

                {p.backendUrl && (
                  <a
                    href={p.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center py-2 text-blue-500 hover:text-red-500"
                  >
                    Backend
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
