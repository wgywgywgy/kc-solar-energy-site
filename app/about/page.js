"use client";

import { CtaBanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { PageMetadata } from "@/components/page-metadata";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { VisualPanel } from "@/components/visual-panel";
import { useLang } from "@/components/lang-provider";
import { siteContent } from "@/lib/site-data";

const aboutFocus = {
  en: [
    {
      icon: "location",
      title: "US-based business presence",
      description: "The company operates from West Covina, California and presents itself as a direct business contact point for the US market."
    },
    {
      icon: "globe",
      title: "Supply chain understanding",
      description: "KC Solar Energy LLC emphasizes practical understanding of photovoltaic and battery-storage related product coordination."
    },
    {
      icon: "workflow",
      title: "Project-oriented communication",
      description: "The business message is built around fit, responsiveness, and a straightforward path from inquiry to follow-up."
    }
  ],
  zh: [
    {
      icon: "location",
      title: "美国本地业务存在",
      description: "公司位于美国加州 West Covina，能够作为面向美国市场的直接业务沟通入口。"
    },
    {
      icon: "globe",
      title: "供应链理解能力",
      description: "KC Solar Energy LLC 强调对光伏与电池储能相关产品协调和供应逻辑的务实理解。"
    },
    {
      icon: "workflow",
      title: "项目导向沟通方式",
      description: "公司表达方式围绕项目匹配、及时响应和后续跟进来组织。"
    }
  ]
};

export default function AboutPage() {
  const { lang } = useLang();
  const { about } = siteContent[lang];
  const focusCards = aboutFocus[lang];

  return (
    <>
      <PageMetadata
        title="About | KC Solar Energy LLC"
        description="About KC Solar Energy LLC, a California-based company focused on residential storage, commercial storage, and solar."
      />
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        description={about.hero.description}
        visual={
          <VisualPanel
            src="/photos/solar-rooftop-premium.jpg"
            alt={lang === "zh" ? "屋顶光伏" : "Rooftop solar installation"}
            eyebrow={lang === "zh" ? "公司简介" : "Company Profile"}
            title={lang === "zh" ? "围绕储能与光伏建立的企业介绍。" : "A company profile built around storage and solar."}
            description={
              lang === "zh"
                ? "KC Solar Energy LLC 以更简洁的方式说明业务重点、应用方向和直接沟通入口。"
                : "KC Solar Energy LLC presents a concise business profile built around clear focus areas, application direction, and direct communication."
            }
            priority
          />
        }
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {about.hero.pillars.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={["shield", "location", "mail"][index]}
              title={item.title}
              description={item.description}
              tone="soft"
            />
          ))}
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div className="section-stack">
            <SectionHeading eyebrow={about.profile.eyebrow} title={about.profile.title} description={about.profile.description} />

            <div className="panel-card panel-card-lg">
              <div className="space-y-5">
                {about.profile.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="body-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <VisualPanel
            src="/photos/solar-storage-campus.jpg"
            alt={lang === "zh" ? "储能与光伏场站" : "Solar and storage site"}
            eyebrow={lang === "zh" ? "业务信息" : "Business Message"}
            title={lang === "zh" ? "三条业务线构成更清晰的市场表达。" : "Three business lines create a clearer market message."}
            description={
              lang === "zh"
                ? "网站现在把公司表达集中在户用储能、工商业储能和光伏。"
                : "The site now concentrates the company message around Residential Storage, Commercial & Industrial Storage, and Solar."
            }
          />
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="section-stack">
            <SectionHeading
              eyebrow={lang === "zh" ? "公司特点" : "Company Positioning"}
              title={lang === "zh" ? "这页只讲公司是谁、为什么可信。" : "This page focuses on who the company is and why the business is credible."}
              description={
                lang === "zh"
                  ? "不再重复讲解决方案和产品分类，而是集中说明公司定位与能力。"
                  : "Instead of repeating products and solutions, the page stays centered on company positioning and capability."
              }
            />

            <div className="grid gap-4">
              {focusCards.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} tone="soft" />
              ))}
            </div>
          </div>

          <VisualPanel
            src="/photos/about-supply.jpg"
            alt={lang === "zh" ? "供应与项目支持" : "Supply chain and project support"}
            eyebrow={lang === "zh" ? "公司表达" : "Business Message"}
            title={lang === "zh" ? "更像真正的企业简介，而不是重复首页内容。" : "Framed more like a real company profile instead of a second homepage."}
            description={
              lang === "zh"
                ? "KC Solar Energy LLC 在这里重点强调美国本地沟通、供应链理解和项目支持能力。"
                : "KC Solar Energy LLC uses this page to emphasize US-based communication, supply-chain awareness, and project support capability."
            }
            items={lang === "zh" ? ["美国加州公司", "光伏与储能业务", "直接商务沟通"] : ["California-based company", "Solar and storage business focus", "Direct business communication"]}
          />
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="panel-card panel-card-lg">
            <SectionHeading
              eyebrow={lang === "zh" ? "公司范围" : "Business Scope"}
              title={lang === "zh" ? "业务范围保持清楚，不再在 About 页堆很多模块。" : "The company scope stays clear without turning the About page into a stack of repeated modules."}
              description={
                lang === "zh"
                ? "KC Solar Energy LLC 主要围绕光伏发电与储能业务进行沟通，重点面向户用储能、工商业储能和光伏相关需求。"
                  : "KC Solar Energy LLC keeps its message centered on photovoltaic generation and energy storage, with primary focus on residential storage, commercial & industrial storage, and solar."
              }
            />
            <div className="mt-6 info-badge-row">
              {(lang === "zh"
                ? ["户用储能", "工商业储能", "光伏", "West Covina, CA"]
                : ["Residential Storage", "Commercial & Industrial Storage", "Solar", "West Covina, CA"]
              ).map((item) => (
                <div key={item} className="info-badge">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow={about.cta.eyebrow}
        title={about.cta.title}
        description={about.cta.description}
        primaryHref="/contact"
        primaryLabel={about.cta.primary}
        secondaryHref="/solutions"
        secondaryLabel={about.cta.secondary}
      />
    </>
  );
}
