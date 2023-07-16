import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeIceCreamhooks from './components/CakeIceCreamHooks'
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
    return (
        <div>
            <UserContainer />
            <ItemContainer cake/>
            <ItemContainer />
            <CakeIceCreamhooks />
            <CakeContainer />
            <IceCreamContainer />
        </div>
    )
}


export default  App;