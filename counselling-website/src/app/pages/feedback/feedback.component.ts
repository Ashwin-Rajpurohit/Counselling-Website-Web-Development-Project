import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/logic/crud.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  Feedbacks: any = [];
  cur_id:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudapi: CrudService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.cur_id= this.activatedRoute.snapshot.paramMap.get('id');

    this.feedbackForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    console.log("this is id"+this.cur_id);
    // Viewing All Feedbacks
    this.crudapi.getAllFeedbacks().subscribe((res) => {
      console.log(res);
      this.Feedbacks = res;
    });
  }

  // Posting Feedbacks
  onSubmit(): any {
    this.crudapi.addFeedback(this.feedbackForm.value).subscribe((res: any) => {
      console.log('Feedback added successfully');
      this.ngZone.run(
        () => {
          this.router.navigate(['/feedback'], { fragment: 'showFeedbacks' });
          console.log("this is id"+this.cur_id);

        },
        (err: any) => {
          alert("Fill all details!");
        }
      );
    });
  }

  // Deleting Feedback
  delete(id: any, i: any) {
    console.log(id);    
    if (window.confirm('Are you sure, you want to delete this feedback?')) {
      this.crudapi.deleteFeedback(id).subscribe((res) => {
        this.Feedbacks.splice(i, 1);
      });
    }
  }

  // editing or updating feedback
}
