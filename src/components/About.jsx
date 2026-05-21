import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="About"
      className="py-20 bg-neutral-800"
    >
      <div className="container mx-0 px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About
          <span className="text-purple-900">Me</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          This the paragraph and I don't know why there are pain in my hand and
          neck onece problem out then another comes ! .
        </p>

        {/* image and my journey */}

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              src={assets.profileImg}
              alt="Emma Watson"
              className="w-full h-auto object-cover rounded-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">My Journey</h2>

              <p className="text-gray-300 mb-8">
                dolor sit amet consectetur adipisicing elit. Assumenda quae
                delectus omnis est magnam deleniti. Reiciendis ipsa voluptas
                repellat hic!
              </p>

              <p className="text-gray-300 mb-12">
                dolor sit amet consectetur adipisicing elit. Rem delectus porro
                dignissimos sit iusto reprehenderit nesciunt quisquam totam!
              </p>

              {/* cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-neutral-600 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple-700 text-4xl mb-4">
                      {data.icon && <data.icon />}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{data.title}</h3>
                    <p className="text-gray-300 text-sm">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
