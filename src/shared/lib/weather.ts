import { Ref, computed } from 'vue'

import { useFetch } from '@vueuse/core'

import {
  WEATHER_API_KEY,
  WEATHER_API_FORECAST_URL,
  WEATHER_API_SEARCH_URL,
} from '@constants'

import type {
  WeatherResponse,
  WeatherSearchResponse,
  WeatherDayData,
  WeatherHourData,
} from '@typings/weather'

export const useFetchWeatherForecast = (
  latitude: Ref<number>,
  longitude: Ref<number>
) => {
  const { data, isFetching, execute } = useFetch(
    computed(
      () =>
        `${WEATHER_API_FORECAST_URL}?key=${WEATHER_API_KEY}&q=${latitude.value},${longitude.value}`
    ),
    {
      immediate: false,
      afterFetch: (ctx: {
        data: WeatherResponse
      }): { data: { day: WeatherDayData; hours: WeatherHourData[] } } => {
        return {
          data: {
            day: {
              region: ctx.data.location.region,
              country: ctx.data.location.country,
              text: ctx.data.current.condition.text,
              temp_c: ctx.data.current.temp_c,
              feelslike_c: ctx.data.current.feelslike_c,
            },
            hours: ctx.data.forecast.forecastday[0].hour.map(
              ({ time, temp_c, condition }) => ({
                time,
                temp_c,
                text: condition.text,
              })
            ),
          },
        }
      },
    }
  ).json<{
    day: WeatherDayData
    hours: WeatherHourData[]
  }>()

  return { data, isFetching, execute }
}

export const useFetchWeatherSearch = (searchInput: Ref<string>) => {
  const { data, isFetching, abort, execute } = useFetch(
    computed(
      () =>
        `${WEATHER_API_SEARCH_URL}?key=${WEATHER_API_KEY}&q=${searchInput.value}`
    ),
    {
      immediate: false,
    }
  ).json<WeatherSearchResponse[]>()

  return { data, isFetching, abort, execute }
}
