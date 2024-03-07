// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: ""
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}

    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value) {
    employee[key] = value;

    employee = {
        name: "Sam",
        streetAddress: "12 Broadway",
    }

    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;

    delete newEmployee.name;

    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;

    delete employee.name;

    return employee;
}