import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const sections = ["Skills", "Projects", "Achievements", "Contact"];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section
    id={title.toLowerCase()}
    className="min-h-screen p-6 md:p-12 flex flex-col justify-center items-center text-green-400"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl font-bold mb-6 border-b-2 border-green-400 pb-2">
      {title}
    </h2>
    <div className="w-full max-w-4xl">{children}</div>
  </motion.section>
);

const App = () => {
  return (
    <main className="bg-black text-green-300 font-mono cursor-default">
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-green-500 hover:shadow-green-400 transition duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-5xl mt-6 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hello, I'm [Your Name]
        </motion.h1>
        <p className="text-lg text-green-200 mb-4">Web Developer | Designer | Creator</p>
        <div className="flex gap-4">
          <a href="https://github.com/" className="hover:text-green-500 transition">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com" className="hover:text-green-500 transition">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:you@example.com" className="hover:text-green-500 transition">
            <FaEnvelope size={28} />
          </a>
        </div>
      </header>

      {sections.map((section) => (
        <Section title={section} key={section}>
          <Card className="bg-gray-900 border border-green-500 hover:border-green-300 transition-all duration-300 shadow-md hover:shadow-green-400">
            <CardContent className="p-6">
              <p className="text-green-200">
                {/* Add actual content here for {section} */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </CardContent>
          </Card>
        </Section>
      ))}

      <footer className="text-center py-6 border-t border-green-800 text-green-500">
        © 2025 [Your Name]. All rights reserved.
      </footer>
    </main>
  );
};

export default App;
