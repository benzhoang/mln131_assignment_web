import { useState } from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import TransitionStagesPage from './pages/TransitionStagesPage'
import SocialismCharacteristicsPage from './pages/SocialismCharacteristicsPage'
import VietnamPracticePage from './pages/VietnamPracticePage'
import QuizPage from './pages/QuizPage'
import AIUsagePage from './pages/AIUsagePage'
import VietNameSocialism from './pages/VietNameSocialism'

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />
      case 'transition-stages':
        return <TransitionStagesPage />
      case 'socialism-vietnam':
        return <VietNameSocialism />
      case 'socialism-characteristics':
        return <SocialismCharacteristicsPage />
      case 'vietnam-practice':
        return <VietnamPracticePage />
      case 'quiz':
        return <QuizPage />
      case 'ai-usage':
        return <AIUsagePage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <main className="flex-1 overflow-auto">
        <div className="bg-white min-h-screen">
          {renderPage()}
        </div>
      </main>
    </div>
  )
}

export default App
