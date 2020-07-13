import React from 'react';
import logo from './logo.svg';
import './App.css';
class Translator extends React.Component {
state = {
  translationInput: [],
  translation: '',
  vowelIndx: 0,
}
translate = (e) => {
  console.log('we made it');
  e.preventDefault();
  let translation = this.state.translationInput.map(word => {
    let vowelIndx = this.findVowelIndx(word);
    console.log('inthemap')
    console.log('vowelIndx:', vowelIndx)
    let cons = word.substring(0, vowelIndx);
    console.log('cons', cons);
    let newWord = word.slice(vowelIndx);
    newWord = newWord + cons + 'ay';
    return newWord;
  });
  return this.setState({
    translation: translation,
  });
}

findVowelIndx = (word) => {
  for (let i=0; i < word.length; i++) {
    console.log('wordcharat', word.charAt(0));
    if (word.charAt(i) === 'a' || 
        word.charAt(i) === 'e' ||
        word.charAt(i) === 'i' ||
        word.charAt(i) === 'o' ||
        word.charAt(i) === 'u')
    {
      console.log('coool', i); 
      return i;        
    }
  }
}

updateInput = ({target}) => {
  let input = target.value.toLowerCase();
  let inputArray = input.split(" ");
  this.setState(
    { translationInput: inputArray}
  );
  return;
}
render () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pig Latinator
        </h1>
        <form id="translationForm" onSubmit={this.translate}>
        <select name="translationOption" id ="translationOption">
          <option>English to Pig Latin</option>
          <option>Pig Latin to English</option>
        </select>
        <input id="translationInput" onChange={this.updateInput}></input>
        <button id="translateButton" type="submit">Translate!</button>
        </form>

        <section id="translationBox">
        {this.state.translation}
        </section>

      </header>
    </div>
  );
}
}

export default Translator;
