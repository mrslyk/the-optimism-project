import Link from "next/link";
import { Header,Footer } from "../app/site-chrome";
import { ReadingTools } from "./ReadingTools";
export function PageFrame({eyebrow,title,description,children,tone="green-page"}:{eyebrow:string;title:string;description:string;children:React.ReactNode;tone?:string}){return <><Header/><main id="main-content" className={`inner-page ${tone}`}><section className="page-hero"><div className="wrap"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>{eyebrow}</span></div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p><ReadingTools/></div></section>{children}</main><Footer/></>}
