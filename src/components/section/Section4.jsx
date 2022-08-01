import React from 'react'
import Sections4 from '../includes/Sections4'
import axios from "axios";

class Section4 extends React.Component {
  state = {
    Poster1: [],
    Poster2: [],
  };

  getPosters = async () => {
    //배열구조 분해 할당
    const {
        data:{Poster1}, data:{Poster2}
    } = await axios.get(
      "https://raw.githubusercontent.com/BinCrow/react002json/main/data.json"
    );
    //console.log(data.Award1);
    this.setState({Poster1})
    this.setState({Poster2})
  }

  componentDidMount() {
    this.getPosters()
  }

  render() {
    const {Poster1} = this.state;
    const {Poster2} = this.state;
    return (
      <Sections4 Poster1={Poster1} Poster2={Poster2}/>
    )
  }
}

export default Section4