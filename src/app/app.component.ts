import { Component } from '@angular/core';
import { BankDetails } from './BankDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mathmatical';
  bankName:string = "ICICI-Bank";
  username:string = "Ramesh";
  balance:number= 1000;
  bankArr:BankDetails[] = [];
  status:boolean = false;

  bankInfo:BankDetails = new BankDetails('IDBI-Bank','IDBI-123','Delhi - ABC');


  constructor()
  {
    this.bankArr.push(new BankDetails('ICICI-Bank','icici123','Delhi - ABC'));
    this.bankArr.push(new BankDetails('HDFC-Bank','ABV23','Delhi - Bghj'));
    this.bankArr.push(new BankDetails('SBI-Bank','fgvrt123','Noida - 1'));
    this.bankArr.push(new BankDetails('Axis-Bank','ythty23','Noida - 2'));
    

  }

  doThis(fund:string)
  {
    let fund2 = parseInt(fund);
    console.log("Button clicked ...."+(fund2+1));
  }
   sum:number=0;
  doAdd(n1:string,n2:string){
    this.sum=+n1 + +n2;
    console.log(+n1 + +n2);
  }
  arr1:string[]=[];
  doDiv(n1:string){
    var sum = 0;
   
    var num:number=+n1;
  for (var i = 1; i <=num/2; i++){
    if ((num % i)===0) {
      if(i<=(num/i)){
      this.arr1.push(i+" x "+ (num/i));
      console.log(i+" x "+ (num/i));
      }
     // console.log(i);
      sum += i;
    }
  }
  
  
  }
}
