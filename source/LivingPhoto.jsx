import { useEffect, useRef, useState } from "react";
import "./LivingPhoto.css";

/**
 * LivingPhoto — a still photograph with slow, ambient motion.
 *
 * Renders the image twice: a base layer that drifts and zooms very slowly,
 * and a masked highlight layer that breathes a soft warm light across the
 * window side of the frame. The effect is deliberately under-stated; on a
 * hospice site the goal is "the room is alive," not "look at this animation."
 *
 * Props
 *   src       — image path (import it, or use a /public URL)
 *   alt       — required. Describe the scene for screen readers.
 *   ratio     — aspect ratio as "w / h". Defaults to the 3:2 of your source.
 *   intensity — "soft" (default) | "still". "still" disables drift entirely.
 *   lightFrom — "left" (default) | "right". Which side the window light sits on.
 */
export default function LivingPhoto({
  src,
  alt,
  ratio = "3 / 2",
  intensity = "soft",
  lightFrom = "left",
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // Cached images can fire load before React attaches the handler.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <figure
      className={`livingphoto livingphoto--${intensity} livingphoto--light-${lightFrom} ${
        loaded ? "is-loaded" : ""
      } ${className}`}
      style={{ "--lp-ratio": ratio }}
    >
      <div className="livingphoto__frame">
        <img
          ref={imgRef}
          className="livingphoto__base"
          src={src}
          alt={alt}
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
        <img
          className="livingphoto__glow"
          src={src}
          alt=""
          aria-hidden="true"
          decoding="async"
        />
        <div className="livingphoto__vignette" aria-hidden="true" />
      </div>
    </figure>
  );
}
