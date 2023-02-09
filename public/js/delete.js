const deleteProject = async (id) => {
    const response = await fetch('/api/projects/' + id, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };

  const projectParentEl = document.querySelector("#projects");

  projectParentEl.addEventListener('click', (event) =>
  {
    if(event.target.matches(".delete-btn")) {
        const projectId = event.target.id;
        console.log(projectId);
        deleteProject(projectId);
    }
  })
  
  const buttons = document.getElementsByClassName("delete-btn");
  
  for()

  //.forEach((btn) => btn.addEventListener('click', (event) => console.log(event)));
  
  //console.log(document.getElementsByClassName("delete-btn"));

  