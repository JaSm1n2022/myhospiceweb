import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfUse from './pages/TermsOfUse.jsx'
import NoticePrivacyPractices from './pages/NoticePrivacyPractices.jsx'
import Accessibility from './pages/Accessibility.jsx'
import AiImageNotice from './pages/AiImageNotice.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/notice-privacy-practices" element={<NoticePrivacyPractices />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/ai-image-notice" element={<AiImageNotice />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
