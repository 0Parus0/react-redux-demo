import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../store/actions/cakeActions";
import { buyIceCream } from "../store/actions/iceCreamAction";

const CakeIceCreamHooks = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream)

    const dispatch = useDispatch();

    return (
        <>
        <div>
            <h1>Numbers of cakes hooks - {numOfCakes}  </h1>
            <button onClick={() => dispatch(buyCake())} >Buy Cake</button>
        </div>
        <div>
            <h1>Numbers of ice creams hooks - {numOfIceCream} </h1>
            <button onClick={() => dispatch(buyIceCream())} >Buy ice cream</button>
        </div>

        </>
    )
}

export default  CakeIceCreamHooks;