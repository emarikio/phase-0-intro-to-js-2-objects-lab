const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, name, Kelvin) {
    const newEmployee = {...employee};
    newEmployee[name] = Kelvin;
    return newEmployee
    };
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Kelvin){
    employee[name] = Kelvin;
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name];
    return employee;
}
    

