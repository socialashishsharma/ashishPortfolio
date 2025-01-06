import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  id: string;
}

const projects = [
  {
    title: "Unifined",
    period: "2024-11-07 - Present",
    description: "Built a revolutionary new platform that allows you to upload your course materials and create interactive study sets. You can study with an AI tutor, create flashcards, generate notes, take practice tests, and more.",
    link: "https://funny-fairy-3777bc.netlify.app/"
  },
  {
    title: "POWER BI",
    period: "2024-06-04 - 2024-07-28",
    description: "Identified key factors to reduce attrition, improved the hiring process, and enhanced employee experience"
  },
  {
    title: "SQL",
    period: "2024-03-01 - 2024-04-10",
    description: "Music store data analysis to find which city has the best customer to throw a promotional music festival in the city"
  },
  {
    title: "PYTHON - EDA",
    period: "2024-02-28 - 2024-03-28",
    description: "Performed explanatory data Analysis using Pandas, Matplotlib and seaborn libraries. Improved sales by identifying most selling products which can help to plan inventory and hence meet the demands"
  }
];

export default function Projects({ id }: ProjectsProps) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-4">{project.period}</p>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}