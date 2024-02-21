import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentList } from './Class/studentsList';

@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cloud.component.html',
  styleUrl: './cloud.component.css'
})
export class CloudComponent {
  data: any = [];
  dataStudents: StudentList = new StudentList();
  dataURL = 'https://api.jsonbin.io/v3/b/65d640cadc74654018a7ee35';
  loading: boolean = true;
  max: number = 0;
  min: number = 100;

  async load() {
    this.dataStudents._Student = [];
    fetch(this.dataURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data = data.record;
        console.log(data);
        let i = 0;
        while (data[i] != undefined) {
          this.dataStudents.addStudent(
            data.students[i][0].full_name,
            data.students[i][0].date_of_birth,
            data.students[i][0].address,
            data.students[i][0].phone);
          i++;
        }
        this.loading = false

        console.log(this.dataStudents)
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error fetching data');
      });

      
  }
}