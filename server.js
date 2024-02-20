const db = require('./IntrigueTrack/db/connection');
const inquirer = require("inquirer");


inquirer.prompt([
  {
    type: 'list',
    name: 'choices',
    message: 'What you would like to do?',
    choices: [
      {
        name: 'View all Departments',
        value: 'VIEW_DEPARTMENT'
      }
    ]
  }
]).then(res => {
  let choice = res.choices;

  switch(choice) {
    case 'VIEW_DEPARTMENT':
    viewDept();
    break;
  }
})

function viewDept(){
  const data = db.query("SELECT department.id, department.name FROM department;");
  console.table(data);
}

