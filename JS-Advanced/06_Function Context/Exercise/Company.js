class Company {
    constructor(){
       this.departments = [];
    }
    
    addEmployee(username, salary, position, departmentName){

      // validation
      [username, salary, position, departmentName].forEach(param => {
         Company._validateParam(param);
      })
      if (salary < 0) {
         throw new Error('Invalid input!');
      }
      
      // get department
       let department = this.departments.find(d => d.name === departmentName);

      // create department if not exists
       if (department === undefined) {
          department = {
            name: departmentName,
            employees: []
          };
          this.departments.push(department);
       }

       // add employee
       department.employees.push({
          username,
          salary,
          position
       });
       
       return `New employee is hired. Name: ${username}. Position: ${position}`
    }
    bestDepartment(){
      const departments = this.departments.map(d => {
         const department  = Object.assign({}, d);
         department.averageSalary = Company._employeesAvgSalary(department.employees);
         return department
      });

      departments.sort(Company._compareDepartments);
      const best = departments[0];

      if (best !== undefined) {
         const result = [
            `Best Department is: ${best.name}`,
            `Average salary: ${best.averageSalary.toFixed(2)}`
         ];
         const employees = best.employees.slice().sort(Company._compareEmployees);
         employees.forEach(e => result.push(Company._employeeToString(e)));
         return result.join('\n')
      }
    }
    static _validateParam(param) {
       if(param === '' || param === undefined || param === null) {
          throw new Error('Invalid input!');
       }
    }
    static _employeeToString(employee) {
       return `${employee.username} ${employee.salary} ${employee.position}`
    }
    static _employeesAvgSalary(employees) {
       return employees.reduce((acc, e) => acc + e.salary, 0) / employees.length || 0
    }
    static _compareEmployees(a, b) {
       return b.salary - a.salary || a.username.localeCompare(b.username);
    }
    static _compareDepartments(a, b) {
       return b.averageSalary - a.averageSalary
    }
}


let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());