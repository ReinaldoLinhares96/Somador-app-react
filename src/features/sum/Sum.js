import React, {Component} from 'react';
import Header from '../../containers/header/Header';
import './Sum.css';

function SumNumbers(number1,number2){
  var result = 0;

    result = parseInt(number1) + parseInt(number2);

    return result;
}


class NumberInput extends Component {
  
    constructor(props){
      super(props);
      this.state = {
        number: ' '
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onNumberChange(e.target.value);
    }
  
    render() { 
      const number = this.props.number;

      return (
          <div className="NumberInput">
            <input value={number} onChange={this.handleChange} />
          </div>
        );
        
    }
  
  }

  class Sum extends Component{

      constructor(props){
        super(props);

        this.handleNumberChange1 = this.handleNumberChange1.bind(this);
        this.handleNumberChange2 = this.handleNumberChange2.bind(this);
        this.handleResultChange = this.handleResultChange.bind(this);
  
        this.state = {
          result: 0,
          number1: 0,
          number2: 0
        };
      }

      handleNumberChange1(e){       
        this.setState({number1: e});
      }

      handleNumberChange2(e){
        this.setState({number2: e});
      }

      handleResultChange(e){
        this.setState({result: e});
      }


      render(){
        const {title} = this.props;
        const result = this.state.result;
        const number1 = this.state.number1;
        const number2 = this.state.number2;

        const sum = result !== null ? SumNumbers(parseInt(number1),parseInt(number2)) : result;

        return(
            <div className='Sum'>
              <Header title={title}/>
              <div className='Inputs'> 
               <label> <NumberInput onNumberChange={this.handleNumberChange1} /> </label>
               <label> <NumberInput onNumberChange={this.handleNumberChange2} /> </label>  
              </div>
              <div className='InputResult'>
                <input type='text' onChange={this.handleResultChange} value={sum.toString()}/>
              </div>
            </div>
        );
      }
  }
  
  export default Sum;