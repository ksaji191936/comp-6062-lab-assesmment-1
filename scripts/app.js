const myFullName = 'Kiran Saji';
const myStudentNumber = '1151248';

console.log(`${myFullName} - ${myStudentNumber}`);

const headerContent = document.querySelector('h1');
headerContent.innerHTML = `${myFullName} - ${myStudentNumber}`;
headerContent.classList.add('headingPrimary');
