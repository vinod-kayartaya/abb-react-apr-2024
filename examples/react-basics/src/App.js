import Footer from './components/Footer';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import NumberOps from './components/NumberOps';
// import ProductList from './components/ProductList';
// import TasksApp from './components/tasks-manager/TasksApp';

function App() {
  const title = 'React basics training';
  return (
    <>
      <Header title={title} subtitle='a simple app by Vinod' author='Vinod' />
      <div className='container'>
        {/* <NumberOps /> */}
        {/* <TasksApp /> */}
        {/* <ProductList /> */}
        <MovieList />
      </div>
      <Footer />
    </>
  );
}

export default App;
