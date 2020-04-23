
function filterEmployees(dataString, criteriaString) {

    const [criteriaKey, criteriaValue] = criteriaString.split('-');
    const isPrintAll = criteriaString.toLowerCase() === 'all';
    const employees = JSON.parse(dataString);

    const criteria = function (employee) {
        return isPrintAll || employee[criteriaKey] === criteriaValue
    };

    let index = 0;
    const print = (e) => console.log(`${index++}. ${e['first_name']} ${e['last_name']} - ${e['email']}`);

    employees.filter(criteria).forEach(print)
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);