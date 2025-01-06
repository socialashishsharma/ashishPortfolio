import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  id: string;
}

const education = [
  {
    degree: "MBA",
    institution: "BITS PILANI",
    period: "2022-08-01 - 2024-05-31",
    location: "DUBAI",
    cgpa: "6.05"
  },
  {
    degree: "B.Tech",
    institution: "SRM UNIVERSITY",
    period: "2018-07-27 - 2022-05-31",
    location: "Chennai",
    cgpa: "8.05"
  }
];

export default function Education({ id }: EducationProps) {
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
          <h2 className="text-4xl font-bold">Education</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="bg-blue-500 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
                <p className="text-sm text-gray-500">{edu.location}</p>
                <p className="text-sm font-medium mt-2">CGPA: {edu.cgpa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}