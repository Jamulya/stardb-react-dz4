import React from 'react';


const Row = ({leftComponent, rightComponent}) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {leftComponent}
      </div>
      <div className="col-md-6">
        {rightComponent}
      </div>
    </div>
  )
}

export default Row
