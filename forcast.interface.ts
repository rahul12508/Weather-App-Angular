
export interface currentForcast {

  weather: [
    {
      icon: string;
    }
  ]
  
      city: {
        name: string;
        country: string;
      };

      list: [
      {
        main: {
          temp: number;
          humidity: number;
        }
        weather: [
          {
          description: string;
          }
        ]
      
      }
    ]
    }
      
    
//   export interface IWeatherMain {
//     temp: number;
//     feels_like: number;
//     temp_min: number;
//     temp_max: number;
//     pressure: number;
//     humidity: number;
//     visibility: number;
//     dt: number;
//     dt_txt: number;
// }  