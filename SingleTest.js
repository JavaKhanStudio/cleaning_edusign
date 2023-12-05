const row = document.querySelector('#testTD');
const nameCell = row.querySelector('div');
if (nameCell) {
    if (nameCell.querySelector('small')) {
        let firtsName = '';
        let isLastName = '';

        nameCell.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                firtsName += node.textContent.trim();
            }
        });

        isLastName = nameCell.querySelector('b')?.textContent.trim()

        myLog(`${firtsName} ${isLastName}`);
    } else {
        myLog('no student here');
    }
}