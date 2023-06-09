import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
FormsModule


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  list:any;
  data: any;
  food: string = "";
  price:number|undefined;
id: any;
  constructor(private service: ServiceService) { 

  }
  ngOnInit(): void {
    this.getAll();
    }

    getAll(){
      this.service.getfood().subscribe((data)=>{
        this.list=data;
        console.log(data);
        
      })
    }


    addfood(){    
      console.log('check',this.food,this.price);
      let body={      
        food:this.food,
        price:this.price
      }
      console.log(body,'body');
      this.service.addfood(body).subscribe(data=>{
        this.getAll();
      })
      // console.log();
  }


  editfood(id:any){ 
    // console.log('888888888888888',id);
    this.id=id;
    this.service.getfoodbyid(id).subscribe((data:any)=>{
      console.log("Data Received",data);
     
      this.food=data[0].Food;
      this.price=data[0].Price;
     
     
      // console.log(this.food);
      
    })
  }

  updatefood(){
    let body={
      id:this.id,
      food:this.food,
      price:this.price
    }
    console.log("ithu body");
    
    console.log(body);

    console.log("mela irukkurathu body");
    
    
        this.service.updatefood(body).subscribe(data=>{
      console.log("data is ",data);
      
      this.getAll();
    })
  }

  deletefood(id:number){
    let uid:any={id:id}
    console.log('deleteID',uid);
    this.service.deletefood(uid).subscribe(data=>{
      this.getAll()
    }
      )
    }

}




