import { useEffect } from "react";

/**
 * LazyLoad component that uses IntersectionObserver to load images only when they come into view.
 *
 * @example
 * <LazyLoad />
 */
export default function LazyLoad() {
  /**
   * Effect hook that sets up the IntersectionObserver to monitor images.
   */
  useEffect(() => {
    /**
     * Get all images on the page.
     */
    const images = document.querySelectorAll("img");

    /**
     * Options for the IntersectionObserver.
     */
    const options = {
      /**
       * The root element to observe. In this case, the viewport.
       */
      root: null,
      /**
       * The margin around the root element to consider when determining intersection.
       */
      rootMargin: "0px",
      /**
       * The percentage of the image that must be visible to trigger the intersection callback.
       */
      threshold: 0.1,
    };

    /**
     * Callback function when an image intersects with the viewport.
     *
     * @param {Array} entries - An array of IntersectionObserverEntry objects.
     * @param {IntersectionObserver} observer - The observer instance.
     */
    const handleIntersection = (entries, observer) => {
      /**
       * Loop through each entry and load the image if it's intersecting.
       */
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /**
           * Get the image element from the entry.
           */
          const img = entry.target;
          /**
           * Set the src attribute of the image to the value of the data-src attribute.
           */
          img.src = img.dataset.src;
          /**
           * Stop observing the image since it's now loaded.
           */
          observer.unobserve(img);
        }
      });
    };

    /**
     * Create a new IntersectionObserver instance with the handleIntersection callback and options.
     */
    const observer = new IntersectionObserver(handleIntersection, options);

    /**
     * Loop through each image and observe it with the IntersectionObserver.
     */
    images.forEach((img) => {
      observer.observe(img);
    });

    /**
     * Clean up function to disconnect the observer when the component unmounts.
     */
    return () => {
      observer.disconnect();
    };
  }, []);
}