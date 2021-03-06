import React from 'react'

const ProjectDetails = (props) => {
  console.log(props);
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title - {id}
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facere soluta molestias itaque similique in sequi ipsa veniam eligendi, vero asperiores quia quibusdam consectetur laboriosam illum. In distinctio harum doloremque.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div className="">
            Posted by Anton
          </div>
          <div>
            Date: Today
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
