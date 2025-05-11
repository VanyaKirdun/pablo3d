import "./globals.css";
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingAnimation } from './components/common/LoadingAnimation';
import { RootLayout } from '@/pages/RootLayout';
import '@/components/functional/i18n'
import "flag-icons"

function App() {

  const Home = lazy(() => import("@/pages/home"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<Notfound />} /> */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Suspense fallback={<LoadingAnimation />}>
              <Home />
            </Suspense>} />
            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
