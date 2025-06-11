import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalHeader } from "./components/GlobalHeader";
import { Sidebar } from "./components/Sidebar";
import ManagePeople from "./pages/ManagePeople";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-background font-segoe">
        {/* Global Header */}
        <GlobalHeader />

        {/* Main Layout */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<ManagePeople />} />
              <Route path="/manage-people" element={<ManagePeople />} />
              {/* Placeholder routes */}
              <Route
                path="/home"
                element={
                  <div className="p-8">
                    <h1 className="text-2xl font-semibold text-neutral-1">
                      Home
                    </h1>
                    <p className="text-neutral-2 mt-4">
                      Home page coming soon...
                    </p>
                  </div>
                }
              />
              <Route
                path="/account"
                element={
                  <div className="p-8">
                    <h1 className="text-2xl font-semibold text-neutral-1">
                      Account
                    </h1>
                    <p className="text-neutral-2 mt-4">
                      Account settings coming soon...
                    </p>
                  </div>
                }
              />
              <Route
                path="/action-center"
                element={
                  <div className="p-8">
                    <h1 className="text-2xl font-semibold text-neutral-1">
                      Action Center
                    </h1>
                    <p className="text-neutral-2 mt-4">
                      Action center coming soon...
                    </p>
                  </div>
                }
              />
              <Route
                path="/launch-apps"
                element={
                  <div className="p-8">
                    <h1 className="text-2xl font-semibold text-neutral-1">
                      Launch Apps
                    </h1>
                    <p className="text-neutral-2 mt-4">
                      App launcher coming soon...
                    </p>
                  </div>
                }
              />
              <Route
                path="/manage-access"
                element={
                  <div className="p-8">
                    <h1 className="text-2xl font-semibold text-neutral-1">
                      Manage Access
                    </h1>
                    <p className="text-neutral-2 mt-4">
                      Access management coming soon...
                    </p>
                  </div>
                }
              />
              <Route
                path="/feedback"
                element={
                  <div className="p-8">
                    <h1 className="text-2xl font-semibold text-neutral-1">
                      Give Feedback
                    </h1>
                    <p className="text-neutral-2 mt-4">
                      Feedback form coming soon...
                    </p>
                  </div>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
