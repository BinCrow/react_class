import React from 'react'
import Sections3 from '../includes/Sections3'
import axios from "axios";

class Section3 extends React.Component {
  state = {
    Actor: [],
  };

  getNews = async () => {
    const {
        data:{Actor}
    } = await axios.get(
      "https://raw.githubusercontent.com/BinCrow/react002json/main/data.json"
    );
    //console.log(data.Actor);
    this.setState({Actor})
  }

  componentDidMount() {
    this.getNews()
  }

  render() {
    const {Actor} = this.state;
    return (
      <Sections3 Actor={Actor}/>
    )
  }
}

export default Section3