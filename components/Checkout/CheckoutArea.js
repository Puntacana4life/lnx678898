import React, { useEffect } from "react";

const CheckoutArea = () => {
  useEffect(() => {
    // Cargar el script de iframeResizer
    const script = document.createElement("script");
    script.src = "https://u2119.eto2.taxi/assets/plugins/iframe-resizer/iframeResizer.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Configurar la redimensión del iframe después de cargar el script
    script.onload = () => {
      window.iFrameResize({
        log: false,
        targetOrigin: '*',
        checkOrigin: false
      }, "iframe#eto-iframe-booking");
    };

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://u2119.eto2.taxi/booking?site_key=7e3f3d3085b900d598bc40543d611575"
      id="eto-iframe-booking"
      allow="geolocation"
      width="100%"
      height="250"
      scrolling="no"
      frameBorder="0"
      style={{ width: "1px", minWidth: "100%", border: "0" }}
    ></iframe>
  );
};

export default CheckoutArea;
