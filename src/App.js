import React from 'react';
import axios from 'axios';
import Board from './Board.js';
import Modal from './Modal.js';
import Search from './SearchBar.js';
import './App.css';

class App extends React.Component {
  
  state = {
    isLoading: true,
    isModalOpen:false,
    contents:[],
    keyword:'',
    dataCount:0
  };
  
  getContents = async () => {
    const API_URL = "http://dauth.daios.net/v1/boards";
    const Token = {
      headers : {"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjMyNTFjMmRmMDYxNDAwMTE4Y2EzNmUiLCJpYXQiOjE1OTcxMzMyNTAsImV4cCI6MTU5NzIxOTY1MH0.63jeGGvNkcgNx9s5wIG8_vbIsXqmUv03Vc6AMT8RB7A"}
    };
    const {data: {data : content}} = await axios.get(API_URL, Token)
    .catch(function(err) {
      alert("에러에러");
    });
    this.setState({contents : content, isLoading: false});
  }

  openModal =() => {
    this.setState({ isModalOpen: true })
    console.log("asdasdasdad");
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  searchData = (k) => {
    this.setState({
      keyword: k
    });
  }

  // checkData = () => {
  //   this.setState({
  //     dataCount : this.state.dataCount + 1
  //   });
  //   console.log(this.state.dataCount);
  // }

  componentDidMount() {
    this.getContents();
  }



  render() {
    const { contents } = this.state;
    
    return(
      this.state.isLoading ? 
        <div className="loader">
        <span className="loader_text">Loding...</span>
        </div>
        : 
          <div className="wrap">
          <Search search={this.searchData} />
          <button type="button" onClick={this.openModal} className="modalBtn">Write Content</button>
            <Modal isOpen={this.state.isModalOpen} close={this.closeModal} />
            <div className="contents">
              {contents.map( content => (
                <Board
                keyword = {this.state.keyword} 
                id = {content._id}
                nickName = {content.nickName}
                content = {content.content}
                createdAt = {content.createdAt}
                ver = {content.__v}
                />                  
                ))}           
              </div>
            </div>
            
            )
  }
  
  
  
  
}

export default App;
