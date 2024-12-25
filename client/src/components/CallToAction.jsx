import { Button } from 'flowbite-react';
import img from "../images/framee.jpg";

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-red-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Learn More About Projects
            </h2>
            <p className='text-gray-500 my-2'>
                View My github projects
            </p>
            <Button  className='rounded-tl-xl bg-red-950  rounded-bl-none'>
                <a href="https://github.com/SudiptaHalder?tab=repositories" target='_blank' rel='noopener noreferrer'>
                    Click Here
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={img} />
        </div>
    </div>
  )
}