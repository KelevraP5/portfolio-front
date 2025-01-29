import "../app/styles/globals.css";

interface TrophyResumeProps {
    trophyName : string;
    trophyResume : string;
}

export function trophyResume ({ trophyName, trophyResume } : TrophyResumeProps) {
    return (
        <div className="trophy-infos cursor-default flex flex-col gap-[1rem] py-[0.5rem] border-0 border-t border-b border-solid border-[var(--hex-secondaryColor)]">
            <div className="trophy-name text-center">
                <p className="font-titre text-font-24px">{trophyName}</p>
            </div>

            <div className="trophy-resume text-center">
                <p>{trophyResume}</p>
            </div>
        </div>
    );
}