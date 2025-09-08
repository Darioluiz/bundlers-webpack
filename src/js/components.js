export function title (title ){
  const createTitle = document.createElement('h1');
  createTitle.textContent = title;

  document.body.appendChild(createTitle);
}