import React, { PropTypes } from 'react';
import {searchGit} from './utils/helper';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:false,
      inputValue:'userName'
    }
  }
  componentDidMount(){
    // searchGit('consoleplog')
    // .then((data)=>{
    //   this.setState({
    //     data:data.data,
    //     wait:false,
    //     inputValue:'userName'
    //   })
    // })
  }
  handleInput(e){
    let value = e.target.value
    this.setState({
      inputValue:value
    })
  }
  btnClick(){
    let name = this.state.inputValue
    this.setState({wait:true})
    searchGit(name)
    .then((resData)=>{
      this.setState({
        data:resData.getData,
        wait:false
      })
    })
  }
  render () {
    let gitInfo = (
      <div>
        <h3>{this.state.data.name}</h3>
        <img src={this.state.data.avatar_url}  className="img-circle"/>
      </div>
    )
    return(
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
        <button onClick={this.btnClick.bind(this)}>搜索</button><br />
        { this.state.wait ? '正在获取数据' : gitInfo }
      </div>
    )
  }
}

export default About;
