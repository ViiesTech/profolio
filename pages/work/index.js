
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//former motions

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'







const Work = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8 '>
        {/*text*/}
        <div className='text-center flex xl:w-[30w] flex-col lg:text-left mb-4 xl:mb-0 '>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 xl:mt-12'>
            My Work
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='mb-4 max-w-[400px] mx-auto'>lorem20 djsandjas njdsan jasnn jndjasn djasn djasnj dnajsnd ajsn</motion.p>
        </div>
        <motion.div
          variants={fadeIn('down', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='w-full xl:max-w-[65%]:'>
          {/*Slider*/}
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Work;
