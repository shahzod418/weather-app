/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string
  readonly VITE_WEATHER_API_SEARCH_URL: string
  readonly VITE_WEATHER_API_FORECAST_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
