export class WeatherData {
  cityName: string;
  temperature: number;
  weatherId: number;
  weatherDescription: string;
  humidity: number;
  wind: number;
  pressure: number;
  date: Date;

  constructor(
    cityName: string,
    temperature: number,
    weatherId: number,
    weatherDescription: string,
    humidity: number,
    wind: number,
    pressure: number,
    date: Date
  ) {
    this.cityName = cityName;
    this.temperature = temperature;
    this.weatherId = weatherId;
    this.weatherDescription = this.getStringWithFirstCapitalLetter(weatherDescription);
    this.humidity = humidity;
    this.wind = wind;
    this.pressure = pressure;
    this.date = date;
  }

  getIconPath(): string {
    let weatherIcon;
    switch (true) {
      case (this.weatherId < 300) :
        weatherIcon = 'thunderstorm';
        break;
      case (this.weatherId < 400) :
        weatherIcon = 'rain';
        break;
      case (this.weatherId < 600) :
        weatherIcon = 'shower-rain-day';
        break;
      case (this.weatherId < 700) :
        weatherIcon = 'snow';
        break;
      case (this.weatherId < 800) :
        weatherIcon = 'mist';
        break;
      case (this.weatherId === 800) :
        weatherIcon = 'clear-sky-day';
        break;
      case (this.weatherId < 900) :
        weatherIcon = 'few-clouds-day';
        break;
      default:
        weatherIcon = 'none';
        break;
    }
    return `../assets/img/${weatherIcon}.svg`;
  }

   getHumanReadableDate(): string {
    return this.date.toDateString();
  }

  private getStringWithFirstCapitalLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
