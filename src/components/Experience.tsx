import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  id: string;
}

const experiences = [
  {
    title: "Digital Product Manager",
    company: "Genme",
    location: "UAE",
    period: "2023-09-04 - 2024-05-28",
    description: [
      "Designed and launched a user-friendly web platform connecting suppliers and buyers",
      "Built strategic partnerships with retailers, securing purchasing orders",
      "Developed and implemented innovative engagement strategies",
      "Analyzed customer behavior to derive digital product performance insights"
    ]
  },
  {
    title: "Graduate Engineer Trainee",
    company: "Guardian Life Insurance Corporation",
    location: "Gurgaon",
    period: "2022-01-03 - 2022-05-27",
    description: []
  }
];

export default function Experience({ id }: ExperienceProps) {
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
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </motion.div>

        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
              date={exp.period}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Briefcase />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-2">
                {exp.company} - {exp.location}
              </h4>
              <ul className="mt-4 list-disc list-inside">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm">{desc}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}