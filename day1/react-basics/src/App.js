import Header from './components/Header';
import NumberOps from './components/NumberOps';
import ProductList from './components/ProductList';
import TasksApp from './components/tasks-manager/TasksApp';

function App() {
  const title = 'React basics training';
  return (
    <>
      <Header title={title} subtitle='a simple app by Vinod' author='Vinod' />
      <div className='container'>
        {/* <NumberOps /> */}
        <TasksApp />
        {/* <ProductList /> */}
      </div>
    </>
  );
}

export default App;
