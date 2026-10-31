"use client";
import { useState } from "react";
export function ReadingTools(){const [message,setMessage]=useState("");return <div className="reading-tools"><button type="button" onClick={async()=>{try{await navigator.clipboard.writeText(location.href);setMessage("Link copied.")}catch{setMessage("Copy the page address from your browser.")}}}>Copy link ↗</button><button type="button" onClick={()=>window.print()}>Print / save PDF</button><span role="status">{message}</span></div>}
