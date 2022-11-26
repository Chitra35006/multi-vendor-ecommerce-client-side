import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div data-theme="cupcake" className="max-w-[1440px] mx-auto">
     <RouterProvider
     router={router}
     ></RouterProvider>
    </div>
  );
}

export default App;
