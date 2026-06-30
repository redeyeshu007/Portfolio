"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BUILD_WITH_ME_DATA } from "@/data/build-with-me";
import { Badge } from "@/components/ui/badge";

export function HelpWanted({ delay = 0.04 }: { delay?: number }) {
  const { helpWanted } = BUILD_WITH_ME_DATA;

  return (
    <section className="flex flex-col gap-8 pt-8">
      <BlurFade delay={delay}>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Help Wanted</h2>
          <p className="text-muted-foreground text-sm">
            Specific roles we are currently looking to fill.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {helpWanted.map((role, idx) => (
          <BlurFade key={idx} delay={delay + idx * 0.1}>
            <div className={`flex flex-col border border-border rounded-xl p-5 bg-background hover:ring-2 hover:ring-muted transition-all duration-200 ${role.status === 'Filled' ? 'opacity-60' : ''}`}>
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="font-semibold text-lg">{role.role}</h3>
                <Badge 
                  variant={role.status === 'Open' ? 'default' : 'secondary'}
                  className={role.status === 'Open' ? 'bg-primary text-primary-foreground' : ''}
                >
                  {role.status}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {role.responsibilities}
              </p>

              <div className="flex flex-col gap-3">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1.5">Required Skills</span>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="text-[10px] px-1.5 h-5 border-border">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Commitment:</span>
                  <span className="font-medium">{role.commitment}</span>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
