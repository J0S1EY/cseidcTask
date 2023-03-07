import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/assets/api-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cseidc',
  templateUrl: './cseidc.component.html',
  styleUrls: ['./cseidc.component.css']
})
export class CseidcComponent implements OnInit {
  errMsg = ''

  userData = this.userForm.group({
    userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9  ]*')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 @ ]*')]],
    number: ['', [Validators.required, Validators.pattern('[0-9  ]*')]],
    designation: ['', [Validators.required, Validators.pattern('[a-zA-Z  ]*')]],
    place: ['', [Validators.required, Validators.pattern('[a-zA-Z  ]*')]]


  })

  constructor(private userForm: FormBuilder, private api: ApiServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  addUser() {
    if (this.userData.valid) {
      let userName = this.userData.value.userName
      let email = this.userData.value.email
      let number = this.userData.value.number
      let designation = this.userData.value.designation
      let place = this.userData.value.place
      // console.log(userName, email, number, designation, place)
      this.api.addUser(userName, email, number, designation, place).subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl('')
      },
        (result: any) => {
          alert(result.error.message);

        })
    } else {
      alert('fill in the blanks complete ')

    }

  }
}
