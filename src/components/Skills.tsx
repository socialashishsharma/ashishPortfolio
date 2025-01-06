import { motion } from 'framer-motion';

interface SkillsProps {
  id: string;
}

const skills = [
  "POWER BI", "BUBBLE AI", "SQL", "MS OFFICE", "DATA DRIVEN DECISION MAKING",
  "DATA ANALYTICS", "JIRA", "PLM", "GTM STRATEGY", "STAKEHOLDER ALIGNMENT", "PYTHON"
];

export default function Skills({ id }: SkillsProps) {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Skills</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-gray-800 font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}