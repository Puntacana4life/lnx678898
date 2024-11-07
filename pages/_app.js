import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import Loader from '../components/Shared/Loader';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';


import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "../styles/line-awesome.min.css";
import "../styles/flaticon.css";
import "../styles/nice-select.css";
import "swiper/css";
import "swiper/css/bundle";
import "../styles/page-css/general.css";
import "../styles/page-css/header.css";
import "../styles/page-css/footer.css";
import "../styles/page-css/home.css";
import "../styles/page-css/responsive.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 5000);

    //Google Analytics
    const addGoogleAnalytics = (id) => {
      const script1 = document.createElement('script');
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}');
      `;
      document.head.appendChild(script2);
    };

    addGoogleAnalytics('G-Z8Y7QC7KQ2');
    

    return () => clearTimeout(timer);
  }, []);

  const renderNavbar = () => <Navbar />;
  const renderFooter = () => <Footer />;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Punta Cana 4 Life - Airport Transfers & Reliable Shuttle Service</title>
        <meta name="description" content="Punta Cana 4 Life offers private airport transfer services across the Dominican Republic, ensuring reliable tourist transportation to and from any destination." />
        <meta name="keywords" content="Punta Cana, airport transfers, shuttle service, Dominican Republic, tourist transportation" />
        <meta name="author" content="Punta Cana 4 Life" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Punta Cana 4 Life | Airport Transfers & Reliable Shuttle Service" />
        <meta property="og:description" content="Punta Cana 4 Life offers private airport transfer services across the Dominican Republic, ensuring reliable tourist transportation to and from any destination." />
        <meta property="og:image" content="https://www.puntacana4life.com/images/logo.png"/>
        <meta property="og:url" content={`https://www.puntacana4life.com${pathname}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Punta Cana 4 Life Airport Transfers | Reliable Shuttle Service"/>
        <meta name="twitter:description" content="Punta Cana 4 Life offers private airport transfer services across the Dominican Republic, ensuring reliable tourist transportation to and from any destination."/>
        <meta name="twitter:image" content="https://www.puntacana4life.com/images/logo.png"/>
        <link rel="canonical" href={`https://www.puntacana4life.com${pathname}`} />



        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z8Y7QC7KQ2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z8Y7QC7KQ2');
            `,
          }}
        ></script>


<script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-11404885992/gJhSCPLe9KoZEOj_or4q'});
            `,
          }}
        ></script>





        
      </Head>

      <Loader loading={loading} /> {}

      {renderNavbar()}
      <Component {...pageProps} />
      {renderFooter()}

      {}
      <Script
        id="elfsight-script"
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      />
      <div className="elfsight-app-efbc04bb-d7ba-4a8c-b291-6d6691800ef2" data-elfsight-app-lazy />

      {}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-Z8Y7QC7KQ2`}
        strategy="beforeInteractive"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z8Y7QC7KQ2');
          `
        }}
      />

      {}
      <Script
        id="jivosite-script"
        src="//code.jivosite.com/widget/T0BAcCL51k"
        strategy="lazyOnload"
      />
    </>
  );
};

export default App;
