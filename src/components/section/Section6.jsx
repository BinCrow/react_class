import React from 'react'
import Sections6 from '../includes/Sections6'
import axios from "axios";

class Section6 extends React.Component {
  state = {
    Story: [],
  };

  getNews = async () => {
    const {
        data:{Story}
    } = await axios.get(
      "https://raw.githubusercontent.com/BinCrow/react002json/main/data.json"
    );
    //console.log(data.Story);
    this.setState({Story})
  }

  componentDidMount() {
    this.getNews()
  }

  render() {
    const {Story} = this.state;
    return (
      <Sections6 Story={Story}/>
    )
  }
}

export default Section6