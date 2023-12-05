const row = document.querySelectorAll('#testDiv');
const nameCell = row.querySelector('td:nth-of-type(2)');
// Extract the last name from the <b> tag
const lastName = nameCell.querySelector('b')?.textContent.trim();

// Extract the full content (including first name) and remove the last name part
const fullName = nameCell.textContent.trim();
const firstName = fullName.replace(lastName, '').trim();

myLog(`${firstName} ${lastName}`);