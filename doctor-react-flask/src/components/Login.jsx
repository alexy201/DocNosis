import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'Login',
            registering: false,
            height: '430px',
            doctor: false,
            marginTop: '10px'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchMode = this.switchMode.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    handleCheckBox(event) {
        // TODO: Go to the dashboard.
        if (!this.state.doctor) {
            this.setState({ height: '480px', doctor: true, marginTop: '32px' });
        }
        else {
            this.setState({ height: '430px', doctor: false, marginTop: '10px' })
        }
    }
    handleSubmit(event) {
        // TODO: Go to the dashboard.
        if (!this.state.doctor) {
            
        }
        else {
            
        }
    }
    switchMode(event) {
        console.log("switchMode")
        if (this.state.type == 'Login') {
            this.setState({ type: "Register" });
        } else {
            this.setState({ type: "Login" });
        }
    }
    render() {
        let fields;
        if (this.state.type == 'Login') {
            fields = <p></p>
        } else {
            fields =
                <div>
                    <form >
                        <label>
                            <input type="text" name="name" defaultValue={"Full Name"} onFocus={(e) => e.target.value = ""}
                                style={{ ...inputStyle, marginTop: '10px' }} />
                        </label>
                    </form>
                    <form >
                        <label>
                            <input type="text" name="contact" defaultValue={"Email address"} onFocus={(e) => e.target.value = ""}
                                style={{ ...inputStyle, marginTop: '10px' }} />
                        </label>
                    </form>

                    <form >
                        <label>
                            <input type="text" name="bio" defaultValue={"Short bio here"} onFocus={(e) => e.target.value = ""}
                                style={{ ...inputStyle, marginTop: '15px', width: '80%' }} />
                        </label>
                    </form>
                    <label>
                        <input type="checkbox" style={{ marginTop: '15px', display: 'inline-block' }} onClick={this.handleCheckBox} />
                        <p style={{ fontSize: '13px', display: 'inline-block', marginTop: '-15px' }}>Are you a doctor?</p>
                    </label>
                </div>
        }
        let newRegister;
        if (this.state.type == 'Login') {
            newRegister = <p style={{
                textAlign: 'center', margin: '0 auto', fontSize: '16px', marginTop: '60px',
                cursor: 'pointer'
            }} onClick={this.switchMode}> <u><i>New? Click here to register </i></u></p>
        } else {
            newRegister = <p></p>
        }

        let imageSelect = <p></p>;
        if (this.state.doctor) {
            imageSelect =
                <div>
                    <p style={{ marginTop: '2px', fontSize: '11px' }}><i>Upload verification (your ID)</i></p>
                    <form action="/action_page.php">
                        <input type="file" id="myFile" name="filename" color='white'
                            style={{ marginTop: '-8px' }}
                        />
                    </form></div>

        }
        return (
            // <div style={{ background: '#222', width: '100%', height: '100%' }}>

            <div style={{}}>
                {/* <h1 style={{ textAlign: 'center', marginTop: '50px', marginBottom: '40px' }}>Docnosis</h1> */}
                <h1 style={{
                    marginLeft: '150px', marginTop: '60px', marginBottom: '40px', fontSize: '60px'
                    , color: '#8a69c7'
                }}>Docnosis</h1>
                <div style={{
                    textAlign: 'center', borderRadius: '30px', width: '450px', height: this.state.height,
                    borderColor: 'black', marginTop: '87px', margin: '0 auto',
                    border: '0px solid black', boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.22)',
                    background: '#f5e8ff',
                    // background: 'rgba(240,240,240,0.3)',
                }}>
                    <h2 style={{
                        fontWeight: '400', paddingTop: '30px', width: '50%', textAlign: 'center', margin: '0 auto',
                        fontSize: '28px'
                    }}>{this.state.type}</h2>

                    <input
                        type="text"
                        value={this.props.searchString}
                        ref="searchStringInput"
                        defaultValue={"Username"}
                        style={{ ...inputStyle, marginTop: '40px' }}
                        onFocus={(e) => e.target.value = ""}
                        name="username"
                    />
                    <form >
                        <label>
                            <input type="text" name="password" defaultValue={"Password"} onFocus={(e) => e.target.value = ""}
                                style={{ ...inputStyle, marginTop: '10px' }} />
                        </label>
                    </form>

                    {fields}
                    {imageSelect}
                    <Link to={'/dashboard'}>
                        <input type="submit" style={{
                            borderRadius: '10px', padding: '7px', border: '0px', marginTop: this.state.marginTop,
                            paddingLeft: '15px', paddingRight: '15px', cursor: 'pointer', background: 'black', color: 'white'
                        }} onClick={this.handleSubmit} />
                    </Link>
                    {newRegister}


                </div>

            </div >
        )
    }
}

const inputStyle = {
    padding: '7px',
    paddingLeft: '12px',
    borderRadius: '10px',
    border: '0px solid black'
}