// Ce script permet d'exporter tous les élèves présent une journée 
// Pour utiliser ce script, simplement le lancer dans la console d'une page 

// Pour permettre les logs, bloqué sur la page
function myLog(...args) {

    window.console && console.info(...args);
}

const rows = document.querySelectorAll('tr');
let studentNames = Array.from(rows).map(row => {

    const nameCell = row.querySelector('div');
    if (nameCell) {
        if (nameCell.querySelector('small')) {
            let firstName = '';
            let myLastName = '';

            nameCell.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    firstName += node.textContent.trim();
                }
            });

            myLastName = nameCell.querySelector('b')?.textContent.trim()

            return `${firstName} ${myLastName}`;
        } else {
            ;
        }
    }
});

studentNames = studentNames.filter(element => element !== undefined);
myLog(studentNames);