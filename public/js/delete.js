const deleteProject = async (id) => {
    const url = '/api/projects/' + id;
    console.log(url);
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project.');
    }
  };

const buttons = document.getElementsByClassName("delete-btn");
  
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', (event) => {
        const projectId = event.target.getAttribute('id');
        deleteProject(projectId);
    })
}
  