const projectHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const description = document.querySelector('#description').value.trim();
    const funding = document.querySelector('#needed_funding').value.trim();
  
    if (name && description && funding) {
      const response = await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify({ name, description, funding }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to add project.');
      }
    }
  };

  document
  .querySelector('#new-project-form')
  .addEventListener('submit', projectHandler);