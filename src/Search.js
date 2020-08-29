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

    render() {
        const { value } = this.state;
        const { hideClearIcon, showSearchButton, } = this.props;
        return (
            <div className="__mainWrapper" >
                <div className="__inputWrapper" style={{ position: ' relative' }}>
                    <input type="text" style={{
                        paddingTop: '0.3rem', paddingBottom: '0.3rem', paddingLeft: '0.5rem', paddingRight: '2rem',
                        outline: 0, boxShadow: '0px 1px 3px 0px #d2d2d2', border: 'none', fontSize: '1rem',
                        fontFamily: 'sans-serif', letterSpacing: '0.5px'
                    }}
                        onChange={e => { this.onChange(e.target.value) }}
                        value={value}
                    />
                    {
                        hideClearIcon ? null : (value.length > 0 ? <span onClick={this.clearSearch}
                            style={{ position: 'absolute', right: 30, top: 10, cursor: 'pointer' }}>X</span> : null)
                    }
                </div>

                {showSearchButton ?
                    (<div className="__buttonWrapper">
                        <button type="button">
                            <div className="__searchglassIcon" role="img" aria-label="search">&#9906;</div>
                        </button>
                    </div>) : null
                }
            </div>
        );
    }
}

Search.defaultProps = {
    hideClearIcon: false,
    showSearchButton: false,
}

Search.propTypes = {
    hideClearIcon: PropTypes.bool,
    showSearchButton: PropTypes.bool,
}
