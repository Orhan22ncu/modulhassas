import { useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import Layout from './components/shared/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import MachineryPage from './pages/MachineryPage';
import QualityPage from './pages/QualityPage';
import ProjectsPage from './pages/ProjectsPage';
import ReferencesPage from './pages/ReferencesPage';
import ContactPage from './pages/ContactPage';

function LanguageRedirect() {
  return <Navigate to="/tr" replace />;
}

function LanguageRouter() {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (lang === 'en' || lang === 'tr') {
      setLanguage(lang);
    }
  }, [lang, setLanguage]);

  if (lang !== 'en' && lang !== 'tr') {
    return <Navigate to="/tr" replace />;
  }

  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="capabilities" element={<CapabilitiesPage />} />
        <Route path="machinery" element={<MachineryPage />} />
        <Route path="quality" element={<QualityPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="references" element={<ReferencesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LanguageRedirect />} />
      <Route path="/:lang/*" element={<LanguageRouter />} />
    </Routes>
  );
}
