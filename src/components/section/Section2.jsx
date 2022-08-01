import React from 'react'
import Sections2 from '../includes/Sections2'
import axios from "axios";

class Section2 extends React.Component {
  state = {
    Award1: [],
    Award2: [],
  };

  getNews = async () => {
    const {
        data:{Award1}, data:{Award2}
    } = await axios.get(
      "https://raw.githubusercontent.com/BinCrow/react002json/main/data.json"
    );
    //console.log(data.Award1);
    this.setState({Award1})
    this.setState({Award2})
  }

  componentDidMount() {
    this.getNews()
  }

  render() {
    const {Award1} = this.state;
    const {Award2} = this.state;
    return (
      <Sections2 Award1={Award1} Award2={Award2}/>
    )
  }
}

export default Section2