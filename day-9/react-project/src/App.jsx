import './App.css'
import Example1 from './hooks/useCounter'
import ThrottleExample from './components/throttling'
import DebounceExample from './components/debouncedSearch'
import Example2_useFetch from './hooks/useFetch'

function App() {

  return (
    <>
    <Example1 />  
    <ThrottleExample />
    <DebounceExample />
    <Example2_useFetch />
    </>
  )
}

export default App
