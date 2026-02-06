
import Image from "next/image";

type BgImgProps = {
  src: string,
  alt: string
};

export function BackgroundImage({ src, alt }: Readonly<BgImgProps>){
  return(
    <Image src={src} alt={alt} fill priority className="object-cover"/>
  );
};
