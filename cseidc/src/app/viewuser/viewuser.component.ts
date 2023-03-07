import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/assets/api-service.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {



  allData: any = []

  constructor(private api: ApiServiceService) {

  }
  ngOnInit(): void {

    this.api.getuser().subscribe((result: any) => {

      this.allData = result.data
      console.log(this.allData)

    })

  }

}
