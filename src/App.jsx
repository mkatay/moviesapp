import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Trendings } from './components/Trendings'
import { Movies } from './components/Movies'
import { Series } from './components/Series'
import { BottomNav } from './components/BottomNav'
import {QueryClient,QueryClientProvider} from 'react-query'

const queryClient=new QueryClient()

function App() {

  return (
    <BrowserRouter>  
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="app">
       <Routes>
        <Route path='/' element={<Trendings />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
       </Routes>
      </div>
      <BottomNav />
      </QueryClientProvider>
    </BrowserRouter>
    
  )
}

export default App
