import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import FetchItems from '../components/FetchItems'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import { Suspense } from 'react'

function App() {
  const {fetchDone, currentlyFetching} = useSelector(store => store.fetchStatus)
  return (
    <>
      <Header/>
      <FetchItems/>
      {currentlyFetching ? <LoadingSpinner/> : <Suspense><Outlet/></Suspense>}
      <Footer/>
    </>
  )
}

export default App
