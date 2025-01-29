import "../app/styles/globals.css";

interface HomeMenuProps {
    // webpSource : string;
    // imgSource : string;
    // imgAlt : string;
    nomMenu : string;
}

export function homeMenu({ nomMenu } : HomeMenuProps) {
  return (
    <div className="nav-home flex flex-col items-center gap-[0.5rem]">
      <div className="icone-menu w-[190px] h-[178px] bg-pink-500">
        {/* <picture>
          <source srcSet={webpSource} type="image/webp" />
          <img src={imgSource} alt={imgAlt} />
        </picture> */}
      </div>

      <div className="nom-menu">
        <p className="font-titre text-font-40px capitalize">{nomMenu}</p>
      </div>
    </div>
  );
}
