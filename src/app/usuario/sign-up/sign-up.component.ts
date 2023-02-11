import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    constructor(private router: Router) {}
    submit(f: NgForm){
      if(f.value.email!='' && f.value.password!='' && f.value.confpsw!=''){
        this.router.navigate(['./home']);
        return
      }
      alert("Igresar todos los datos")
    }
}
