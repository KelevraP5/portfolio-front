interface TrophySidebarProps {
  isOpen: boolean;
}

export function TrophySidebar({ isOpen }: TrophySidebarProps) {
  return (
    <div className={`sidebar h-[calc(100%-180px)] w-[262px] absolute left-[-50vw] bg-green-500 ${
      isOpen ? 'open' : ''
    }`}>
      <p>Texte</p>
    </div>
  );
}