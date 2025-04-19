interface HomeMenuProps {
  imgSource : string;
  imgAlt : string;
  nomMenu: string;
}

export function HomeMenu({ imgSource, imgAlt, nomMenu }: HomeMenuProps) {
  return (
    <div className="nav-home flex flex-col items-center gap-[0.5rem]">
      <div className="icone-menu w-[190px] h-[178px] bg-pink-500">
        <img src={imgSource} alt={imgAlt} className="w-full h-full object-cover"/>
      </div>

      <div className="nom-menu">
        <p className="font-titre text-center text-font-40px capitalize px-[1rem]">
          {nomMenu}
        </p>
      </div>
    </div>
  );
}
