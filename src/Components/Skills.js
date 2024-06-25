import React from 'react'; 

// import { CgCPlusPlus } from "react-icons/cg";
// import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaCss3Alt  } from "react-icons/fa";
// import {DiNodejs, DiJavascript1} from "react-icons/di";
// import {SiExpress, SiMongodb, SiPostman, SiTailwindcss, SiVercel, SiFlask, SiFastapi, SiMysql, SiPostgresql   } from "react-icons/si";
// import { TbBrandJavascript } from "react-icons/tb";
// // import { RiTailwindCssFill } from "react-icons/ri";

// const Skills = ({skill}) => {
//     const icon = {
//         HTML5: <FaHtml5 color="#e85827"/>,
//         CSS3: <FaCss3Alt color="red"/>,
//         JavaScript: <TbBrandJavascript color="yellow"/>,
//         'C++': <CgCPlusPlus/>,
//         Postman: <SiPostman/>,
//         React: <FaReact/>,
//         Javascript: <DiJavascript1/>,
//         Node : <DiNodejs/>,
//         Express : <SiExpress/>,
//         MongoDb : <SiMongodb/>,
//         Git : <FaGitAlt/>,
//         Github : <FaGithub/>,
//         Flask: <SiFlask />,
//         FastAPI: <SiFastapi />,
//         MySQL: <SiMysql  />,
//         Postgres: <SiPostgresql  />,
//         Npm : <FaNpm/>,
//         Figma : <FaFigma/>,
//         Bootstrap: <FaBootstrap/>,
//         Vercel : <SiVercel/>
//     }
    
//   return (
    
//     <div title={skill} className='SkillBox'>
      
//       {icon[skill]}
//       <span className='SkillName'>{skill}</span>
//     </div>
//   )
// }

// export default Skills

const skills = [
  { name: 'HTML 5', icon: '/images/html5.png' },
  { name: 'CSS 3', icon: '/images/css3.png' },
  { name: 'JavaScript', icon: '/images/js.png' },
  { name: 'React.js', icon: '/images/react.png' },
  { name: 'Bootstrap 5', icon: '/images/bootstrap5.png' },
  { name: 'Figma', icon: '/images/figma.png' },
  { name: 'Git', icon: '/images/git.png' },
  { name: 'Express', icon: '/images/express.png' },
  { name: 'Flask', icon: '/images/flask.png' },
  { name: 'FastAPI', icon: '/images/fastapi.svg' },
  { name: 'MySQL', icon: '/images/mysql.png' },
  { name: 'Postgres', icon: '/images/postgres.png' },
];

const SkillSection = () => {
  return (
    <div className="skill-section">
      <h2 className="title">EXPERTISE</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
