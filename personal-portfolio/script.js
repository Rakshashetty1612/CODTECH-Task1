document.addEventListener('DOMContentLoaded', function () {
    fetchProjects();
    fetchBlogPosts();
  });
  
  function fetchProjects() {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => {
        let projectList = document.getElementById('project-list');
        data.forEach(project => {
          let div = document.createElement('div');
          div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
          projectList.appendChild(div);
        });
      });
  }
  
  function fetchBlogPosts() {
    fetch('/api/blog')
      .then(response => response.json())
      .then(data => {
        let blogList = document.getElementById('blog-list');
        data.forEach(post => {
          let div = document.createElement('div');
          div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
          blogList.appendChild(div);
        });
      });
  }