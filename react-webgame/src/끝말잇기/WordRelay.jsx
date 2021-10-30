import React, { Component } from 'react';

class WordRelay extends Component {
  state = {
    word: '영리스',
    value: '', // 우리가 입력한 글자
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    // 기존 단어의 맨 마지막 글자와 현재 작성한 단어의 맨 앞 글자가 같은지 비교
    if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '정답',
        word: this.state.value,
        value: '',
      });
      this.input.focus(); // DOM에 직접 접근할 수 있는 focus
    } else {
      this.setState({
        result: '땡!',
        value: '',
      });
      this.input.focus();
    }
  };
  
  onRefInput = (c) => {
    this.input = c;
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default WordRelay;
