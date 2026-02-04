type BackgroundImageProps = {
  webp?: string;
  fallback: string;
  alt?: string;
};

export function BackgroundImage({ webp, fallback, alt }: Readonly<BackgroundImageProps>) {
    
  return (
    <picture>
      {/* WebP si supporté */}
      {webp && <source srcSet={webp} type="image/webp" />}

      {/* Fallback automatique */}
      <img
        src={fallback}
        alt={alt || ""}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </picture>
  );
}
