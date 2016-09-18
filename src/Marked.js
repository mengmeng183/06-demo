import React, { PropTypes } from 'react'
import marked from 'marked';
// console.log(marked('I am a __girl__'));
class Marked extends React.Component {
  render () {
    let content = marked('# hhh')
    return(
      <div>
        <div dangerouslySetInnerHTML = {{__html:content}}/>

      </div>
    )
  }
}

export default Marked;
