import React, {Component} from 'react';

class UploadAllChannels extends Component {

  state = {
    allChannelsCSV: null
  }

  handleFile(e){
    let allChannelsCSV = e.target.files[0]

    this.setState({allChannelsCSV: e})
  }

  render() {
    return (
      <div className="UploadAllChannels">
          <label>Please Upload the data for CSATS for <b>All Channels</b></label>
          <br/>
          <input type="file" name="allchannels" onChange={(e) => this.handleFile(e)}></input>
      </div>
    )
  }

}

export default UploadAllChannels;
