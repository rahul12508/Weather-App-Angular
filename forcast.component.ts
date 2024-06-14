import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../Interfaces/weather.interface';
import { currentForcast } from '../Interfaces/forcast.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodayComponent } from '../today/today.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-forcast',
  standalone: true,
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss'],
  imports: [FormsModule, CommonModule, TodayComponent],
})
 

export class ForcastComponent {

  city: string = "Jaipur";
  weatherData!: CurrentWeather;
  forecastData!: currentForcast;

  iconUrl: any;
  iconUrl2: any;
  // lan: number = 44.29; 
  // lon: number = 10.20;
  
  // currentSlide = 0;
  // slideCount = 10; 

  // prevSlide() {
  //   if (this.currentSlide > 0) {
  //     this.currentSlide--;
  //   }
  // }

  // nextSlide() {
  //   if (this.currentSlide < this.slideCount - 1) {
  //     this.currentSlide++;
  //   }
  // }

  
  constructor(private weatherService: WeatherService) {}


  ngOnInit(): void {
    this.getWeather(); 
    this.getLocationAndForecast();
  }

  

  getWeather() {
    if (this.city) {
      this.weatherService.getCurrentWeather(this.city).subscribe(data => {
        this.weatherData = data;
        this.iconUrl = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
  
      });

      this.weatherService.getFiveDayForcast(this.city).subscribe(data => {
        this.forecastData = data;
      

        this.forecastData.list.forEach((forecast: any) => {
          this.iconUrl2 = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        });
       
        
      });
    }
  }


  getLocationAndForecast() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.getForecastByCoords(lat, lon);


        },
       
      );
    } 
  }

  getForecastByCoords(lat: number, lon: number) {
    this.weatherService.getFiveDayForecastByCoords(lat, lon).subscribe(data => {
      this.forecastData = data;
      console.log(data);

    
    });
  }


}
