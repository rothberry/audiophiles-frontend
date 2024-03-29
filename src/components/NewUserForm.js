/*eslint-disable */
import React, { Component } from "react"
import { Button, Form, Header, Segment, Image, Label } from "semantic-ui-react"
import { connect } from "react-redux"
import { registerUser } from "../actions"
import { withRouter } from "react-router-dom"
const audioWaveImg =
  "https://library.kissclipart.com/20180919/pww/kissclipart-sound-wave-vector-clipart-sound-wave-79091298684b3993.png"

class NewUserForm extends Component {
  state = {
    username: "",
    name: "",
    password: "",
    location: "",
    bio: "",
    // img_url: "",
    facebook_url: "",
    twitter_url: "",
    soundcloud_url: "",
    image_link: "",
  }

  handleCreateNewUser = (e) => {
    e.preventDefault()
    // let userFormData = new FormData()
    // debugger

    this.props.registerUser(this.state, this.props.history)
  }

  handleNewUserChange = (e) => {
    const targetValue = e.target.value
    const targetName = e.target.name
    this.setState({ [targetName]: targetValue })
  }

  onImageAdded = (e) => {
    const targetImageLink = e.target.files[0]
    this.setState({ image_link: targetImageLink })
  }

  render() {
    // console.log(this.state)
    const newUserStyle = { margin: "5% 30%" }
    return (
      <div className='new-user-container'>
        <Segment size='medium' style={newUserStyle}>
          <Form className='new-user-form' onSubmit={this.handleCreateNewUser}>
            <Form.Field>
              <Header as='h1'>
                <Image src={audioWaveImg} size='large' />
                Create Your Profile!
              </Header>
              <br />
              <Form.Input
                onChange={this.handleNewUserChange}
                placeholder='Name'
                type='text'
                name='name'
              />
              <Form.Input
                onChange={this.handleNewUserChange}
                placeholder='Username'
                type='text'
                name='username'
              />

              <Form.Input
                onChange={this.handleNewUserChange}
                placeholder='Password'
                type='password'
                name='password'
              />
              <Form.Input
                onChange={this.handleNewUserChange}
                placeholder='Location'
                type='text'
                name='location'
              />
              <Form.Input
                onChange={this.handleNewUserChange}
                placeholder='Bio'
                type='textArea'
                name='bio'
              />
            </Form.Field>
            <Form.Field>
              {/* TODO ADD AWS UPLOAD FEATURE */}
              <Label>Upload your Profile Pic</Label>
              <input
                type='file'
                accept='image/*'
                onChange={this.onImageAdded}
              />

              {/* <Form.Input
                onChange={this.handleNewUserChange}
                placeholder='Image Url'
                type='text'
                name='img_url'
              /> */}
              <Form.Input
                onChange={this.handleNewUserChange}
                placeholder='Facebook Url'
                type='text'
                name='facebook_url'
              />
              <Form.Input
                onChange={this.handleNewUserChange}
                placeholder='Twitter Url'
                type='text'
                name='twitter_url'
              />
              <Form.Input
                onChange={this.handleNewUserChange}
                placeholder='SoundCloud Url'
                type='text'
                name='soundcloud_url'
              />
            </Form.Field>
            <Button type='submit' primary fluid size='large'>
              SignUp!
            </Button>
          </Form>
        </Segment>
      </div>
    )
  }
}

export default connect(null, { registerUser })(withRouter(NewUserForm))
