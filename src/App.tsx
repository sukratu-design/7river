import React from 'react'
import Homepage from './components/Homepage'
import SearchPage from './components/SearchPage'
import AlertsOverviewPage from './components/AlertsOverviewPage'
import HeatmapPage from './components/HeatmapPage'

function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'search' | 'alerts' | 'heatmap'>('home')

  const handleNavigateToSearch = () => {
    setCurrentPage('search')
  }

  const handleNavigateToHome = () => {
    setCurrentPage('home')
  }

  const handleNavigateToAlerts = () => {
    setCurrentPage('alerts')
  }

  const handleNavigateToHeatmap = () => {
    setCurrentPage('heatmap')
  }

  if (currentPage === 'heatmap') {
    return <HeatmapPage 
      onNavigateToHome={handleNavigateToHome} 
      onNavigateToSearch={handleNavigateToSearch}
      onNavigateToAlerts={handleNavigateToAlerts}
      onNavigateToHeatmap={handleNavigateToHeatmap}
      currentPage={currentPage}
    />
  }

  if (currentPage === 'alerts') {
    return <AlertsOverviewPage 
      onNavigateToHome={handleNavigateToHome} 
      onNavigateToSearch={handleNavigateToSearch}
      onNavigateToAlerts={handleNavigateToAlerts}
      onNavigateToHeatmap={handleNavigateToHeatmap}
      currentPage={currentPage}
    />
  }

  if (currentPage === 'search') {
    return <SearchPage 
      onNavigateToHome={handleNavigateToHome} 
      onNavigateToSearch={handleNavigateToSearch}
      onNavigateToAlerts={handleNavigateToAlerts}
      onNavigateToHeatmap={handleNavigateToHeatmap}
      currentPage={currentPage}
    />
  }

  return (
    <Homepage 
      onNavigateToSearch={handleNavigateToSearch}
      onNavigateToAlerts={handleNavigateToAlerts}
      onNavigateToHeatmap={handleNavigateToHeatmap}
      currentPage={currentPage}
    />
  )
}

export default App
