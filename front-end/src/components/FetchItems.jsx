import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

function FetchItems(){
    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;
    
        dispatch(fetchStatusActions.markFetchingStarted());
        fetch("https://myntra-clone-backend-api-chi.vercel.app/items", {signal})
        .then(res => res.json())
        .then(({items}) => {
            dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(itemsActions.addInitialItems(items));
        });

        return () => {
            controller.abort();
        };  
    }, [fetchStatus])

    return(
        <></>
    );
}

export default FetchItems;
