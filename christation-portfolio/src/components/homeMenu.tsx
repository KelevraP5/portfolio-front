interface HomeMenuProps {
  imgSource : string;
  imgWebP : string;
  imgAlt : string;
  nomMenu: string;
}

export function HomeMenu({ imgSource, imgWebP, imgAlt, nomMenu }: Readonly<HomeMenuProps>) {
  return (
    <div className="nav-home flex flex-col items-center gap-[0.5rem]">
      <div className="icone-menu w-[190px] h-[178px] bg-pink-500">
        <picture>
          <source srcSet={imgWebP} />
          <img src={imgSource} alt={imgAlt} />
        </picture>
      </div>

      <div className="nom-menu">
        <p className="font-titre text-center text-font-40px capitalize px-[1rem]">
          {nomMenu}
        </p>
      </div>
    </div>
  );
}
