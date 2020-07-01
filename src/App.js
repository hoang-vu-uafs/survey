import React from "react";
import styled from "styled-components";

import SearchBar from "./Components/SearchBar";
import "./App.css";

const Btn = styled.button`
  border: none;
  background-color: #5f9ea0;
  color: #a52a2a;
  font-size: 10px;
  width: 100px;
  height: 20px;
`;

class App extends React.Component {
  state = {
    text: "",
    items: [],
    hidden: false,
  };

  inputHandle = (text) => {
    // console.log(e.target.value);
    this.setState({
      text: text,
    });
  };

  addHandle = (theID) => {
    this.setState({
      items: [
        ...this.state.items,
        { theText: this.state.text, theID, theCheck: false, theVote: 0 },
      ],
    });
  };

  selectHandle = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (id !== item.theID) {
          return {
            ...item,
            theCheck: false,
          };
        }
        return {
          ...item,
          theCheck: true,
          // theText: item.theText,
          // theID: item.theID,
        };
      }),
    });
  };

  voteHandle = () => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.theCheck === true) {
          return {
            ...item,
            theVote: item.theVote + 1,
          };
        }
        return { ...item };
      }),
      hidden: true,
    });
  };

  continueHandle = () => {
    this.setState({
      hidden: false,
    });
  };

  id = 0;
  render() {
    this.id++;
    return (
      <div className="App">
        {/* <input type="text" onChange={(e) => this.inputHandle(e)} /> */}
        <SearchBar inputHandle={this.inputHandle} />
        <button onClick={() => this.addHandle(this.id)}>Add</button>

        {!this.state.hidden
          ? this.state.items.map(({ theText, theID, theCheck, theVote }) => {
              return (
                <div key={theID}>
                  <input
                    type="radio"
                    value={theText}
                    checked={theCheck}
                    onChange={() => this.selectHandle(theID)}
                  />
                  {theText} {theVote}
                </div>
              );
            })
          : this.state.items.map(({ theText, theID, theCheck, theVote }) => {
              return (
                <div key={theID}>
                  <div style={{ float: "left" }}>Item: {theText} </div>
                  <div style={{ float: "right" }}>{theVote}</div>
                </div>
              );
            })}

        <button onClick={this.voteHandle}>Vote</button>
        <button onClick={this.continueHandle}>Continue</button>
      </div>
    );
  }
}

export default App;
