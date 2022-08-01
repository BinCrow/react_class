import React from 'react'
import Sections5 from '../includes/Sections5'
import axios from "axios";

class Section5 extends React.Component {
  state = {
    youtube: [],
  };

  getNews = async () => {
    const {
        data:{youtube}
    } = await axios.get(
      "https://raw.githubusercontent.com/BinCrow/react002json/main/data.json"
    );
    //console.log(data.youtube);
    this.setState({youtube})
  }

  componentDidMount() {
    this.getNews()
  }

  render() {
    const {youtube} = this.state;
    return (
      <Sections5 youtube={youtube}/>
    )
  }
}

export default Section5