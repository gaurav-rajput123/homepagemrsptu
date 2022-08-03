import Head from "next/head";
import './whatsapp.css';
import { useEffect, useState } from "react";
import "swiper/css";
import VideoState from "../src/context/video";
import PreLoader from "../src/layout/PreLoader";
import Script from "next/script";
import "../styles/globals.css";
import "../src/Authentication/Login.css"
import * as gtag from '../lib/gtag'
import {
  WhatsappIcon,
} from 'next-share';

import Popupmain from "./PopupComponent/Popupmain";
import './PopupComponent/Popupmain.css';


function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/627dfbe3b0d10b6f3e720062/1g2u1vsli";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();

    setTimeout(() => {
      setLoader(false);
    }, 2000);

    setTimeout(() => {
      setTrigger(true);
    }, 7000);

  }, []);

  const tags = [{ title: 'MRSPTU Online' },
  { title1: 'Best Online Courses for machine Learning | MRSPTU Online L-earning', description: 'MRSPTU offers the best machine learning courses online. We have experienced trainers & the course will help you master Machine learning. Learn more & join the course on MRSPTU Online.' },
  { title1: 'Join the Best Cyber Crime Course Online On MRSPTU', description: 'Cyber Crime is one of the in-demand technologies in this digital world. MRSPTU Online offers a comprehensive cyber crime investigation course online. Join the Course Now.' },
  { title1: 'Learn React Native App Development Course Online on MRSPTU', description: 'Want to learn React Native app development? Then Join MRSPTU Online React Native App development course. Learn more and join the course on MRSPTU Online.' },
  { title1: 'Best Vermicompost Course Online | Join MRSPTU Online Training', description: 'MRSPTU is one of the leading educational institutes and we also offer online courses. Enroll for Vermicompost training online and start remote learning.' },
  { title1: 'Enroll in Patient Certificate Course Online on MRSPTU', description: 'MRSPTU offers the best Patient certificate course and certificate course in Intellectual property rights online. Enroll now and start learning on MRSPTU Online' },
  { title1: 'Best Business Intelligence Certification Course Online | MRSPTU Online', description: 'MRSPTU is one of the leading online training institutes and we offer the best business intelligence certification course online. Enroll and boost your career with MRSPTU.' },
  { title1: 'Best Power BI Certification Course Online | MRSPTU Online', description: 'Learn power BI online on MRSPTU. We offer the best power BI certification course online. Enroll now and start learning Power BI on MRSPTU.' },
  { title1: 'Learn C Programming Language Online on MRSPTU', description: 'MRSPTU is one of the leading online training institutes and we offer the best C programming language course online. Know more about the course and enroll now on MRSPTU.' },
  { title1: 'Enroll in C++ Online Course on MRSPTU Online', description: 'MRSPTU offers the best C++ Certificate course online. We have highly qualified & experienced faculty, and we offer a wide range of technological courses online.' },
  { title1: 'Best Blockchain Certification Course Online | MRSPTU Online', description: 'Enroll in our comprehensive blockchain certification course for beginners online. We have highly qualified and experienced faculty & trainers, and we offer the best online course for blockchain.' },
  { title1: 'Learn Python Online on MRSPTU - Certification Course', description: 'MRSPTU offers the best certification course in Python. Enroll in our online python course and master the skill. Learn more about the course and start learning online.' },

  ]


  return (
    <>
      {/* <div style={{overflow:'scroll'}}> */}
      {trigger && <Popupmain setTrigger={setTrigger} />}
      {/* </div> */}

      <VideoState>
        <a class="whats-app" href="https://wa.me/919875944054" target="_blank">
          <WhatsappIcon />
        </a>

        <meta name="facebook-domain-verification"
          content="j7403r17md142pbti8hi1gtoknqjmx" />
        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '559717055868977');
          fbq('track', 'PageView');`}}
        />
        <noscript dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=559717055868977&ev=PageView&noscript=1"/>` }}
        />

        <script dangerouslySetInnerHTML={{

          __html: `function gtag_report_conversion(url) {
          var callback = function () {
          if (typeof(url) != 'undefined') {
          window.location = url;
          }
          };
          gtag('config', 'AW-10891691611');
          gtag('event', 'conversion', {
          'send_to': 'AW-10891691611/AY4HCMfSpMQDENuMyMko',
          'event_callback': callback
          });
          return false;
          } `
          }} />

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-44QSC91C6E`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-44QSC91C6E', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        {tags.map((item) => {
          return (
            <Head>
              <title>{item.title}</title>
              <link
                rel="shortcut icon"
                href="images/logo.png"
                type="image/x-icon"
              />


              <meta property="og:type" content="website" />

              <meta property="og:title" content={item.title1} />
              <meta name="description" content={item.description} />
              <meta property="og:url" content={"https://mrsptuonline.com/"} />
            </Head>
          )
        })}

        {loader && <PreLoader />}
        <div className="wsmenucontainer">
          <Component {...pageProps} />
        </div>
      </VideoState>
    </>
  );
}

export default MyApp;
