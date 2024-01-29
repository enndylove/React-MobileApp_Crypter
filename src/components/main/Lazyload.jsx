import { useEffect } from "react";

export default function LazyLoad() {
  useEffect(() => {
    const images = document.querySelectorAll("img");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    images.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
