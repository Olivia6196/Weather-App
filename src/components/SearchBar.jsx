import React from 'react'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchBar = ({fetchData}) => {
     const [city, setCity] = useState("")
    const handleChange = (e) => setCity(e.target.value);
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(city.trim() !== ""){
            fetchData(city);
            setCity("");
        }
        else{
            alert("Please enter a city name!");
        }
    }
    return (
        <form className='flex' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search City...'
                value={city}
                onChange={handleChange} 
                className='p-3 outline-none rounded-l-lg text-2xl flex-1 text-pink-400 pl-4 placeholder:text-pink-400 placeholder:text-xl placeholder:font-semibold placeholder:pl-1 md:placeholder:pl-0 ' />
            <button type='submit'><CiSearch 
            className='inline font-extrabold text-5xl md:text-6xl bg-pink-400 text-white md:p-3 rounded-r-lg pointer hover:bg-pink-600' /></button>
        </form>
    )
}

export default SearchBar