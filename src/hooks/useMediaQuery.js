import { useEffect, useState } from "react";

// Devuelve true cuando la media query coincide. Se actualiza si cambia (rotar el celu, etc).
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
};

// Atajo: "mobile" = menos de 768px (debajo de md en Tailwind)
export const useIsMobile = () => useMediaQuery("(max-width: 767px)");
