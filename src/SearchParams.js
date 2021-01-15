import React, { useState } from 'react'
import { ANIMALS } from "@frontendmasters/pet";

export const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog")

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input 
            id="location" 
            value={location} 
            onChange={(e)=>setLocation(e.target.value)}
            placeholder="Location here"
           />
        </label>
        <label htmlFor="animal">
          <select 
            id="animal" 
            value={animal}
            onChange={e=>setAnimal(e.target.value)}
            onBlur={e=>setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option value={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default SearchParams;
