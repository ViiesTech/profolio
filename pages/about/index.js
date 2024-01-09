
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaWordpress,
  FaUnity

} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiReact,
  SiAdobeillustrator,
  SiUnity,
  SiFramer,
  SiAdobephotoshop,
  SiSocketdotio,
  SiSwift,
  SiAutodesk
} from "react-icons/si";




//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'React Native Developer',
        icons: [<FaReact />, <SiSwift />,],
      },
      {
        title: 'Nodejs Developer',
        icons: [<FaNodeJs />, <SiSocketdotio />],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: 'Game Development || 3ds max',
        icons: [<FaUnity />, <SiAutodesk />,],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobeillustrator />],
      },

    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Q-Technologies',
        stage: 'Feb 2022 - Dec 2022',
      },
      {
        title: 'Viis Tech',
        stage: 'Jan 2023 - Present',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Game Development - Omni academy &apos;',
        stage: '2021',
      },
      {
        title: 'Game Development - Sir Syed University',
        stage: '2021',
      },
      {
        title: 'React Native - self taught',
        stage: '2022',
      },
      {
        title: 'Data Structure And Algorithms - Udemey',
        stage: 'Learning',
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import React, { useState } from "react";

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import CountUp from "react-countup";

const About = () => {
  const [Index, setIndex] = useState(0)

  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/*avatar img */}
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute bottom+30 -left-[220px]"
    >
      <Avatar />
    </motion.div>

    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
        >Captivating <span className="text-accent">stories</span> birth magnificent design.</motion.h2>
        <motion.p
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6  xl:mb-12 px-2 xl:px-0">3 years ago,
          I began App development as a developer. Since then, I&apos;ve done work for agencies, consulted
          for startups, and collaborated on  digital products for bussiness and  consumer use.
        </motion.p>
        {/* counters */}
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"  >
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute 
            after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent ">
                <CountUp start={0} end={3} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
            </div>

            {/* Client */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute 
            after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent ">
                <CountUp start={0} end={70} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
            </div>


            {/* Projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:absolute 
            after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent ">
                <CountUp start={0} end={40} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
            </div>

          </div>
        </motion.div>
      </div>
      {
        /*info */
      }

      <motion.div
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {
            aboutData.map((item, itemIndex) => {
              console.log("aboutmap", itemIndex, ".....", Index)
              return (
                <React.Fragment key={itemIndex}>
                  <div key={itemIndex} className={`${Index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:du300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>
                    <div key={itemIndex}>{item.title}</div>
                  </div>
                </React.Fragment>
              )
            })

          }
        </div>

        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 
        items-center xl:items-start ">
          {
            aboutData[Index].info.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div key={itemIndex} className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div key={itemIndex} className="hidden md:flex">-</div>
                  <div key={itemIndex}>{item.stage}</div>

                  <div key={itemIndex} className="flex gap-x-4">
                    {/*icons */}
                    {item.icons?.map((icon, iconIndex) => (
                      <React.Fragment key={iconIndex}>

                        <div className="text-2xl text-white">{icon}</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            ))
          }

        </div>
      </motion.div>
    </div>

  </div>;
};

export default About;
