import React from 'react'

const ForCast = ({weather}) => {
  return (
    <div className="mt-7">
      <h2 className="text-3xl font-semibold text-center">{weather.name}, {weather.sys.country}.</h2>
      <div className="flex items-center justify-center mt-2">
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}  />
        <p className="text-center text-2xl font-bold">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="text-center capitalize text-lg">{weather.weather[0].description}</p>
      <div className="grid grid-cols-2 gap-4 mt-7">
        <div className='text-center'>
            <p className="text-lg font-semibold text-gray-300">Feels like</p>
            <p className="text-center text-xl font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div className='text-center'>
            <p className="text-lg font-semibold text-gray-300">Humidity</p>
            <p className="text-center text-xl font-bold">{weather.main.humidity}%</p>
        </div>
        <div className='text-center'>
            <p className="text-lg font-semibold text-gray-300">Wind</p>
            <p className="text-center text-xl font-bold">{weather.wind.speed} m/s</p>
        </div>
        <div className='text-center'>
            <p className="text-lg font-semibold text-gray-300">Pressure</p>
            <p className="text-center text-xl font-bold">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  )
}

export default ForCast