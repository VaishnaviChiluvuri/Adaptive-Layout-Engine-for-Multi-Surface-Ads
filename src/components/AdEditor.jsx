function AdEditor({ ad, setAd }) {
  const updateField = (field, value) => {
    setAd((previous) => ({
      ...previous,
      [field]: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setAd((previous) => ({
      ...previous,
      image: imageURL
    }));
  };

  return (
    <div className="editor">
      <div className="section-heading">
        <div>
          <h3>Advertisement</h3>
          <p>Configure your creative.</p>
        </div>
      </div>

      <div className="form-group">
        <label>Brand Name</label>

        <input
          type="text"
          value={ad.brand}
          onChange={(e) => updateField("brand", e.target.value)}
          placeholder="Enter brand name"
        />
      </div>

      <div className="form-group">
        <label>Headline</label>

        <textarea
          value={ad.title}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="Enter headline"
          rows="3"
        />
      </div>

      <div className="form-group">
        <label>Description</label>

        <textarea
          value={ad.description}
          onChange={(e) => updateField("description", e.target.value)}
          placeholder="Enter description"
          rows="4"
        />
      </div>

      <div className="form-group">
        <label>Call to Action</label>

        <input
          type="text"
          value={ad.cta}
          onChange={(e) => updateField("cta", e.target.value)}
          placeholder="Shop Now"
        />
      </div>

      <div className="form-group">
        <label>Advertisement Image</label>

        <label className="upload-box">
          <span>＋</span>
          <div>
            <strong>Upload image</strong>
            <small>PNG, JPG or WEBP</small>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      </div>
    </div>
  );
}

export default AdEditor;