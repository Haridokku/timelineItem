import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineView = props => {
  const {itemDetails} = props
  const {courseTitle, description, duration, tagsList} = itemDetails
  return (
    <>
      <div className="header-container">
        <h1 className="heading">{courseTitle}</h1>
        <div>
          <AiFillClockCircle className="circle" />
          <p className="duration">{duration}</p>
        </div>
        <p className="describe">{description}</p>
        <ul className="listContainer">
          {tagsList.map(each => (
            <li key={each.id} className="list-item">
              {each.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CourseTimeLineView
