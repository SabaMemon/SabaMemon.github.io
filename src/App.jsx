import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { getImageUrl } from './utils'


function App() {

  return (
  <>

    {/* navbar */}
    <nav className='nav'>
    <a className="title" href="/">
        Portfolio
      </a>
      <div className='menu'>
      <ul className='menuItems'>
        <li><a href="#skills" className='hover-underline-animation'>skills</a></li>
        <li><a href="#exp" className='hover-underline-animation'>experience</a></li>
        <li><a href="#proj" className='hover-underline-animation'>projects</a></li>
      </ul>
      </div>
    </nav>

    {/* homepage and socials */}
    <section className='container'>
      <div className='content'>
        <h1>Hi, I’m <span className='hover-underline-animation'>Saba.</span></h1>
        <p className='desc'>I recently graduated with a degree in Computer Science (BSc Hons.) from Toronto Metropolitan University. 
        <br />Check out some of the things I’ve done! Or, download my resume <a href="assets/Saba Memon Resume 2024.pdf" className='resume'><span>here.</span></a></p>
        {/* https://stackoverflow.com/questions/71582059/target-blank-url-not-working-in-react-js-production-build */}
          <p className='logo'><a href="https://github.com/SabaMemon" target="_blank" rel="noreferrer noopener"><img src={getImageUrl("socials/github.png")} id="github" alt="github-link"></img></a></p>
          <p className='logo'><a href="mailto:memonisaba@gmail.com"><img src={getImageUrl("socials/email.png")} id="email" alt="email-link"></img></a></p>   
          <p className='logo'><a href="https://www.linkedin.com/in/saba-memon/"><img src={getImageUrl("socials/linkedin.png")} id="linkedin" alt="linkedin-link"></img></a></p>
      </div>
      {/* <img src={getImageUrl("background.png")} id="sidebarimg" alt="sidebar-img"></img> */}
    </section>

    <div className='skills' id='skills'>
      <h2>skills</h2>
      <div className='skillIcons'>
        <img src={getImageUrl("skills/bash.png")} alt="" />
        <img src={getImageUrl("skills/c.svg")} alt="" />
        <img src={getImageUrl("skills/C_sharp.svg")} alt="" />
        <img src={getImageUrl("skills/java.svg")} alt="" />
        <img src={getImageUrl("skills/python.svg")} alt="" />
        <img src={getImageUrl("skills/html.svg")} alt="" />
        <img src={getImageUrl("skills/css.svg")} alt="" />
        <img src={getImageUrl("skills/javascript.svg")} alt="" />
        <img src={getImageUrl("skills/react.svg")} alt="" />
        <img src={getImageUrl("skills/node-js.svg")} alt="" />
        <img src={getImageUrl("skills/opengl.svg")} alt="" />
        <img src={getImageUrl("skills/unity.svg")} alt="" />
        <img src={getImageUrl("skills/sql.png")} alt="" />
        {/* <img src={getImageUrl("skills/vmware.png")} alt="" /> */}
      </div>

      <p className='desc'>And more. See resume and Github for comprehensive list.</p>
    </div>

    <div className='experience' id='exp'>
      <h2>experience</h2>
      <div className='e1'>
        <h3>Student Club Co-President | ArtSci</h3>
        <h4>Toronto, ON |  APR. 2021 – JUN. 2023</h4>
        <ul>
        <li>Conducted bi-weekly meetings in a team of 11 to plan club events and foster an inclusive and engaging environment among the Faculty of Science student body</li>
        <li>Organized and hosted 50+ events and contests to encourage exploration of creativity and artistic expression while practicing minfdulness </li>
      </ul>
      </div>

      <div className='e2'>
      <h3>Computer Science Director | Undergraduate Science Society of Toronto Metropolitan (USSTM)</h3>
      <h4>Toronto, ON |  JUN. 2021 – MAY. 2022</h4>
        <ul>
        <li>Attended bi-weekly Board of Director meetings to act as a liaison for USSTM and the Computer Science department</li>
        <li>Contributed to the External Committee to collaborate with the team to brainstorm, plan out, and execute event ideas that would interest the Faculty of Science student body</li>
      </ul>
      </div>

      <div className='e3'>
      <h3>Speaker | Technovation Girls 2023 (Toronto Chapter)</h3>
      <h4>Toronto, ON | APR. 2021 – JUN. 2023</h4>
        <ul>
        <li>Delivered a live 30-minute virtual presentation on the topic of Different Types of Blocks and Datasets</li>
        <li>Adapted a lesson plan to create two slide decks on teaching material</li>
      </ul>
      </div>

      <div className='e4'>
      <h3>Camp Counselor | STEM Camp</h3>
      <h4>Mississauga, ON | JUL. 2019 – AUG. 2021</h4>
        <ul>
        <li>Lead STEM-related group activities for 20-30 campers aged 5-13 with fellow counselors while maintaining a safe learning environment</li>
        <li>Designed and implemented weekly STEM activities, enhancing camper engagement and participation while ensuring punctual execution</li>
      </ul>
      </div>
      
    </div>

    <div className='projects' id='proj'>
    <h2>projects</h2>

    <div>
        <div className='projLink'>
          <span className='proj'>VR Lego Simulator <a href="https://github.com/SabaMemon/VRLegoSimulator" target="_blank" rel="noreferrer noopener"><img src={getImageUrl("projects/external.png")}></img></a></span>
        </div>
        <h4>Toronto, ON | FEB. 2023 – APR. 2023</h4>
      <ul>
        <li>Developed a VR Lego Simulator application using C# and Unity through collaborative pair programming sessions, delivering an immersive virtual environment for users to construct and interact with Lego models</li>
        <li>Designed and implemented intuitive user interfaces and interactions within the VR environment, enhancing user experience and accessibility</li>
        <li>Integrated realistic physics simulations into the application, faithfully replicating the behavior of Lego bricks, to enable users to experiment with diverse constructions effectively</li>
      </ul>
      <img src={getImageUrl("skills/C_sharp.svg")} className='projLang' />
      <img src={getImageUrl("skills/unity.svg")} className='projLang' />
    </div>

    <div>
      <div className='projLink'>
        <span className='proj'>3D Interactive Bot<a href="https://github.com/SabaMemon/3DBot" target="_blank" rel="noreferrer noopener"><img src={getImageUrl("projects/external.png")}></img></a></span>

      </div>
      <h4>Toronto, ON | OCT. 2022</h4>
      <ul>
        <li>Implemented a 3D bot using C programming language and OpenGL graphics library</li>
        <li>Integrated user interaction functionalities to control the bot's movements and interactions within the 3D environment</li>
        <li>Received a perfect grade of 100% for the project in Computer Graphics course, reflecting comprehensive understanding and mastery of computer graphics principles and programming techniques</li>
      </ul>
      <img src={getImageUrl("skills/c.svg")} className='projLang' />
      <img src={getImageUrl("skills/opengl.svg")} className='projLang' />
    </div>

    <div>
      <div className='projLink'>
       <span className='proj'>React and Node.js Tutorial Website<a href="https://cps530-saba.netlify.app/" target="_blank" rel="noreferrer noopener"><img src={getImageUrl("projects/external.png")}></img></a></span>
      </div>
      <h4>Toronto, ON | DEC. 2021</h4>
      <ul>
        <li>Developed a comprehensive tutorial website to summarize React and Node.js frameworks, emphasizing installation and practical usage</li>
        <li>Demonstrated proficiency by deploying a functional demo web page illustrating React and Node.js in action by displaying a list of movie characters</li>
        <li>Achieved a grade of 100% as Web Systems Development course term project, highlighting comprehensive understanding and application of web technologies and frameworks</li>
      </ul>
        <img src={getImageUrl("skills/html.svg")} className='projLang' />
        <img src={getImageUrl("skills/css.svg")} className='projLang' />
        <img src={getImageUrl("skills/javascript.svg")} className='projLang' />
        <img src={getImageUrl("skills/react.svg")} className='projLang' />
        <img src={getImageUrl("skills/node-js.svg")} className='projLang' />
    </div>

    </div>

    <footer>
      <h4>Created by Saba Memon</h4>
    </footer>

    </>
  )
}

export default App
