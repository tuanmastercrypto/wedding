// 'use client';

// import { useEffect } from 'react';
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox.css';
// import { Heart } from 'lucide-react';

// const images = [
//   { src: '/images/c1.jpg', caption: 'Khoảnh khắc tuyệt đẹp 1' },
//   { src: '/images/c1.jpg', caption: 'Khoảnh khắc tuyệt đẹp 2' },
//   { src: '/images/c1.jpg', caption: 'Khoảnh khắc tuyệt đẹp 3' },
// ];

// export default function PhotoGallery() {
//   useEffect(() => {
//     Fancybox.bind('[data-fancybox="gallery"]', {
//       infinite: true,
//       showClass: false,
//       hideClass: false,
//       Toolbar: {
//         display: ['close', 'fullscreen', 'slideshow', 'thumbs'],
//       },
//     });

//     return () => {
//       Fancybox.unbind('[data-fancybox="gallery"]');
//     };
//   }, []);

//   return (
//     <div className="m-4 text-center">
//       <h1 className="text-3xl font-dancing-script font-bold">
//         Văn Tuần <Heart className="inline-block mx-2 h-5 w-5 text-pink-500" /> Mỹ Ngọc
//       </h1>
//       <div className="px-4 py-10 max-w-screen-xl mx-auto">
//         <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
//           {images.map((img, idx) => (
//             <a
//               key={idx}
//               href={img.src}
//               data-fancybox="gallery"
//               data-caption={img.caption}
//               className="block overflow-hidden rounded-lg"
//             >
//               <img
//                 src={img.src}
//                 alt={img.caption}
//                 className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import React from 'react';
// import LightGallery from 'lightgallery/react';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

// // Styles
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import './style.css';

// const images = [
//   '/images/hoa.png',
//   '/images/DSC04171.jpg',
//   '/images/c1.jpg',
//   '/images/DSC03672.jpg',
//   '/images/DSC04171.jpg',
//   '/images/c1.jpg',
//   '/images/a.png',
//   '/images/DSC04171.jpg',
//   '/images/c1.jpg',
//   '/images/DSC03672.jpg',
//   '/images/DSC04171.jpg',
//   '/images/c1.jpg',
//   '/images/DSC03672.jpg',
//   '/images/DSC04171.jpg',
//   '/images/c1.jpg',
//   // ... các ảnh khác
// ];

// const Gallery = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-center mb-6">Khoảnh khắc đẹp</h1>

//       <div className="gallery-wrapper">
//         <LightGallery
//           speed={500}
//           plugins={[lgThumbnail, lgZoom]}
//           elementClassNames=""
//         >
//           {images.map((src, index) => (
//             <a key={index} href={src} className="gallery-item" data-lg-size="1406-1390">
//               <img src={src} alt={`img-${index}`} className="gallery-thumb" />
//             </a>
//           ))}
//         </LightGallery>
//       </div>
//     </div>
//   );
// };

// export default Gallery;



'use client';

import React, { useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'flickr-justified-gallery/dist/fjGallery.css';
// import './style.css';
import fjGallery from 'flickr-justified-gallery';

const images = [
  {
    src:  '/images/hoa.png',
    thumb:  '/images/hoa.png',
    subHtml: ``,
  },
  {
    src: '/images/DSC03672.jpg',
    thumb: '/images/DSC03672.jpg',
    subHtml: ``,
  },
  {
    src: '/images/c1jpg',
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
  // Add more if you want
];
import Image from 'next/image';
export default function Gallery() {
    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
          itemSelector: '.gallery__item',
          rowHeight: 180,
          lastRow: 'start',
          gutter: 2,
          rowHeightTolerance: 0.1,
          calculateItemsHeight: false,
        });
      }, []);
    return (

        <>
        <div className='md:p-2'>
                <div className="row items-center align-center  ">
                    <div className="col col-12 bg-fuchsia-50">
                      
                       <div className=" flex justify-center items-center">
                            <Image
                                src="/images/hoa.png"
                           className="rounded-full  md:w-40 md:h-40 w-20 h-20"
                                width={200}
                                height={200}
                                alt="Picture of the author"
                            />
                            </div>
                    
                        <div className="flex justify-center ">
                          <span className="relative text-sm text-gray-500 px-4">
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-[35px] h-px bg-gray-300"></span>
                               Album Hình Cưới
                              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-[35px] h-px bg-gray-300"></span>
                          </span>
                        </div>
        
        
                    </div>
                  </div>
        
        
   
      <div className="max-w-screen-xl mx-auto px-4 py-10">
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
              className="block"
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