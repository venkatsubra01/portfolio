import React, { useState } from 'react'
import pattern_image from '../../assets/pattern_image.png'
import myexperience_data from '../../assets/myexperience_data.js'
import arrow_icon from '../../assets/arrow_icon.png'
import './Experience.css'

const Experience = () => {
  const [experience_category, setExperienceCategory] = useState("all");
  const handleExperienceCategory = (value) => {
    setExperienceCategory(value);
  }
  const [numShowing, setNumShowing] = useState(4);
  const [numAvailable, setNumAvailable] = useState(0);
  return (
    <div id='experience' className='experience-section'>
        <div className="experience-title">
            <h1>My Experience</h1>
            <img src={pattern_image} alt=""></img>
        </div>
        <div>
            <div className="experience-categories">
                <div className="column" onClick={()=>handleExperienceCategory("all")}>
                    <h6>All</h6>
                </div>
                <div className="column" onClick={()=>handleExperienceCategory("software-development")}>
                    <h6>Software Development</h6>
                </div>
                <div className="column" onClick={()=>handleExperienceCategory("research")}>
                    <h6>Research</h6>
                </div>
                <div className="column" onClick={()=>handleExperienceCategory("other")}>
                    <h6>Other</h6>
                </div>
            </div>
        </div>
        <div className="experiences">
            {myexperience_data
                .filter(experience => 
                    experience_category === "all" || 
                    experience.category.includes(experience_category)
                ).splice(0, numShowing)
                .map((experience, index) => (
                    <div key={index} className="experience-group">
                        <div className="experience-head">
                            <div className="column">
                                <img className='company-image' src={experience.img}></img>
                            </div>
                            <div className="column">
                                <h4>{experience.name}</h4>
                                <p>{experience.title}</p>
                                <p>{experience.dates}</p>
                            </div>
                        </div>
                        <div className="experience-body">
                            <ul>
                                {experience.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="experience-tags">
                            <ul>
                                {experience.tags.map(([text, color], i) => (
                                    <li key={i} style={{color: color}}>{text}</li> /* First element of tag is the color, and second element is the text*/
                                ))}
                            </ul>
                        </div>
                    

                </div>  
                ))}
            
        </div>
        <div className="show-buttons">
            <div onClick={()=>setNumShowing(Math.min(numShowing+4, 12))} className="myexperience-show">
                <p>Show More</p>
                <img src={arrow_icon} alt="" width="35px" height="35px"/>
            </div>
            {numShowing >= 8 && ( <div onClick={()=>setNumShowing(numShowing-4)} className="myexperience-show">
                <p>Show Less</p>
                <img src={arrow_icon} alt="" width="35px" height="35px"/>
            </div> )}
        </div>
        
    </div>
  )
}

export default Experience