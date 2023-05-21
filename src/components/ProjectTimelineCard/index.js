import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="image" />
      <div className="content-middle">
        <h1 className="head">{projectTitle}</h1>
        <div>
          <AiFillCalendar className="calendar" />
          <p className="describe">{duration}</p>
        </div>
        <p className="description">{description}</p>
        <a href={projectUrl} className="anchorElement">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
