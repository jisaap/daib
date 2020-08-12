import React from 'react';
import PropTypes from "prop-types";
import "./Board.css";

function Board({keyword, id, nickName, content, createdAt, ver}) {
    return (
        id === keyword
            ||nickName === keyword
            ||content === keyword
            ||createdAt == keyword
            ||ver == keyword
            ||keyword === ''?
            <div key={id} className="content">
                <div className="board_content">
                    <div className="nickName">
                        <h3>NICKNAME</h3>
                        <p>{nickName}</p>
                    </div>
                    <div className="id">
                        <h3>ID</h3>
                        <p>{id}</p>
                    </div>
                    <div className="ver">
                        <h3>VERSION</h3>
                        <p>{ver} </p>
                    </div>
                    <div className="content">
                        <h3>CONTENT</h3>
                        <p>{content} </p>
                    </div>
                    <div className="createAt">
                        <h3>CreateAT</h3>
                        <p>{createdAt} </p>
                    </div>
                </div>
            </div>
        :
        null
    )
}

Board.prototype = {
    key : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    nickName : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    createdAt : PropTypes.instanceOf(Date).isRequired,
    ver : PropTypes.number.isRequired,
};



export default Board;