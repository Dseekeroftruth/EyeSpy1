document.addEventListener('DOMContentLoaded', () => {
  const objects = document.querySelectorAll('.object');
  const foundList = document.getElementById('found-list');
  const tally = document.getElementById('tally');
  let foundCount = 0;
  const totalObjects = objects.length;

  objects.forEach(object => {
    object.addEventListener('click', () => {
      const objectName = object.getAttribute('data-name');
      const listItem = foundList.querySelector(`[data-id="${object.id}"]`);

      // Hide the object
      object.style.display = 'none';

      // Cross off the item in the list
      listItem.classList.add('found');

      // Update tally
      foundCount++;
      tally.textContent = ` ${foundCount}/${totalObjects}`;
    });
  });
});