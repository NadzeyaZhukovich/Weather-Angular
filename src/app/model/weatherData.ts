export class WeatherData {
  cityName: string;
  temperature: number;
  weatherDescription: string;
  humidity: number;
  wind: number;
  pressure: number;
  date: string;

  constructor(
    cityName: string,
    temperature: number,
    weatherDescription: string,
    humidity: number,
    wind: number,
    pressure: number,
    date: string
  ) {
    this.cityName = cityName;
    this.temperature = temperature;
    this.weatherDescription = weatherDescription;
    this.humidity = humidity;
    this.wind = wind;
    this.pressure = pressure;
    this.date = this.getHumanReadableDate(date);
  }

  getHumanReadableDate(date): string {
    const stringDate = new Date(date * 1000);
    return stringDate.toDateString();
  }
}
