import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.moviesThreaders=[{
      title: "spiderman1",
      releasedate: new Date(),
      price: 50.00
    },
    {
      title: "spiderman1",
      releasedate: new Date(),
      price: 50.00
    },
    {
      title: "spiderman1",
      releasedate: new Date(),
      price: 50.00
    },
    {
      title: "spiderman1",
      releasedate: new Date(),
      price: 50.00
    },
    {
      title: "spiderman1",
      releasedate: new Date(),
      price: 50.00
    },
    {
      title: "spiderman2",
      releasedate: new Date(),
      price: 250.00
    },
    {
      title: "spiderman3",
      releasedate: new Date(),
      price: 400.00
    },
    {
      title: "spiderman4",
      releasedate: new Date(),
      price: 550.00
    }];
    this.moviesFuturerelease=[]
    // this.moviesFuturerelease=[{
    //   title: "Avenger1",
    //   releasedate: new Date(),
    //   price: 300.00
    // },
    // {
    //   title: "Avenger2",
    //   releasedate: new Date(),
    //   price: 400.00
    // },
    // {
    //   title: "Avenger3",
    //   releasedate: new Date(),
    //   price: 500.00
    // },
    // {
    //   title: "Avenger4",
    //   releasedate: new Date(),
    //   price: 600.00
    // }];
  }
  
  moviesThreaders;
  moviesFuturerelease;
  title = "G Cienema"
  duplicatevalue(n: number) {
    return n * 2;
  }
  handleRating(rate:number){
    alert(`The user selected ${rate}`);
  }
}
