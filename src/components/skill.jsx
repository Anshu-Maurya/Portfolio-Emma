import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-neutral-700"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-700">Skill</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Technologies I work with to bring ideas to life</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-neutral-600 rounded-2xl p-6 transform hover:-translate-y-2 transition duration-300">
                <div className="flex items-center mb-6">
                  <Icon className="w-12 h-12 text-purple-600 mr-6" />
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>

                <p className="text-gray-400 mb-4">{skill.description}</p>

                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tech) => (
                    <span key={tech} className="px-3 bg-neutral-500 py-1 rounded-full text-sm text-white">{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
