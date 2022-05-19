import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/logic/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  getid:any;
  updateForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudApi:CrudService) {
      this.getid=this.activatedRoute.snapshot.paramMap.get('id');
      this.crudApi.getFeedback(this.getid).subscribe(res=>{
        this.updateForm.setValue({
          firstname:res['firstname'],
          lastname:res['lastname'],
          email:res['email'],
          description:res['description']
        })
      });
      this.updateForm = this.formBuilder.group({
        firstname:[''],
        lastname:[''],
        email:[''],
        description:['']
      })
     }

  ngOnInit(): void {
    
  }

  // update feedback
  update(){
    this.crudApi.updateFeedback(this.getid, this.updateForm.value).subscribe(res=>{
      console.log("Data Updated Successfully");
      this.ngZone.run(()=>{
        this.router.navigate(['/feedback'], { fragment: 'showFeedbacks' })
      },(err:any)=>{
        console.log(err)
      })
    })
  }

}
