import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {

    state = {
        keyword: ''
    }
    
    keyChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }

    
    render() {
        const {keyword} = this.state;
        return(
            <div className="search">
                    <input type="text" className="searchInput" onChange={this.keyChange} placeholder="검색어를 입력해 주세요." />
                    <button type="submit" className="searchBtn" onClick={() => this.props.search(keyword)}>검색</button>
                
            </div>
        );
    }

}

export default SearchBar;