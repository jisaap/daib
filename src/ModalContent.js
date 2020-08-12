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
        let result = false;
        await axios.post(API_URL, data, Token)
        .then(function (response) {
            console.log("성공   " + response);
            result = true;
        })
        .catch(function(err) {
            console.log("실패" + err);
            result = false;
        });
        if(result){
            this.props.close();
        }
    }

    


    render() {
        return(
            <div className="Modal">    
                <div className="content">
                    <form>
                        <label>
                            NickName:
                            <input type="text" name="nickName" id="nickName" onChange={this.appChange} />
                        </label>
                        <label>
                            Content:
                            <input type="text" name="content" id="content" onChange={this.appChange} />
                        </label>
                        </form>
                    <div className="button-wrap">
                    {/* <button type="submit" value="content" onClick={this.props.close}> Confirm </button> */}
                    <button type="submit" value="content" onClick={this.setContent}> Confirm </button>
                    </div>
                    </div>
                </div>
        )
    }

}

export default ModalContent;