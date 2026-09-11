export const SURFACES = {
  mobile: {
    name: "Mobile",
    width: 360,
    height: 640,
    breakpoint: "Small screen"
  },

  tablet: {
    name: "Tablet",
    width: 768,
    height: 600,
    breakpoint: "Medium screen"
  },

  desktop: {
    name: "Desktop",
    width: 1200,
    height: 700,
    breakpoint: "Large screen"
  },

  banner: {
    name: "Banner",
    width: 970,
    height: 250,
    breakpoint: "Wide banner"
  }
};

export function calculateLayout(surface, ad) {
  const config = SURFACES[surface];

  if (!config) {
    return getMobileLayout(ad);
  }

  switch (surface) {
    case "mobile":
      return getMobileLayout(ad);

    case "tablet":
      return getTabletLayout(ad);

    case "desktop":
      return getDesktopLayout(ad);

    case "banner":
      return getBannerLayout(ad);

    default:
      return getMobileLayout(ad);
  }
}

function getMobileLayout(ad) {
  return {
    surface: "mobile",
    width: 360,
    height: 640,

    container: {
      direction: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "28px",
      gap: "20px"
    },

    image: {
      width: "100%",
      height: "230px",
      order: 1,
      borderRadius: "20px"
    },

    content: {
      width: "100%",
      order: 2,
      textAlign: "center"
    },

    title: {
      fontSize: "30px",
      lineHeight: "1.1"
    },

    description: {
      fontSize: "15px",
      lineHeight: "1.5"
    },

    button: {
      width: "100%",
      padding: "14px 24px"
    }
  };
}

function getTabletLayout(ad) {
  return {
    surface: "tablet",
    width: 768,
    height: 600,

    container: {
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "45px",
      gap: "35px"
    },

    image: {
      width: "46%",
      height: "390px",
      order: 2,
      borderRadius: "24px"
    },

    content: {
      width: "50%",
      order: 1,
      textAlign: "left"
    },

    title: {
      fontSize: "42px",
      lineHeight: "1.08"
    },

    description: {
      fontSize: "17px",
      lineHeight: "1.6"
    },

    button: {
      width: "auto",
      padding: "14px 28px"
    }
  };
}

function getDesktopLayout(ad) {
  return {
    surface: "desktop",
    width: 1200,
    height: 700,

    container: {
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "70px",
      gap: "60px"
    },

    image: {
      width: "48%",
      height: "500px",
      order: 2,
      borderRadius: "30px"
    },

    content: {
      width: "48%",
      order: 1,
      textAlign: "left"
    },

    title: {
      fontSize: "64px",
      lineHeight: "1.02"
    },

    description: {
      fontSize: "19px",
      lineHeight: "1.7"
    },

    button: {
      width: "auto",
      padding: "16px 34px"
    }
  };
}

function getBannerLayout(ad) {
  return {
    surface: "banner",
    width: 970,
    height: 250,

    container: {
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "28px 40px",
      gap: "30px"
    },

    image: {
      width: "30%",
      height: "190px",
      order: 2,
      borderRadius: "18px"
    },

    content: {
      width: "65%",
      order: 1,
      textAlign: "left"
    },

    title: {
      fontSize: "34px",
      lineHeight: "1.1"
    },

    description: {
      fontSize: "14px",
      lineHeight: "1.4"
    },

    button: {
      width: "auto",
      padding: "10px 22px"
    }
  };
}