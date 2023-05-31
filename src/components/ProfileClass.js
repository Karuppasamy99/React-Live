import React from 'react';

export default class ProfileClass extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                count : 0,
                age : 0,
                userInfo : {}
            }
             console.log("child - constructor")
        }

        async componentDidMount() {
            const url = await fetch('https://api.github.com/users');
            const data = await url.json();
            console.log(data);
            this.setState({
                            userInfo: {
                                loginUser: data[0].login
                            }
                        })
            console.log(this.state.userInfo.loginUser);
            console.log("child - componentDidMount")

            this.interval = setInterval(() =>{console.log(this.state.userInfo.loginUser)},1000)
        }

        componentDidUpdate(prevProps, nextProps) {
            console.log("child - componentDidUpdate")
        }
        componentWillUnmount(){
            clearInterval(this.interval);
        }
    render() {
         console.log("render")
        return (
            <div>
                <h1>Profile Class {this.props.age}</h1>
                {this.state.count}
                <button onClick ={ () => this.setState({
                    count: this.state.count + 1,
                    age : 1
                })}>Click me</button>
                <hr />
            </div>
        );
    }
}