import { useState, useRef } from 'react';

const WordRelayFunc = () => {
  const [word, setWord] = useState('영리스');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null); // 기본값을 null로 설정

  const onSubmitForm = (e) => {
    e.preventDefault();
    // 기존 단어의 맨 마지막 글자와 현재 작성한 단어의 맨 앞 글자가 같은지 비교
    if(word[word.length - 1] === value[0]) {
      setResult('정답');
      setWord(value);
      setValue('');
      inputRef.current.focus(); // DOM에 직접 접근할 수 있는 focus
    } else {
      setResult('땡!');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default WordRelayFunc;
