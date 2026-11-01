import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "../../components/PageFrame";
import { MemomeMap } from "../../components/MemomeMap";
import { CadooConnection } from "../../components/CadooConnection";
import { memomeIdeas } from "../../lib/memome";

export const metadata:Metadata={title:"Mind Memome",description:"Sourced ideas, brief excerpts, and mind-and-body challenges for an optimism play-to-earn game, with a planned Cadoo connection.",alternates:{canonical:"/mind-memome"}};

export default function Memome(){return <PageFrame eyebrow="Mind Memome" title="Ideas to carry. Practices to live." description="Building a memome for grounded optimism through learning, physical action, and experience.">
  <section className="wrap section">
    <div className="research-hub-intro"><div><p className="kicker">Mind and body, together</p><h2>Learn an idea. Live it. Earn through action.</h2></div><div>
      <p>Mind Memome is our working name for the collection of ideas, explanations, and habits we carry through life. We are curating the memes that could support grounded optimism: possibilities worth pursuing, useful agency, cooperation, evidence, movement, and recovery.</p>
      <p>Each card distills an idea into a memorable phrase, explains its source and limits, and turns it into a proposed challenge. Brief source excerpts are attributed; the meme phrases are our own wording. The aim is a collection people can understand, use, revisit, and share.</p>
      <p>The game follows the Slyk play-to-earn model behind Naval and Decalog. Mind and body belong in the same learning loop, with a planned connection from completed Cadoo games to Optimism rewards.</p>
      <p className="note">Curriculum draft 0.2. These are candidate ideas, not a scientifically established ideal memome or an active earning service. The sequence and its effects still need evaluation.</p>
    </div></div>
    <div className="article-source-links"><Link href="/mind-and-body">Mind, body & Cadoo ↗</Link><Link href="/rational-optimist">The Rational Optimist track ↗</Link><Link href="/pessimism">Understand pessimism ↗</Link><Link href="/science-evidence#library">Research behind the curriculum ↗</Link><a href="/mind-memome/curriculum.json" download>Download curriculum draft ↓</a></div>
    <div className="memome-introduction"><p className="kicker">{memomeIdeas.length} candidate ideas · three connected tracks</p><h2>A memome to put into practice.</h2><p>Personal outlook. Progress together. Mind and body. Learn the idea, examine the evidence, and try the challenge. Concern and preparation can be useful; rewards should recognize learning and completion, without requiring anyone to report feeling happier.</p></div>
    <MemomeMap ideas={memomeIdeas}/>
    <CadooConnection/>
    <div className="next-card"><p>BUILD THE CURRICULUM WITH US</p><h3>What belongs in the next version?</h3><p>Suggest a source, challenge a claim, or propose an idea that becomes useful through practice.</p><Link href="/contact">Contribute to the work →</Link></div>
  </section>
</PageFrame>}
