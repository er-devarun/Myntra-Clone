import HomeItem from "../components/HomeItem";
import { useSelector } from 'react-redux';

function Home(){
  const items = useSelector(store => store.items);
    return(
        <main>
          <div className="item-cards-container">
            {items.map(item => <HomeItem key={item.id} item={item}/>)}
          </div>
        </main>
    );
}

export default Home;