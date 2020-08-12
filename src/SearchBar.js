import React from 'react';

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
            <div>
                <label>
                    <input type="text" onChange={this.keyChange}/>
                </label>
                <label>
                    <button type="submit" onClick={() => this.props.search(keyword)} />조회
                </label>
            </div>
        );
    }

}

export default SearchBar;