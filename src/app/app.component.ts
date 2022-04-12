import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.moviesThreaders=[{
      title: "Spider Man1",
      releasedate: new Date(),
      price: 50.00,
      poster:"https://m.media-amazon.com/images/M/MV5BMTY5NzM3MTYyNV5BMl5BanBnXkFtZTgwNDE0ODkxMjI@._V1_UY100_CR23,0,100,100_AL_.jpg"
    },
    {
      title: "Monna",
      releasedate: new Date(),
      price: 50.00,
      poster:"https://m.media-amazon.com/images/M/MV5BNTEzNzU3Mjg3NF5BMl5BanBnXkFtZTgwNzEyODY2MDI@._V1_UY100_CR25,0,100,100_AL_.jpg"
    },    
    {
      title: "Venhalsing",
      releasedate: new Date(),
      price: 550.00,
      poster:"https://m.media-amazon.com/images/M/MV5BMTMzMTY3NjMxNV5BMl5BanBnXkFtZTcwNjk5NDQyMw@@._V1_UX100_CR0,0,100,100_AL_.jpg"
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
