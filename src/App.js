import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
  state = { images: [] };

  // using below function to pass to SearchTerm component to get the term as a parameter
  onSearchSubmit = async userInput => {
    // axios
    //   .get(`https://api.unsplash.com/search/photos?client_id=7xksHy43PkrH0YqmQaeFwu6IBlo0yfHZs0IbJ9cWyCc&query=${userInput}`)
    //   .then(response => {
    //     console.log(response.data.results);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=7xksHy43PkrH0YqmQaeFwu6IBlo0yfHZs0IbJ9cWyCc&query=${userInput}`
    );

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
