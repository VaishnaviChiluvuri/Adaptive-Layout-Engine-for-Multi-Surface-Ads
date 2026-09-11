import { SURFACES } from "../engine/layoutEngine";

function SurfaceSelector({ selectedSurface, onSurfaceChange }) {
  return (
    <div className="surface-section">
      <div className="section-heading">
        <div>
          <h3>Target Surface</h3>
          <p>Choose where your advertisement will appear.</p>
        </div>
      </div>

      <div className="surface-grid">
        {Object.entries(SURFACES).map(([key, surface]) => (
          <button
            key={key}
            className={`surface-card ${
              selectedSurface === key ? "active" : ""
            }`}
            onClick={() => onSurfaceChange(key)}
          >
            <div className={`surface-icon ${key}`}>
              {key === "mobile" && "▯"}
              {key === "tablet" && "▭"}
              {key === "desktop" && "▣"}
              {key === "banner" && "▬"}
            </div>

            <div>
              <strong>{surface.name}</strong>
              <span>
                {surface.width} × {surface.height}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SurfaceSelector;