import { useState } from 'react';
import Card from './components/Card/Card';
import themeIcon from './assets/theme-icon.svg';
import './App.css'

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(null);
    setError(false);
    if (searchInput === "") return;

    setLoading(true);

    fetch(`https://api.github.com/users/${searchInput}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      }
      return response.json();
    })
    .then(data => {
      const user = {
        avatar: data.avatar_url,
        name: data.name,
        joinedDate: data.created_at,
        username: data.login,
        bio: data.bio,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        country: data.location,
        twitter: data.twitter_username,
        githubUrl: data.html_url,
        company: data.company,
      }
      setUser(user);
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>devfinder</h1>
        <div className="theme-container">
          <p>LIGHT</p>
          <img className="theme-icon" src={themeIcon} alt="Theme Icon"/>
        </div>
      </div>
      <div className="searchbar">
        <form onSubmit={handleSubmit}>
          <input
            value={searchInput}
            onChange={handleInputChange}
            type="search"
            placeholder="Search Github username"
          />
          <button type="'submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
      {(user && !loading) && <Card user={user} />}
      {(!user && !error && !loading) && <h2 className="empty-message">Type a username to display info</h2>}
      {(error && !loading) && <h2 className="not-found-message">No matching results for this username</h2>}
      {loading && <h2 className="loading">...Loading</h2>}
    </div>
  )
};

export default App;
