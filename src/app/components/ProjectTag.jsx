import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {

    const buttonStyles = isSelected
      ? "text-white border-purple-500 "
      : "text=[#adb7be] border-slate-500 hover:text-purple-500 transition-all duration-500 ease-in-out hover:border-white"; ;

  return (
    <div>
      <button className={`${buttonStyles} rounded-full border-2 border-purple-500 px-6 py-1 text-xl cursor-pointer`} onClick={() => onClick(name)}>
        {name}
      </button>
    </div>
  );
}

export default ProjectTag