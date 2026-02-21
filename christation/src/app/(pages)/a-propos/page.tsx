import { getAProposPage } from "@/src/lib/services/pageServices";

import AProposClient from "./aProposClient";

export default async function APropos() {
  const aPropos = await getAProposPage("FR");

  return(
    <AProposClient page={aPropos} />
  );
}
