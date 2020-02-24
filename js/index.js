//Constructor Function
function Student(name, age, section)
{
    this.name = name;
    this.age = age;
    this.section = section;
}

Student.prototype.study = function(subject)
{
    console.log(`${this.name}, is having a concert in ${subject}.`);   
}

Student.prototype.school = "UST";

let stud1 = new Student("Lee Ji Eun", "27", "Edam Entertainment");
let stud2 = new Student ("Yoo In Na", "n/a", "actress");

stud1.study("Manila");
stud2.study("Singapore");

console.log(stud1.school);