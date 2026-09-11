import { useState } from "react";

import Header from "./components/Header";
import AdEditor from "./components/AdEditor";
import AdPreview from "./components/AdPreview";
import SurfaceSelector from "./components/SurfaceSelector";

import "./App.css";

function App() {
  const [selectedSurface, setSelectedSurface] = useState("desktop");

  const [ad, setAd] = useState({
    brand: "NOVA",
    title: "Make every moment count.",
    description:
      "Discover products designed to make your everyday experience better.",
    cta: "Explore Now",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
  });

  const resetAd = () => {
    setAd({
      brand: "NOVA",
      title: "Make every moment count.",
      description:
        "Discover products designed to make your everyday experience better.",
      cta: "Explore Now",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
    });

    setSelectedSurface("desktop");
  };

  return (
    <div className="app">
      <Header />

      <main className="main-container">

        <div className="intro">
          <div>
            <span className="eyebrow">FRONTEND R&D</span>

            <h2>Adaptive Layout Engine</h2>

            <p>
              Create one advertisement and automatically optimize its layout
              for multiple digital surfaces.
            </p>
          </div>

          <button className="reset-button" onClick={resetAd}>
            ↻ Reset
          </button>
        </div>

        <div className="workspace">

          <aside className="sidebar">

            <AdEditor
              ad={ad}
              setAd={setAd}
            />

            <div className="divider"></div>

            <SurfaceSelector
              selectedSurface={selectedSurface}
              onSurfaceChange={setSelectedSurface}
            />

          </aside>

          <section className="preview-panel">

            <AdPreview
              ad={ad}
              selectedSurface={selectedSurface}
            />

          </section>

        </div>

        <section className="how-it-works">

          <div className="section-heading center">
            <span className="eyebrow">HOW IT WORKS</span>

            <h2>One creative. Multiple surfaces.</h2>

            <p>
              The layout engine evaluates the target surface and applies
              optimized layout rules automatically.
            </p>
          </div>

          <div className="steps">

            <div className="step">
              <div className="step-number">01</div>

              <h3>Input</h3>

              <p>
                Define your advertisement content, image and call-to-action.
              </p>
            </div>

            <div className="step">
              <div className="step-number">02</div>

              <h3>Analyze</h3>

              <p>
                The engine identifies the target surface and its available
                dimensions.
              </p>
            </div>

            <div className="step">
              <div className="step-number">03</div>

              <h3>Adapt</h3>

              <p>
                Layout, typography, spacing and image positioning are adjusted
                automatically.
              </p>
            </div>

            <div className="step">
              <div className="step-number">04</div>

              <h3>Render</h3>

              <p>
                The optimized advertisement is rendered instantly in the
                preview.
              </p>
            </div>

          </div>

        </section>

      </main>

      <footer>
        Adaptive Ads · Frontend R&D Assignment
      </footer>
    </div>
  );
}

export default App;