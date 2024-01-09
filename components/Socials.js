
import Link from 'next/link';
import {
  RiLinkedinLine,
  RiBehanceLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
} from 'react-icons/ri'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg  '>
    <Link href={'https://www.linkedin.com/in/syed-hamza-718642216/'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href={'https://www.behance.net/apexifyapps'} className='hover:text-accent transition-all duration-300'>
      <RiBehanceLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiFacebookBoxLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.youtube.com/channel/UCZmt-Rhek-1MB8GwBrmLeuQ'} className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
    </Link>
  </div>;
};

export default Socials;
