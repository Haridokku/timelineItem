import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimeLineView extends Component {
  renderList = () => {
    const {timelineItemsList} = this.props
    const modifiedList = timelineItemsList.filter(
      item => item.categoryId === 'COURSE',
    )
    const updatedList = timelineItemsList.filter(
      item => item.categoryId === 'PROJECT',
    )
    return (
      <div className="main-Container">
        {modifiedList.map(list => (
          <CourseTimeLineCard key={list.id} courseDetails={list} />
        ))}
        {updatedList.map(each => (
          <ProjectTimelineCard key={each.id} projectDetails={each} />
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="chrono-container">
        <h1 className="head">MY JOURNEY OF CCBP 4.0</h1>
        <Chrono mode="VERTICAL" items={this.renderList()} />
      </div>
    )
  }
}

export default TimeLineView
