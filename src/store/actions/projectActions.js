export const createProject = (project) => {
  return (dispatch, getState) => {
    //make async call to datebase

    setTimeout(() => {
      alert('Hello')
    }, 2000)

    dispatch({
      type: 'CREATE_PROJECT',
      project: project
    });


  }
}