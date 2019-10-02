/*eslint-disable */
import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { Button, Grid, Header } from "semantic-ui-react"
import Waveform from "./Waveform"
import { setDisplaySong } from "../actions"

class SongFeedComponent extends Component {
  goToUserProfile = e => {
    const user_id = this.props.songData.song.user.id
    this.props.history.push(`/profile/${user_id}`)
  }

  goToSongPage = e => {
    const song_id = this.props.songData.song.id
    this.props.history.push(`/songs/${song_id}`)
    // TODO Might not need to setdisplay song because also in SongShowPage render
    this.props.setDisplaySong(this.props.allSongs, this.props.history)
  }

  render() {
    const { songData } = this.props
    const { song } = songData
    const { user } = song
    return (
      <div className={`song-comp-${song.id}`}>
        <Grid.Row columns={4}>
          <Grid.Column>
            <span
              onClick={this.goToSongPage}
              style={{ fontWeight: "bold", cursor: "pointer" }}
            >
              {song.title}
            </span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column floated="left">
            {this.props.userClickEnabled ? null : (
              <span
                onClick={this.goToUserProfile}
                style={{ fontStyle: "italic", cursor: "pointer" }}
              >
                {user.username}
              </span>
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Waveform
            song={song}
            song_link={songData.song_link}
            waveHeight={100}
            responsive={true}
            splitChannels={false}
            mediaControls={true}
            maxCanvasWidth={500}
            showCommentCount={false}
          />
        </Grid.Row>
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    allSongs: state.allSongs
  }
}

export default connect(
  mapStateToProps,
  { setDisplaySong }
)(withRouter(SongFeedComponent))
