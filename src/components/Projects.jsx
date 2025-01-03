import { VscGithubInverted } from "react-icons/vsc";
import mobilestore  from '../assets/Screenshot (83).png'
export default function Projects(){



    

    return( <section id='Project' className="flex flex-col py-20 px-5 text-white justify-center bg-gradient-to-b from-blue-400 "> 
    <div className="w-full">
    <div className="flex flex-col  px-15 py-5" > <h1 className="text-4xl font-bold border-b-4 w-[137px] border-[#2b2d77] text-black">Projects</h1></div>
    <p className='font-semibold text-black'>These are some the projects  that,i have build using JavaScript,Nodejs,Html,Css</p>
    <br/>
    </div>

    <div className = 'w-full  '>
<div className='flex flex-col md:flex-row px-15 gap-5'>



<div className='relative'> 
    <img  className='h-[220px] w-[500px]'  src="https://raw.githubusercontent.com/Mareena03/DeepFake/main/result%20upload.png"  />
    <div className='project-description'> 
    <p className='text-center py-5'><b>DeepReality <br></br> </b> <a href="https://github.com/Mareena03/DeepFake"><button className="  rounded-full w- px-2 py-2 "><VscGithubInverted size={25}/></button></a> <br></br> DeepReality is a web-based system for detecting deepfake videos. It uses deep learning techniques, specifically Convolutional Neural Networks (CNNs), to identify manipulated content. The project features a React-based frontend and a FastAPI backend.</p> </div>
</div>

<div  className='relative'>  
    <img className='h-[220px] w-[500px]'  src={mobilestore}/>
    <div className='project-description'> 
    <p className='text-center py-5'><b>Mobile Store <br></br> </b> <a href=""><button className="  rounded-full w- px-2 py-2 "><VscGithubInverted size={25}/></button></a> <br></br> A modern mobile store website built using HTML, CSS, and Bootstrap, featuring a responsive design with sleek product displays, user-friendly navigation, and visually appealing layouts for showcasing the latest smartphones and accessories.</p> </div>
</div>

<div  className='relative'>
    <img className='h-[220px] w-[500px]'  src="https://raw.githubusercontent.com/Vsnikhilmaheswar/Street-Fighting-Game/main/ezgif.com-video-to-gif-converter%20(1).gif"/>
    <div className='project-description'> 
    <p className='text-center py-5'><b>Street Fighting Game <br></br> </b>  <a href="https://github.com/Vsnikhilmaheswar/Street-Fighting-Game"><button className="  rounded-full w- px-2 py-2 "><VscGithubInverted size={25}/></button></a> <br></br>A simple, interactive street-fighting game built with JavaScript, CSS, and HTML, where players control Nikhil and Rahul. Each character has attack and heal options, and health points update dynamically with each action.</p> </div> 

</div>
   
</div>
    

    </div>
    </section>)
}