import React from 'react'
import Profile from './Profile'
import ProfileClass from './ProfileClass'
class About extends React.Component {
  constructor(props) {
    super(props)
    console.log(`parent: ${this.props}`)
  }
  componentDidMount() {
    setTimeout(() => console.log("parent - componentDidMount"),1000)
  }

  render() {
    console.log(`parent render`)
  return (
    <div>
        <h1>About</h1>
        <p>This is about us page</p>
        {/* <Profile age='23'/>
        <hr />
        <ProfileClass age='24'/> */}
    </div>
    
  )
  }
}

export default About