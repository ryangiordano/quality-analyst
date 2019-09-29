import * as $ from 'jquery';


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

  async componentDidMount(){
    // const url= "http://www.jamescard.org/qa/login";
    // let headers = new Headers();
    
    // let dataPrefix = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:arg="http://www.navis.com/services/argobasicservice"><soapenv:Header/><soapenv:Body><arg:basicInvoke><arg:scopeCoordinateIds>APMT/USLAX/LAX/LAX</arg:scopeCoordinateIds><arg:xmlDoc><![CDATA[';
    // let dataSuffix = ']]></arg:xmlDoc></arg:basicInvoke></soapenv:Body></soapenv:Envelope>';

    // headers.append('Content-Type', 'text/xml');
    // headers.append('SOAPAction', 'basicInvoke');

    // let text = `<wsiLogin>
    // <username>ryan</username>
    // <password>giordano</password>
    // </wsiLogin>`
    // const res = await fetch(url, {
    //   method: 'POST',
    //   body: "\r\n <wsiLogin>\r\n <username>ryan</username>\r\n <password>giordano</password>\r\n </wsiLogin>\r\n\r\n",
    //   headers: {
    //     "Content-Type": "application/xml",
    //     "User-Agent": "PostmanRuntime/7.17.1",
    //     "Accept": "*/*",
    //     "Cache-Control": "no-cache",
    //     "Postman-Token": "d765ecd9-f10c-404a-ae74-c0c054dda899,d042b33a-3b6d-44d0-b9ac-b1e0471b2275",
    //     "Host": "www.jamescard.org",
    //     "Accept-Encoding": "gzip, deflate",
    //     "Content-Length": "91",
    //     "Connection": "keep-alive",
    //     "cache-control": "no-cache"
    //   },
    //   credentials: 'include'
    // });
    // console.log(res)
    console.log(process.env)
    var settings = {
      "async": true,
      // "crossDomain": true,
      "url": "http://www.jamescard.org/qa/login",
      "method": "POST",
      "headers": {
        "Content-Type": "application/xml",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        // "Host": "www.jamescard.org",
        // "Accept-Encoding": "gzip, deflate",
        // "Content-Length": "91",
        // "Connection": "keep-alive",
        "cache-control": "no-cache"
      },
      "data": `\r\n <wsiLogin>\r\n <username>${process.env.REACT_APP_USERNAME}</username>\r\n <password>${process.env.REACT_APP_PASSWORD}</password>\r\n </wsiLogin>\r\n\r\n`
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
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