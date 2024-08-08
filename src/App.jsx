import { useEffect, useRef, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch';
import getRandomNumber from './helpers/getRandomNumber';
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import getNumbers from './helpers/getNumbers';

function App() {
  const [locationID, setLocationID] = useState(getRandomNumber(126));
  const [errorMessage, setErrorMessage] = useState(getRandomNumber(''));

  const url = `https://rickandmortyapi.com/api/location/${locationID}`;
  const [location, getLocation, hasError, isLoading] = useFetch(url)
  const [locations, getLocations, hasErrorLocations, isLoadingLocations] = useFetch(`https://rickandmortyapi.com/api/location/${getNumbers()}`);


  useEffect(() => {
    getLocation()
  }, [locationID]);

  useEffect(() => {
    getLocations()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputName.current.value.trim();

    const selectedLocation = locations.find(location => location.name.toLowerCase() === inputValue.toLowerCase(),
    );
    if (inputValue) {
      setLocationID(selectedLocation ? selectedLocation.id : null);
      setErrorMessage(selectedLocation ? '' : 'No location found with that name!')
    }
  }

  const inputName = useRef();

  return (
    <div className='app flex-container'>
      <header className='app_hero'>
        <img className='hero_image' src='/img/rickandmorty.jpg' alt='Hero Image' />
      </header>
      <section className='app_body'>

        <form className='form' onSubmit={handleSubmit}>
          <input className='form_input' type='text' placeholder='Search location name' ref={inputName} list='locations' />
          <datalist id='locations'>
            {
              isLoadingLocations ? <option>𝙇𝙤𝙖𝙙𝙞𝙣𝙜...⌛</option> : locations?.map(location => (
                <option value={location.name} key={location.id}></option>
              ))
            }
          </datalist>
          <button className='form_btn'>Search</button>
        </form>
        {isLoading ? (
          <h1>𝙇𝙤𝙖𝙙𝙞𝙣𝙜...⌛</h1>
        ) : errorMessage ? (
          <h1>❌{errorMessage}</h1>
        ) : (
          <>
            <LocationInfo location={location} />
            <section className='cards_container flex-container'>
              {location?.residents.map((url) => (
                <ResidentCard key={url} url={url} />
              ))}
            </section>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
