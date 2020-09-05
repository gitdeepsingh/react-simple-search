import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

export default class Search extends Component {

  state = {
    value: '',
  }

  onChange = (value) => {
    this.setState({ value },
      () => {
        if (this.props.onChange) {
          this.props.onChange(value);
        }
      })
  }

  clearSearch = () => {
    this.setState({ value: '' });
  }

  provideSearchResults = () => {
    const { searchFromArray } = this.props;
    let r = [];
    searchFromArray.forEach((d, i) => {
      if (this.state.value.length && d.substring(0, this.state.value.length) === this.state.value) {
        r.push(d.trim())
      }
      r.length && this.props.getResults(r);
    })
  }

  render() {
    const { value } = this.state;
    const { hideClearIcon, showSearchButton, searchFromArray } = this.props;
    return (
      <div className="__mainWrapper" >
        <div className="__inputWrapper">
          <input type="text"
            onChange={e => { this.onChange(e.target.value) }}
            value={value}
          />
          {
            hideClearIcon ? null : (value.length > 0 ? <span onClick={this.clearSearch} className="__clearIcon"
            >X</span> : null)
          }
        </div>

        {showSearchButton ?
          (<div className="__buttonWrapper">
            <button type="button">
              <div className="__searchglassIcon" role="img" aria-label="search">&#9906;</div>
            </button>
          </div>) : null
        }
        {searchFromArray && searchFromArray.length > 0 && this.provideSearchResults()}
      </div>
    );
  }
}

Search.defaultProps = {
  hideClearIcon: false,
  showSearchButton: false,
  searchFromArray: [],
  getResults: () => { }
}

Search.propTypes = {
  hideClearIcon: PropTypes.bool,
  showSearchButton: PropTypes.bool,
  searchFromArray: PropTypes.array,
  getResults: PropTypes.func
}
