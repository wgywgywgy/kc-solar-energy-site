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

const applicationsUi = {
  en: {
    lineApplications: {
      residential: ["Homes and residences", "Backup-oriented installations", "Distributed energy systems"],
      commercial: ["Commercial and industrial facilities", "Cost-control projects", "Backup-oriented installations"],
      solar: ["Rooftop and onsite solar projects", "Distributed energy systems", "Commercial and industrial facilities"]
    },
    objectives: [
      {
        icon: "shield",
        title: "Resilience and backup readiness",
        description: "Residential and business-side storage discussions often begin with continuity, outage preparation, and better onsite energy control."
      },
      {
        icon: "chart",
        title: "Cost and load management",
        description: "Commercial storage and solar projects are frequently evaluated for demand management, self-generation, and better energy planning."
      },
      {
        icon: "solar",
        title: "Onsite clean generation",
        description: "Solar applications typically center on rooftops, distributed energy sites, and facilities looking to add photovoltaic generation."
      }
    ],
    checklist: {
      eyebrow: "Project Readiness",
      title: "Use the application page to decide whether the site type fits.",
      description: "Once the operating environment is clear, the next discussion becomes more specific and more useful."
    },
    routing: {
      eyebrow: "Continue Exploring",
      title: "Move next into solution structure or product categories.",
      description: "After confirming application fit, visitors usually want to review solution direction or hardware scope."
    }
  },
  zh: {
    lineApplications: {
      residential: ["家庭与住宅", "备用导向安装", "分布式能源场景"],
      commercial: ["工商业设施", "成本控制项目", "备用导向安装"],
      solar: ["屋顶与站内光伏项目", "分布式能源场景", "工商业设施"]
    },
    objectives: [
      {
        icon: "shield",
        title: "韧性与备用导向",
        description: "无论家庭还是企业，很多储能沟通都会从连续供电、停电影响和站内能源控制开始。"
      },
      {
        icon: "chart",
        title: "成本与负荷管理",
        description: "工商业储能和光伏项目经常围绕需量管理、自发电和更好的能源规划来评估。"
      },
      {
        icon: "solar",
        title: "站内清洁发电",
        description: "光伏应用通常围绕屋顶、分布式能源场站以及希望增加光伏发电能力的设施。"
      }
    ],
    checklist: {
      eyebrow: "项目准备",
      title: "用应用场景页先判断项目环境是否匹配。",
      description: "场站环境越明确，后续沟通就越具体，也越有价值。"
    },
    routing: {
      eyebrow: "继续查看",
      title: "下一步进入解决方案结构或产品分类。",
      description: "确认场景匹配后，访客通常还会继续查看系统方向或硬件范围。"
    }
  }
};

export default function ApplicationsPage() {
  const { lang } = useLang();
  const { applications, shared } = siteContent[lang];
  const ui = applicationsUi[lang];
  const applicationCards = shared.applicationScenarios;

  return (
    <>
      <PageMetadata
        title="Applications | KC Solar Energy LLC"
        description="Application scenarios for residential storage, commercial & industrial storage, and solar."
      />
      <PageHero
        eyebrow={applications.hero.eyebrow}
        title={applications.hero.title}
        description={applications.hero.description}
        visual={
          <VisualPanel
            src="/photos/solar-storage-campus.jpg"
            alt={lang === "zh" ? "储能与光伏应用场站" : "Solar and storage application site"}
            eyebrow={lang === "zh" ? "业务环境" : "Operating Environments"}
            title={lang === "zh" ? "应用场景页只讲真实使用环境，而不是重复产品目录。" : "The Applications page is focused on real operating environments rather than repeating the product catalog."}
            description={lang === "zh" ? "KC Solar Energy LLC 的三条业务线现在被放回到更真实的客户使用环境中。" : "KC Solar Energy LLC's three business lines are now presented through more realistic customer operating environments."}
            priority
          />
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/solutions" className="btn-primary">
            {applications.hero.primary}
          </Link>
          <Link href="/contact" className="btn-secondary">
            {applications.hero.secondary}
          </Link>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={applications.sectors.eyebrow} title={applications.sectors.title} description={applications.sectors.description} />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {applicationCards.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                eyebrow={lang === "zh" ? "应用场景" : "Scenario"}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <VisualPanel
            src="/photos/bess-project-premium.jpg"
            alt={lang === "zh" ? "储能电站" : "Battery energy storage site"}
            eyebrow={lang === "zh" ? "典型目标" : "Typical Objectives"}
            title={lang === "zh" ? "客户通常不是先问产品，而是先问这个场景要解决什么。" : "Customers usually do not start with a product list. They start with what the site needs to solve."}
            description={lang === "zh" ? "页面现在按应用目标来解释户用储能、工商业储能和光伏的适配关系。" : "The page now explains Residential Storage, C&I Storage, and Solar through the lens of application objectives."}
          />

          <div className="section-stack">
            <SectionHeading
              eyebrow={applications.priorities.eyebrow}
              title={applications.priorities.title}
              description={applications.priorities.description}
            />

            <div className="grid gap-4">
              {ui.objectives.map((item) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  tone="soft"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={ui.checklist.eyebrow} title={ui.checklist.title} description={ui.checklist.description} />

          <div className="grid gap-5 lg:grid-cols-3">
            {shared.lines.map((line) => (
              <FeatureCard
                key={line.key}
                icon={line.icon}
                eyebrow={lang === "zh" ? "适配业务线" : "Best-Fit Line"}
                title={line.title}
                description={line.description}
                items={ui.lineApplications[line.key]}
                tone="accent"
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow={applications.cta.eyebrow}
        title={applications.cta.title}
        description={applications.cta.description}
        primaryHref="/contact"
        primaryLabel={applications.cta.primary}
        secondaryHref="/products"
        secondaryLabel={applications.cta.secondary}
      />
    </>
  );
}
