import "./styles.css";
import React, { PureComponent } from "react";

// PureComponent lga dene se ye ek hi element ya kisi ke update hone pr use bar bar Rerender nhi karega,new updation pr hi Rerender karega
export default class User extends PureComponent {
  // export default class User extends React.Component{
  render() {
    console.log("User component check-Rerendring");

    return (
      <div className="App">
        <h2>User-Component {this.props.count}</h2>
      </div>
    );
  }
}
