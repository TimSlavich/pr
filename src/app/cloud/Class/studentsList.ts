import { Student } from "./student";

export class StudentList {
  _Student: Student[] = [];

  addStudent(_full_name: string,
    _date_of_birth: string,
    _address: string,
    _phone: string) 
    {
    if (_full_name != null) {
      this._Student.push(new Student(_full_name, _date_of_birth, _address, _phone));
    } else throw new Error('Erorr');
  }
}