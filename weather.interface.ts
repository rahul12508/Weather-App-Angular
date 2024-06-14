
export interface CurrentWeather {
   
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: [];
        country: string;
      }
      
    ];
    name: string;
    city: 
        {
        id: number;
        name: string;
    }


    main: 
        {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      visibility: number;
      dt: number;
    } 

 sys: {
  sunrise: number;
  sunset: number;
 },

    
    wind: 
    {
      speed: number;
      deg: number;
    }


    clouds: 
    {
      all: number;
    }

   
}