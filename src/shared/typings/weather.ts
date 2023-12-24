type ForecastHour = {
  time: string
  temp_c: string
  condition: {
    text: string
  }
}

type ForecastDay = {
  hour: ForecastHour[]
}

export type WeatherSearchResponse = {
  id: number
  region: string
  country: string
  lat: number
  lon: number
}

export type WeatherResponse = {
  location: {
    region: string
    country: string
  }
  current: {
    temp_c: string
    condition: {
      text: string
      icon: string
    }
    feelslike_c: string
  }
  forecast: {
    forecastday: ForecastDay[]
  }
}

export type WeatherDayData = {
  region: string
  country: string
  text: string
  temp_c: string
  feelslike_c: string
}

export type WeatherHourData = {
  time: string
  text: string
  temp_c: string
}
