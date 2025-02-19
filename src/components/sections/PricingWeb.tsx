import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  animationPackages,
  hostingPackages,
  projectTypes,
  threeDPackages,
} from "@/constants/pricing";

import Card3D from "../cards/Card3D";
import CardContent from "../cards/CardContent";

const PricingSection = () => {
  return (
    <section id="web" className="flex flex-col items-center gap-6 pt-20">
      <h3 className="text-center text-2xl font-bold text-accent-foreground sm:text-3xl">
        <span className="text-gentle-blue_gradient">WEB</span> Packages
      </h3>
      <Tabs defaultValue="project-type">
        <TabsList className="mb-6 grid w-full grid-cols-4 text-sm sm:gap-2">
          <TabsTrigger value="project-type">Project Type</TabsTrigger>
          <TabsTrigger value="animations">Animations</TabsTrigger>
          <TabsTrigger value="3d-integration">3D Integration</TabsTrigger>
          <TabsTrigger value="hosting">Hosting</TabsTrigger>
        </TabsList>
        <TabsContent value="project-type">
          <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_1fr] gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectTypes.map((type) => (
              <Card3D
                key={type.name}
                className={
                  "group row-span-3 grid cursor-default grid-rows-subgrid gap-0 hover:border-[hsl(190,100%,50%)]"
                }
              >
                <CardContent pkg={type} />
              </Card3D>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="animations">
          <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_1fr] gap-6 md:grid-cols-2 xl:grid-cols-3">
            {animationPackages.map((pkg) => (
              <Card3D
                key={pkg.name}
                className={
                  "group row-span-3 grid cursor-default grid-rows-subgrid gap-0 hover:border-[hsl(190,100%,50%)]"
                }
              >
                <CardContent pkg={pkg} />
              </Card3D>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="3d-integration">
          <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_1fr] gap-6 md:grid-cols-2 xl:grid-cols-3">
            {threeDPackages.map((pkg) => (
              <Card3D
                key={pkg.name}
                className={
                  "group row-span-3 grid cursor-default grid-rows-subgrid gap-0 hover:border-[hsl(190,100%,50%)]"
                }
              >
                <CardContent pkg={pkg} />
              </Card3D>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="hosting">
          <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_1fr] gap-6 md:grid-cols-2 xl:grid-cols-3">
            {hostingPackages.map((pkg) => (
              <Card3D
                key={pkg.name}
                className={
                  "group row-span-4 grid cursor-default grid-rows-subgrid gap-0 hover:border-[hsl(190,100%,50%)]"
                }
              >
                <CardContent pkg={pkg} />
              </Card3D>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 xl:gap-6">
        <button
          className={`bg-midnight-ocean_gradient col-span-1 rounded-md px-6 py-3 font-semibold text-foreground md:col-start-2`}
        >
          <Link scroll href="/#contact">
            Contact
          </Link>
        </button>
      </div>
    </section>
  );
};

export default PricingSection;
