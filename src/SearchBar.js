import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // below code will give me an error since the this keyword inside onInputChange doesn't exists
  // onInputChange(event) {
  //   console.log(this);
  //   this.setState({ term: event.target.value });
  // }

  // below function is arrow function so the 'this' keyword refers to the outside scope of the parent
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  // will be invoked when user clicks on 'enter' button
  onFormSubmit = event => {
    // below line is to prevent the re-fresh of page when enter is clicked
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            {/* 2 way binding of input element */}
            <input type='text' onChange={this.onInputChange} value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
