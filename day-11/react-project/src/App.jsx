import FormsCompleteTutorial from "./components/fullprogram"
import ControlledForm from "./components/controlled"
import UncontrolledForm from "./components/uncontrolled"
import ThemeSwitcher from "./understanding-context/basicContext"
import AdvancedContext from "./understanding-context/advancedContext"
import Context from "./understanding-context/stateManagement"
import MiniRedux from "./understanding-context/redux"

function App() {


  return (
    <>
    {/* <FormsCompleteTutorial /> */}
    <hr />
    {/* <ControlledForm /> */}
    <hr />
    <UncontrolledForm />
    <hr />
    <ThemeSwitcher />
    <hr />
    <AdvancedContext />
    <hr />
    <Context />
    <hr />
    <MiniRedux />
    
    </>
  )
}

export default App
