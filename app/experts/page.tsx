import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "../../components/PageFrame";
import { PeopleDirectory } from "../../components/PeopleDirectory";
export const metadata:Metadata={title:"Researchers & Thinkers",description:"Explore the people behind optimism research by area of study and follow their published work.",alternates:{canonical:"/experts"}};
export default function Experts(){return <PageFrame eyebrow="People" title="The people behind the research." description="Find foundational thinkers and researchers by their area of work. Each entry leads to a published source."><section className="wrap section"><p className="directory-note">This is a guide to published work, including foundational work from earlier decades. Inclusion does not imply project membership, endorsement, current institutional affiliation, or availability for clinical care.</p><PeopleDirectory/><div className="next-card"><h3>Help broaden the directory.</h3><p>Suggest a researcher and a public source for their work, or tell us what is missing.</p><Link href="/contact">Suggest an addition →</Link></div></section></PageFrame>}
