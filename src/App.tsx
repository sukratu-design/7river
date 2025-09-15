import React from 'react'
import Homepage from './components/Homepage'
import SearchPage from './components/SearchPage'
import AlertsOverviewPage from './components/AlertsOverviewPage'

function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'search' | 'alerts'>('home')

  const handleNavigateToSearch = () => {
    setCurrentPage('search')
  }

  const handleNavigateToHome = () => {
    setCurrentPage('home')
  }

  const handleNavigateToAlerts = () => {
    setCurrentPage('alerts')
  }

  if (currentPage === 'alerts') {
    return <AlertsOverviewPage 
      onNavigateToHome={handleNavigateToHome} 
      onNavigateToSearch={handleNavigateToSearch}
      onNavigateToAlerts={handleNavigateToAlerts}
      currentPage={currentPage}
    />
  }

  if (currentPage === 'search') {
    return <SearchPage 
      onNavigateToHome={handleNavigateToHome} 
      onNavigateToSearch={handleNavigateToSearch}
      onNavigateToAlerts={handleNavigateToAlerts}
      currentPage={currentPage}
    />
  }

  return (
    <Homepage 
      onNavigateToSearch={handleNavigateToSearch}
      onNavigateToAlerts={handleNavigateToAlerts}
      currentPage={currentPage}
    />
  )
}

export default App
