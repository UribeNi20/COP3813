const showSidebarButton = document.querySelector('#show-sidebar-button');
const sidebarWrapper = document.querySelector('#sidebar-wrapper');

showSidebarButton.addEventListener('click', () => {
  sidebarWrapper.style.display = 'block';
});