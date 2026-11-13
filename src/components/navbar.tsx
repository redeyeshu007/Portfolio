"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 sm:bottom-4 z-30 px-1 sm:px-2 flex justify-center">
      <Dock
        baseSize={isMobile ? 30 : 40}
        baseIconSize={isMobile ? 15 : 20}
        magnification={isMobile ? 30 : 60}
        distance={isMobile ? 0 : 100}
        className="z-50 pointer-events-auto relative h-11 sm:h-14 p-1 sm:p-2 w-fit max-w-[calc(100vw-12px)] mx-auto flex items-center justify-center gap-0.5 sm:gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5 shrink-0"
      >
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          const iconContent = (
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
            </DockIcon>
          );

          const linkElement = isExternal ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex items-center justify-center"
            >
              {iconContent}
            </a>
          ) : (
            <Link
              href={item.href}
              aria-label={item.label}
              className="flex items-center justify-center"
            >
              {iconContent}
            </Link>
          );

          if (isMobile) {
            return <div key={item.href}>{linkElement}</div>;
          }

          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>{linkElement}</TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Separator
          orientation="vertical"
          className="h-1/2 sm:h-2/3 my-auto w-px bg-border shrink-0"
        />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;

            const iconContent = (
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
              </DockIcon>
            );

            const linkElement = (
              <a
                href={social.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={name}
                className="flex items-center justify-center"
              >
                {iconContent}
              </a>
            );

            if (isMobile) {
              return <div key={`social-${name}-${index}`}>{linkElement}</div>;
            }

            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>{linkElement}</TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}

        <Separator
          orientation="vertical"
          className="h-1/2 sm:h-2/3 my-auto w-px bg-border shrink-0"
        />

        {isMobile ? (
          <div>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </div>
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <ModeToggle className="size-full cursor-pointer" />
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p>Theme</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        )}
      </Dock>
    </div>
  );
}
