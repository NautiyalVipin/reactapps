import Hero from "./Pages/Hero";
import Nav from "./Nav";
import {Routes,Route,HashRouter} from "react-router-dom"
import Todo from "./Pages/Todo";
import Space from "./Pages/Space/Space";
import {
QueryClient,
QueryClientProvider,
} from '@tanstack/react-query'
import Game from "./Pages/Game";



function App() {  
  

  const client = new QueryClient()
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="hero" element={<Hero />} />
         <Route path="todo" element={<Todo />} />
         <Route path="" element={<QueryClientProvider client={client}><Space /></QueryClientProvider>} />
        <Route path="gameapi" element={<Game />} />
      </Route>
    </Routes>
  </HashRouter>
  
    
  
  
    )
}

export default App;
