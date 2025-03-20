declare module 'flickr-justified-gallery' {
    interface FJGalleryOptions {
      itemSelector?: string;
      rowHeight?: number;
      lastRow?: 'left' | 'center' | 'right' | 'justify' | 'hide' | 'start';
      gutter?: number;
      rowHeightTolerance?: number;
      calculateItemsHeight?: boolean;
    }
  
    const fjGallery: (
      container: Element | NodeListOf<Element>,
      options?: FJGalleryOptions
    ) => void;
  
    export = fjGallery;
  }
  