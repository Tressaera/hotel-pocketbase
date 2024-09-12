import { ModeToggle } from "@/components/ModeToggle";
import ImageWaves  from "@/components/ImageWaves";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
<div className="bg-slate-600">
<Button variant="destructive" size="icon">deneme</Button>
<ModeToggle/>
{/* <ImageWaves myclassName='absolute -top-2'/> */}
</div>

  );
}
