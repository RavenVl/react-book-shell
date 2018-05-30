import React from 'react';
import {sendData, socetConect} from './socetConect'
class Chats extends React.Component {

    constructor(){
        super();
        socetConect(this.handleSocetReceive);
        this.state={
            message:[]
        };
    }
    handleClick= (e)=>{
        e.preventDefault();
        let name = this.userName.value;
        let message = this.message.value;
        sendData({name, message});
    };
    handleSocetReceive = (err,data)=>{
        let newMessage = Array.from(this.state.message);
        newMessage.push(data);
        this.setState({message: newMessage});
        console.log(this.state.message);
    };

    render(){
        return (
            <div>
                <h1>Chats</h1>
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Enter Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="formGroupExampleInput"
                                       placeholder="Name"
                                       ref={(val)=>this.userName=val}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Enter message</label>
                                <input type="text"
                                       className="form-control"
                                       id="formGroupExampleInput2"
                                       placeholder="Message"
                                       ref={(val)=>this.message=val}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2" onClick={this.handleClick}>Send message</button>
                        </form>
                    </div>
                    <div className="col">
                        <ul className="list-group">
                            {this.state.message.map((mes, ind)=>(
                                <li key={ind} className="list-group-item d-flex justify-content-between align-items-center">
                                    {mes.message}
                                    <span className="badge badge-primary badge-pill">{mes.name}</span>
                                </li>
                            ))}


                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
export default Chats;