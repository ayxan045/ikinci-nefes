import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HaqqimızdaPage from './pages/HaqqimızdaPage';
import XidmetlerPage from './pages/XidmetlerPage';
import PsixoloqlarPage from './pages/PsixoloqlarPage';
import TestlerPage from './pages/TestlerPage';
import BloqPage from './pages/BloqPage';
import ElaqePage from './pages/ElaqePage';
import DepressiyaMualicesiPage from './pages/DepressiyaMualicesiPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                                    element={<HomePage />} />
        <Route path="/haqqimizda"                          element={<HaqqimızdaPage />} />
        <Route path="/xidmetler"                           element={<XidmetlerPage />} />
        <Route path="/xidmetler/depressiya-mualicesi"      element={<DepressiyaMualicesiPage />} />
        {/* TODO: add individual service detail pages */}
        <Route path="/psixoloqlar"                         element={<PsixoloqlarPage />} />
        {/* TODO: /psixoloqlar/:id  — PsixoloqDetailPage */}
        <Route path="/testler"                             element={<TestlerPage />} />
        {/* TODO: /testler/:slug    — TestDetailPage */}
        <Route path="/bloq"                                element={<BloqPage />} />
        {/* TODO: /bloq/:slug       — BlogPostDetailPage */}
        <Route path="/elaqe"                               element={<ElaqePage />} />
        <Route path="*"                                    element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
