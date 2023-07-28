const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection();

function getAllUsers() {
    return db.query("select * from users");
}

inquirer.prompt([
    {
        name: 'action',
        type: 'list',
        list: ['action1', 'action2'],
    }
]).then(async (answers) => {
    switch (answers.action) {
        case 'action1':
            const users = await getAllUsers();
            // display users;
            break;
        case 'action2':
            const departments = await getAllDepartments();
            // display departments;
            break;
    }

    if (answers.action === 'action1') {
        const users = await getAllUsers();
        // display
    } else if (answers.action === 'action2') {
        const departments = await getAllDepartments();
        // display
    }
});