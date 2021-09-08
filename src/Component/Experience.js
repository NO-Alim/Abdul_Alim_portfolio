import React,{useState} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import './Scss/Experience.scss'


const fakeJobs = [
    {
        "id": 1,
        "marketplace": 'upwork',
        "dates": "December 2019 - TODAY",
        "work": "Currently I Am Working As A Front-End-Designer, Which Is Where My Passion For Design And Development Converge.",
        "responsibility": "Front-End Engineer"
    },
    {
        "id": 2,
        "marketplace": 'freelance',
        "dates": "December 2017 - December 2019",
        "work": "I Start Learning Web Design From 2017. I’ve Spent Many Years Trying To Perfect What I Do And While I’ll Never Be Perfect, I Do My Best To Come Close.",
        "responsibility": "junior Engineering"
    },
    {
        "id": 3,
        "marketplace": 'xyz',
        "dates": "December 2017 - December 2019",
        "work": "I Start Learning Web Design From 2017. I’ve Spent Many Years Trying To Perfect What I Do And While I’ll Never Be Perfect, I Do My Best To Come Close.",
        "responsibility": "Engineering Intern"
    }

]

const Experience = () => {
    const [jobs, setJobs] = useState(fakeJobs);
    const [value, setValue] = useState(0);

    const {id,marketplace,dates,work,responsibility} = jobs[value]
    return (
        <div>
            <div className="experience-container section-container">
                <div className="experience">
                    <div className="experience-header">
                        <h3 className="title">Experience</h3>                    
                    </div>
                    <div className="experience-content">
                        <div className="tab-container">
                            {jobs.map((item, ind) => {
                                return(
                                    <button key={ind} onClick={() => setValue(ind)} className={`job-btn ${ind === value && 'active'}`}>{item.marketplace}</button>
                                )
                            })}
                        </div>
                        <article className="job-description">
                            <h3 className="h3">{responsibility}</h3>
                            <h5 className="h5">{marketplace}</h5>
                            <p className="date">{dates}</p>
                            <p className="exp-work"><span><FaAngleDoubleRight /> </span>{work}</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
