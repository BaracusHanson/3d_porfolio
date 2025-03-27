import { motion } from "framer-motion";
import React from "react";
import PropTypes from "prop-types";
// import { useContext } from "react";
// import { SectionContext } from "./SectionContext";
const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center  min-h-screen
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Interface = () => {
  // const { section, setSection } = useContext(SectionContext);
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <Section></Section>
      <Section></Section>

      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug text-[#426e4d]">
        Bonjour,
        <br />
        <span className="bg-white px-1 italic opacity-70 ">Guinier Junior</span>
      </h1>
      <motion.div
        className="text-xl text-gray-200 mt-4 w-xs"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Developpeur fullstack
        <br />
        <p className="italic text-gray-200 text-lg mt-4 w-md">
          Passionné par le développement, je crée des applications web
          performantes et évolutives en combinant expertise backend et frontend
          pour offrir des solutions complètes et intuitives.
        </p>
      </motion.div>
      <motion.button
        className={`bg-[#426e4d] text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Obtenir Mon CV
      </motion.button>
      {/* <h1 className="text-5xl text-red-500">0</h1> */}
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "Redux",
    level: 70,
  },
  {
    title: "React / React Native",
    level: 80,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Framer-motion",
    level: 60,
  },
  {
    title: "Tailwindcss",
    level: 70,
  },
  {
    title: "Blender",
    level: 60,
  },
  {
    title: "MongoDB",
    level: 60,
  },
  {
    title: "Mysql",
    level: 75,
  },
];
const languages = [
  {
    title: "🇫🇷 Français",
    level: 100,
  },
  {
    title: "🇺🇸 Englais",
    level: 80,
  },
  {
    title: "es Espagnol",
    level: 40,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl text-white font-bold">Competences</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-200"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-[#426e4d] rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl text-white font-bold mt-10">Langues</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-200"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-[#426e4d] rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl text-gray-100 font-bold">Contactez moi</h2>
      <div className="mt-8 p-8 rounded-md bg-gray-100 w-96 max-w-full ">
        <form>
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-[#426e4d] text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Soumettre
          </button>
        </form>
      </div>
    </Section>
  );
};
