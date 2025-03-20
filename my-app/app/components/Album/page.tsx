'use client';

import React, { useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'flickr-justified-gallery/dist/fjGallery.css'; // CSS không gây lỗi
import Image from 'next/image';

const images = [
  {
    src: '/images/hoa.png',
    thumb: '/images/hoa.png',
    subHtml: ``,
  },
  {
    src: '/images/DSC03672.jpg',
    thumb: '/images/DSC03672.jpg',
    subHtml: ``,
  },
  {
    src: '/images/c1.jpg',
    thumb: '/images/c1.jpg',
    subHtml: ``,
  },
  {
    src: '/images/DSC04171.jpg',
    thumb: '/images/DSC04171.jpg',
    subHtml: ``,
  },
  {
    src: '/images/a.png',
    thumb: '/images/a.png',
    subHtml: ``,
  },
];

export default function Gallery() {
  useEffect(() => {
    // Import dynamic để tránh lỗi SSR
    import('flickr-justified-gallery').then((fjGallery) => {
      fjGallery.default(document.querySelectorAll('.gallery'), {
        itemSelector: '.gallery__item',
        rowHeight: 180,
        lastRow: 'start',
        gutter: 2,
        rowHeightTolerance: 0.1,
        calculateItemsHeight: false,
      });
    });
  }, []);

  return (
    <>
      <div className="md:p-2">
        <div className="row items-center align-center">
          <div className="col col-12 bg-fuchsia-50">
            <div className="flex justify-center items-center">
              <Image
                src="/images/hoa.png"
                className="rounded-full md:w-40 md:h-40 w-20 h-20"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <div className="flex justify-center">
              <span className="relative text-sm text-gray-500 px-4">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-[35px] h-px bg-gray-300"></span>
                Album Hình Cưới
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-[35px] h-px bg-gray-300"></span>
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 py-10 gallery">
          <LightGallery
            plugins={[lgZoom, lgVideo]}
            mode="lg-fade"
            elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            mobileSettings={{
              controls: false,
              showCloseIcon: true,
              download: false,
              rotate: false,
            }}
          >
            {images.map((img, index) => (
              <a
                key={index}
                className="block gallery__item"
                data-src={img.src}
                data-sub-html={img.subHtml}
                data-lg-size="1600-2400"
              >
                <img
                  src={img.thumb}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto rounded-md shadow hover:opacity-90 transition duration-200"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </>
  );
}
