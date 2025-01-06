import { motion } from 'framer-motion';

interface AboutProps {
  id: string;
}

export default function About({ id }: AboutProps) {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Demonstrates strong analytical, communication, and teamwork skills, with proven ability to quickly adapt to new environments. 
            Eager to contribute to team success and further develop professional skills. 
            Brings positive attitude and commitment to continuous learning and growth. 
            Creative approach of solving and handling new concepts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}