import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ForecastData } from "./forecast-data";

@Injectable({
  providedIn: "root"
})
export class ForecastService {
  constructor(private http: HttpClient) {}

  appID: string = "4x656gbd2082449421y906b430kd91y6";
  url: string = "https://api.openweathermap.org/data/2.5/forecast?q=";

  getForecast(selectedUserLocation: string) {
    return this.http.get<ForecastData>(
      `${
        this.url
      }${selectedUserLocation}&type=accurate&cnt=10&units=metric&appid=${
        this.appID
      }`
    );
  }
}