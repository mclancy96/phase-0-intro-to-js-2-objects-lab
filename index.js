// Write your solution in this file!
const employee = {};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {

}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {

}