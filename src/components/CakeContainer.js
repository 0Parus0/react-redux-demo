import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../store/actions/cakeActions';

function CakeContainer(props) {
  
  return (
    <div>
      <h1>Numbers of cake - {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake() {
      return dispatch(buyCake())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);