import React, { useState } from 'react'
import pattern_image from '../../assets/pattern_image.png'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.png'
import { motion } from "framer-motion"
import './MyWork.css'


const MyWork = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [numShowing, setNumShowing] = useState(4);
  const numAvailable = mywork_data.length;
  return (
    <div id='mywork' className='mywork'>
        <motion.div className="mywork-title" initial = {{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.7, ease: "easeOut" }}>
            <h1>My Latest Work</h1>
            <img src={pattern_image} alt=""></img>
        </motion.div>
        <div className="mywork-container">
            {mywork_data.slice(0, numShowing).map((work,index)=>(
                <motion.div key={index} className="mywork-item" initial = {{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.7, ease: "easeOut" }}>
                    <div className="container-top">
                        <img src={hoveredIndex === index ? work.w_gif : work.w_img} alt="" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}/>
                        
                    </div>
                    <div className="container-bottom">
                        <div className="project-name">
                            <p>{work.w_name}</p>
                        </div>
                        <div className="project-description">
                        <p dangerouslySetInnerHTML={{ __html: work.project_descr }}></p> {/* When the project description contains a link, that should be rendered */}
                        </div>
                        <div className="project-tags">
                            <ul>
                                {work.tags.map(([text, color], i) => (
                                    <li key={i} style={{color: color}}>{text}</li> /* First element of tag is the color, and second element is the text*/
                                ))}
                            </ul>
                        </div>
                        {work.further_details? (
                            <div className="further-details">
                                <a target="_blank" rel="noopener noreferrer" href={work.further_details}>Further Details</a>
                            </div>
                        ) : (
                            <div className="no-further-details">
                                <p>Contact for further details (code is proprietary)</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
            
        </div>
        <motion.div className="show-buttons" initial = {{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.7, ease: "easeOut" }}>
            {numShowing < numAvailable && (<div onClick={()=>setNumShowing(Math.min(numShowing+4, numAvailable))} className="mywork-show">
                <p>Show More</p>
                <img src={arrow_icon} alt="" width="35px" height="35px"/>
            </div> )}
            {numShowing >= 8 && ( <div onClick={()=>setNumShowing(Math.max(numShowing-4, 0))} className="mywork-show">
                <p>Show Less</p>
                <img src={arrow_icon} alt="" width="35px" height="35px"/>
            </div> )}
        </motion.div>
        
        
    </div>
  )
}

export default MyWork;