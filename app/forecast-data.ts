export interface City {
  country: string;
  name: string;
}

export interface Main {
  humidity: number;
  temp: number;
}

export interface Weather {
  description: string;
}

export interface DailyWeather {
  dt_txt: string;
  main: Main;
  weather: Weather[];
}

export interface ForecastData {
  city: City;
  list: DailyWeather[];
}