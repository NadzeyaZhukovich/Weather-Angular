export class WeatherData {
  cityName: string;
  temperature: number;
  weatherId: number;
  weatherDescription: string;
  humidity: number;
  wind: number;
  pressure: number;
  date: string;

  constructor(
    cityName: string,
    temperature: number,
    weatherId: number,
    weatherDescription: string,
    humidity: number,
    wind: number,
    pressure: number,
    date: string
  ) {
    this.cityName = cityName;
    this.temperature = temperature;
    this.weatherId = weatherId;
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

  getIconPath(): string {
    let weatherIcon;
    if (this.weatherId >= 700 && this.weatherId < 800) {
      weatherIcon = 'wind';
    } else {
      weatherIcon = 'cloud';
    }
    return `../assets/img/${weatherIcon}.svg`;
  }
}
