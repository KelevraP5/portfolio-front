import style from "styles/modules/components/trophy.module.css";

interface TrophyResumeProps {
    trophyName : string;
    trophyResume : string;
}

export function trophyResume ({ trophyName, trophyResume } : TrophyResumeProps) {
    return (
        <div className={`${style.trophyInfos} cursor-default flex flex-col gap-[1rem] py-[0.5rem] border-0 border-t border-b border-solid border-[var(--hex-secondaryColor)]}`}>
            <div className={`${style.trophyName}  text-center`}>
                <p className="font-titre text-font-24px">{trophyName}</p>
            </div>

            <div className={`${style.trophyResume} text-center`}>
                <p>{trophyResume}</p>
            </div>
        </div>
    );
}