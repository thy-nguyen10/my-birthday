
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"

const App = () =>  {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Intro/>
      <div className="flex justify-center mt-10">
      </div>
    </div>
  )
}

export default App
