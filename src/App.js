import "./styles.css";
import React, { PureComponent } from "react";
import User from "./User";

export default class App extends React.Component {
  // PureComponent lga dene se ye ek hi element ya kisi ke update hone pr use bar bar Rerender nhi karega,new updation pr hi Rerender karega
  // export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  render() {
    return (
      <div className="App">
        <User count={this.state.count} />
        {/* <button onClick={() => this.setState({ count:this.state.count+ 1 })}>
          Update Count
        </button> */}

        {/* ye wala console me to update hone dega lekin lekin screen pr vhi show hoga jo button me diya rkha hai */}
        <button onClick={() => this.setState({ count: 1 })}>
          Update Count
        </button>
      </div>
    );
  }
}

// import "./styles.css";
// import React,{PureComponent} from 'react'

// // export default class App extends React.Component{
//   // PureComponent lga dene se ye ek hi element ya kisi ke update hone pr use bar bar Rerender nhi karega,new updation pr hi Rerender karega
//   export default class User extends PureComponent{

//   constructor()
//   {
//     super();
//     this.state={
//       count:1,
//     }
//   }

//   render(){
//     // ye har click pr show hoga isi ko handle krne ke liye ham PURE COMPONENT ka use krte hai
//     console.log("check-Rerender")

//     return (
//       <div className="App">
//         <h2>Pure-Component {this.state.count}</h2>
//         {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button> */}
//         <button onClick={()=>this.setState({count:1})}>Update Count</button>
//       </div>
//     );

//   }
// }
