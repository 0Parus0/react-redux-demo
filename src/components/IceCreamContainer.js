import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../store/actions/iceCreamAction'

function IceCreamContainer(props) {
  return (
    <div>
      <h1>Number of ice creams - {props.numOfIceCream} </h1>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream() {
      return dispatch(buyIceCream());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)