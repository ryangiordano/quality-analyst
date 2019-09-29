
import React from 'react';


export class Debug extends React.Component {
  render(){
    return (<>Debug mode</>)
  }
}


const CounterOutput = (props) => (
    <div className="CounterOutput">
        Current Counter: {props.value}
    </div>
);


const CounterControl = (props) => (
    <div className="CounterControl" onClick={props.clicked}>
        {props.label}
    </div>
);



export class Counter extends React.Component<any, any>{
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.state.counter} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'add', 1 )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'sub', 1 )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}
