class Student
{
    constructor(name, course, section)
    {
        this.name = name;
        this.course = course;
        this.section = section;
    }

    enroll(subject)
    {
        console.log(`${this.name}, Age ${this.course}, is currently in ${this.section}.`);
        console.log(`She is having a concert in ${subject}.`);
    }
}

let stud1 = new Student("Lee Ji Eun", 27, "Edam Entertainment");
stud1.enroll("Manila");