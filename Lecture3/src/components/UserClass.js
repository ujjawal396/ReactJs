import { Component } from "react";


class UserClass extends Component{
    constructor(){
        super();

        this.state={
            count:0,



        }

        
    }

    render() {
        const {count}=this.state;
            return (

     <div className="user-card">
      <h1>Count :{count}</h1>
      <button onClick={()=>{
        this.setState(
            {
            count:this.state.count+1
        }
        );
      }}>click</button>
      <h1>Count2 </h1>
      <h2>Name</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div> 
                
     );

        };
}

export default UserClass;