import { calculateLayout } from "../engine/layoutEngine";

function AdPreview({ ad, selectedSurface }) {
  const layout = calculateLayout(selectedSurface, ad);

  const containerStyle = {
    width: "100%",
    maxWidth: `${layout.width}px`,
    minHeight: `${layout.height}px`,
    flexDirection: layout.container.direction,
    justifyContent: layout.container.justifyContent,
    alignItems: layout.container.alignItems,
    padding: layout.container.padding,
    gap: layout.container.gap
  };

  const imageStyle = {
    width: layout.image.width,
    height: layout.image.height,
    order: layout.image.order,
    borderRadius: layout.image.borderRadius,
    objectFit: "cover"
  };

  const contentStyle = {
    width: layout.content.width,
    order: layout.content.order,
    textAlign: layout.content.textAlign
  };

  const titleStyle = {
    fontSize: layout.title.fontSize,
    lineHeight: layout.title.lineHeight
  };

  const descriptionStyle = {
    fontSize: layout.description.fontSize,
    lineHeight: layout.description.lineHeight
  };

  const buttonStyle = {
    width: layout.button.width,
    padding: layout.button.padding
  };

  return (
    <div className="preview-area">
      <div className="preview-header">
        <div>
          <span className="preview-label">LIVE PREVIEW</span>
          <h2>{selectedSurface.toUpperCase()}</h2>
        </div>

        <div className="dimensions">
          {layout.width} × {layout.height}px
        </div>
      </div>

      <div className="preview-stage">
        <div
          className={`ad-canvas ${selectedSurface}`}
          style={containerStyle}
        >
          <div className="ad-content" style={contentStyle}>
            <span className="ad-brand">{ad.brand}</span>

            <h2 style={titleStyle}>{ad.title}</h2>

            <p style={descriptionStyle}>{ad.description}</p>

            <button style={buttonStyle} className="ad-button">
              {ad.cta}
            </button>
          </div>

          <img
            src={ad.image}
            alt="Advertisement"
            className="ad-image"
            style={imageStyle}
          />
        </div>
      </div>

      <div className="engine-info">
        <div className="engine-badge">
          <span>✓</span>
          Adaptive layout applied
        </div>

        <span>
          Layout automatically optimized for {selectedSurface}.
        </span>
      </div>
    </div>
  );
}

export default AdPreview;