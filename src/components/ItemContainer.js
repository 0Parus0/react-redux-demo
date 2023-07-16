import { connect } from "react-redux";

import React from 'react'
import { buyCake } from "../store/actions/cakeActions";
import { buyIceCream } from "../store/actions/iceCreamAction";

function ItemContainer(props) {
  return (
    <div>
        <h1>item - {props.item}</h1>
        <button onClick={props.buyItem} >Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const item = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream;
    return {
        item
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);