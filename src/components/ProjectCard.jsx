const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className="bg-neutral-500 rounded-2xl overflow-hidden hover:translate transition duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div>
          {tech.map((item, index) => (
            <span
              key={index}
              className="inline-block mr-2 mb-2 rounded-full bg-neutral-400/20 px-3 py-1 text-sm text-white"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href="#"
            className="py-2 px-3 flex-1  text-center rounded-lg bg-purple-700 font-medium hover:bg-purple-800 mt-2"
          >
            View Demo
          </a>

          <a
            href="#"
            className=" border-2 mt-2
                    border-purple-600 hover:bg-purple-700 py-2 px-3 font-medium text-center flex-1
                    trnasition
                     duration-500
                   rounded-lg"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
