import React from 'react';
import axios from 'axios';

class ModalContent extends React.Component {

    state = {
        nickName: '',
        content: ''
    }
    
    appChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    
    setContent = async () => {
        const {nickName, content} = this.state;
        const API_URL = "http://dauth.daios.net/v1/boards";
        const Token = {
          headers : {"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjMyNTFjMmRmMDYxNDAwMTE4Y2EzNmUiLCJpYXQiOjE1OTcxMzMyNTAsImV4cCI6MTU5NzIxOTY1MH0.63jeGGvNkcgNx9s5wIG8_vbIsXqmUv03Vc6AMT8RB7A",
          "Content-Type" : "application/json"
        }
        };
        const data = {
            "content": {content}.content,
            "nickName" : {nickName}.nickName,
        };
        await axios.post(API_URL, data, Token)
        .then(function (response) {
            console.log("성공   " + response);
        })
        .catch(function(err) {
            console.log("실패" + err);
            alert("문제가 발생하여 정상적으로 게시물이 올라가지 않았습니다.");
        });
            this.props.close();
    }

    


    render() {
        return(
            <div className="Modal">    
                <div className="content">
                    <form className="writeContent">
                        <input type="text" name="nickName" id="nickName" className="modalNn" placeholder="닉네임을 입력해 주세요." onChange={this.appChange} />
                        <textarea name="content" id="content" className="modalCt" placeholder="본문 내용을 입력해 주세요." />
                    </form>
                    <div className="button-wrap">
                    <button type="submit" value="content" onClick={this.setContent}> Confirm </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ModalContent;