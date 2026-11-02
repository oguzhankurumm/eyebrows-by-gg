import { MAPS } from "@/lib/site";
import { Icon } from "./Icon";
export function StudioMap() {
 return <div className="studio-map"><iframe title="Eyebrows by GG on Google Maps" src="https://maps.google.com/maps?q=EyebrowsByGG%20972%20Boston%20Post%20Rd%20Milford%20CT&amp;z=15&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><div><span><Icon name="pin" size={18}/>972 Boston Post Rd, Milford</span><a href={MAPS} target="_blank" rel="noopener noreferrer">Open directions<Icon name="diagonal" size={16}/></a></div></div>;
}
