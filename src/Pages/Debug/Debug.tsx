
import React from 'react';
import { connect } from 'react-redux';

export class Debug extends React.Component {
  render() {
    return (<>Debug mode</>)
  }
}


const CounterOutput = (props) => (
  <div className="CounterOutput">
    Current Counter: {props.value}
  </div>
);


const CounterControl = (props) => (
  <button className="CounterControl" onClick={props.clicked}>
    {props.label}
  </button>
);



class Counter extends React.Component<any, any>{
  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'add':
        this.setState((prevState) => { return { counter: prevState.counter + value } })
        break;
      case 'sub':
        this.setState((prevState) => { return { counter: prevState.counter - value } })
        break;
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)} />
        <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract(5)} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch=>({
  onIncrementCounter: ()=>dispatch({type:'INCREMENT'}),
  onDecrementCounter: ()=>dispatch({type:'DECREMENT'}),
  onAdd: (toAdd)=>dispatch({type:'ADD', data:toAdd}),
  onSubtract: (toSubtract)=>dispatch({type:'SUBTRACT', data:toSubtract })
})

export const CounterComponent = connect(mapStateToProps, mapDispatchToProps)(Counter)