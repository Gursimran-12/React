import Example_withLoading from './components/HOCs/withLoadingHoc'
import Example_withLogger from './components/HOCs/withLogger'
import Example_withToggle from './components/HOCs/withToggle'
import Example1_ChildrenProp from './composition/childrenProp'
import Example2_CompoundComponents from './composition/compoundComponent'
import Example3_RenderProps from './composition/renderProp'

function App() {


  return (
    <>
    <Example_withLoading />
    <Example_withLogger />
    <Example_withToggle />
    <hr />
    <Example1_ChildrenProp />
    <hr />
    <Example2_CompoundComponents />
    <hr />
    <Example3_RenderProps />
    </>
  )
}

export default App
