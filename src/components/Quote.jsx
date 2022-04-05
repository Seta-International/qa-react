import React from 'react'

function Quote(props) {
  return (
    <div data-test="quote">
      {props.quote}
    </div>
  )
}

export default Quote;
