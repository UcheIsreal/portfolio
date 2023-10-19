import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgURL, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className='h-52 md:h-72 rounded-t-xl relative group group-hover:flex hover:opacity-80 transition-all duration-500' style={{background: `url(${imgURL})`, backgroundSize: "cover"}}>
        <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0  '>
          <Link href={gitUrl} className='h-14 w-14 border-2 mr-2 relative rounded-full border-[#adb7be] hover:border-white '><CodeBracketIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:text-white ' />
          </Link>
          <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white '><EyeIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:text-white ' />
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl mb-4 bg-[#181818] py-6 px-4 '>
        <h5 className='text-xl font-semibold mb-2  '>{title}</h5>
        <p className='text-[#adb7be] '>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard