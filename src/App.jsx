import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar"
import axios from "axios";
import ForCast from "./components/ForCast";
import { BiLoaderCircle } from "react-icons/bi";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchData = async (city) => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found, please enter another city!")
      } else {
        setError("An error occurred, please try again later.")
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    console.log("Loading state changed:", loading);
  }, [loading])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url(/background.jpg)] bg-cover bg-center overflow-hidden">
      <div className=" bg-black/20 text-white px-2 py-8 md:p-8 max-w-md w-full rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center pb-6 text-white drop-shadow-[0_2px_2px_black]">Weather App</h1>
        <SearchBar fetchData={fetchData} />
        {loading && <p className="text-center mt-4 text-lg"><BiLoaderCircle className="animate-spin mx-auto" size={30} /></p>}
        {error && <p className="text-center mt-4 text-lg text-red-600 bg-white p-2 rounded-lg">{error}</p>}
        {weather && <ForCast weather={weather} />}
      </div>
    </div>
  )
}

export default App
