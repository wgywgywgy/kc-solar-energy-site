"use client";

import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { PageMetadata } from "@/components/page-metadata";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { VisualPanel } from "@/components/visual-panel";
import { useLang } from "@/components/lang-provider";
import { siteContent } from "@/lib/site-data";

const solutionApproach = {
  en: [
    {
      icon: "checklist",
      title: "Start with the use case",
      description: "Solution discussions begin with whether the project is residential storage, commercial storage, or solar."
    },
    {
      icon: "layers",
      title: "Define the system scope",
      description: "The next step is clarifying whether the requirement is backup-oriented, cost-control oriented, or generation-oriented."
    },
    {
      icon: "workflow",
      title: "Move into direct discussion",
      description: "Once the operating target is clear, the conversation can move into products, application fit, and delivery follow-up."
    }
  ],
  zh: [
    {
      icon: "checklist",
      title: "先看需求属于哪条业务线",
      description: "方案沟通先判断项目属于户用储能、工商业储能还是光伏。"
    },
    {
      icon: "layers",
      title: "再明确系统范围",
      description: "下一步是区分需求更偏备用导向、成本控制导向还是发电导向。"
    },
    {
      icon: "workflow",
      title: "进入直接业务沟通",
      description: "运行目标清楚后，才更适合进入产品、场景匹配和后续交付沟通。"
    }
  ]
};

export default function SolutionsPage() {
  const { lang } = useLang();
  const { solutions, shared } = siteContent[lang];
  const approachCards = solutionApproach[lang];

  return (
    <>
      <PageMetadata
        title="Solutions | KC Solar Energy LLC"
        description="Solution direction across residential storage, commercial & industrial storage, and solar."
      />
      <PageHero
        eyebrow={solutions.hero.eyebrow}
        title={solutions.hero.title}
        description={solutions.hero.description}
        visual={
          <VisualPanel
            src="/photos/bess-project-premium.jpg"
            alt={lang === "zh" ? "储能与光伏项目" : "Solar and battery storage project"}
            eyebrow={lang === "zh" ? "方案方向" : "Solution Direction"}
            title={lang === "zh" ? "三条业务线对应三条更清晰的系统方向。" : "Three business lines translated into three clearer solution tracks."}
            description={
              lang === "zh"
                ? "本页讲的是系统级方向，而不是组件列表。"
                : "This page focuses on system-level direction rather than just a list of components."
            }
            priority
          />
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/products" className="btn-primary">
            {solutions.hero.primary}
          </Link>
          <Link href="/contact" className="btn-secondary">
            {solutions.hero.secondary}
          </Link>
        </div>
      </PageHero>

      <section className="section-space section-band">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={solutions.families.eyebrow} title={solutions.families.title} description={solutions.families.description} />

          <div className="grid gap-6 md:grid-cols-3">
            {shared.lines.map((line) => (
              <FeatureCard
                key={line.key}
                icon={line.icon}
                eyebrow={lang === "zh" ? "方案族群" : "Solution Family"}
                title={line.title}
                description={line.description}
                items={[...line.points, ...line.outcomes]}
                tone="accent"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <VisualPanel
            src="/photos/solar-storage-campus.jpg"
            alt={lang === "zh" ? "光储一体化方案" : "Solar and storage system planning"}
            eyebrow={lang === "zh" ? "方案阅读方式" : "How to Read the Page"}
            title={lang === "zh" ? "这页只讲系统方向，不再重复讲公司简介。" : "This page stays on system direction instead of repeating the company profile."}
            description={
              lang === "zh"
                ? "Solutions 页现在的任务是帮助访客判断需求属于哪种系统路径。"
                : "The Solutions page is now meant to help visitors identify the right system path for the requirement."
            }
            items={lang === "zh" ? ["户用储能系统", "工商业储能系统", "光伏发电系统"] : ["Residential storage systems", "C&I storage systems", "Solar generation systems"]}
          />

          <div className="section-stack">
            <SectionHeading eyebrow={solutions.support.eyebrow} title={solutions.support.title} description={solutions.support.description} />

            <div className="grid gap-4">
              {approachCards.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} tone="soft" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow={solutions.cta.eyebrow}
        title={solutions.cta.title}
        description={solutions.cta.description}
        primaryHref="/contact"
        primaryLabel={solutions.cta.primary}
        secondaryHref="/applications"
        secondaryLabel={solutions.cta.secondary}
      />
    </>
  );
}
