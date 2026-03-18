import './App.css'
import SimpleCounter from './components/counter'
import LivePreview from './components/inputLivePreview'
import ToggleButton from './components/simpleToggleButton'
import Todo from './components/TodoApp/todo'
import SubmitForm from './components/form/submitForm'

function App() {
  return (
    <>
    
    {/* calling simple counter here */}
    <SimpleCounter />

    {/* calling the component related to live text preview */}
    <LivePreview />

    {/* calling the component related to toggle the text */}
    <ToggleButton />

    {/* calling the component related to To-do App */}
    <Todo />

    {/* calling the components related to Submit form */}
    <SubmitForm />

    </>
  )
}

export default App
