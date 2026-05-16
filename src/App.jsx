import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import AnalyticsMarketplaces from './pages/AnalyticsMarketplaces';
import AnalyticsWildberries from './pages/AnalyticsWildberries';
import AnalyticsOzon from './pages/AnalyticsOzon';
import Offer from './pages/legal/Offer';
import Privacy from './pages/legal/Privacy';
import PersonalData from './pages/legal/PersonalData';
import Refund from './pages/legal/Refund';
import Terms from './pages/legal/Terms';
// Add page imports here

const AuthenticatedApp = () => {
  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/analytics-marketplaces" element={<AnalyticsMarketplaces />} />
      <Route path="/analytics-wildberries" element={<AnalyticsWildberries />} />
      <Route path="/analytics-ozon" element={<AnalyticsOzon />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/personal-data" element={<PersonalData />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/plans" element={<Navigate to="/#pricing" replace />} />
    </Routes>
  );
};


export function App() {

  return (
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
  )
}
