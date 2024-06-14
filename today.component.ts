// import { Component, Input, OnInit } from '@angular/core';
// import { currentForcast } from '../Interfaces/forcast.interface';

// @Component({
//   selector: 'app-today',
//   standalone: true,
//   templateUrl: './today.component.html',
//   styleUrls: ['./today.component.scss']
// })
// export class TodayComponent implements OnInit  {
//   @Input() forecastData!: currentForcast ;
//   iconUrl2: any;

//   ngOnInit(): void {
//     if (this.forecastData) {
//       this.forecastData.list.forEach((forecast: any) => {
//         this.iconUrl2 = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
//         console.log(this.forecastData)
//       });
//     }
//   }
// }


import { Component, Input, OnInit } from '@angular/core';
import { currentForcast } from '../Interfaces/forcast.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-today',
  standalone: true,
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  imports: [CommonModule]
})
export class TodayComponent implements OnInit {
  @Input() forecastData!: currentForcast;
  iconUrl2: string = ''; 

  ngOnInit(): void {
  
    if (this.forecastData && this.forecastData.list) {
      
      this.forecastData.list.forEach((forecast: any) => {
        if (forecast.weather && forecast.weather.length > 0) {

          this.iconUrl2 = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        }
        else{
          console.log('error in forecast list')
        }
      });
    }
   }
}

