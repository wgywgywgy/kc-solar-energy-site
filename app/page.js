"use client";

import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { FeatureCard } from "@/components/feature-card";
import { PageMetadata } from "@/components/page-metadata";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { VisualPanel } from "@/components/visual-panel";
import { useLang } from "@/components/lang-provider";
import { companyInfo } from "@/lib/company";
import { siteContent } from "@/lib/site-data";

export default function HomePage() {
  const { lang } = useLang();
  const { home, shared } = siteContent[lang];

  return (
    <>
      <PageMetadata
        title="KC Solar Energy LLC"
        description="Residential storage, commercial & industrial storage, and solar business support from KC Solar Energy LLC."
      />
      <PageHero
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        description={home.hero.description}
        visual={
          <VisualPanel
            src="/photos/solar-hero-premium.jpg"
            alt={lang === "zh" ? "大型光伏电站" : "Utility-scale solar installation"}
            eyebrow={lang === "zh" ? "储能与光伏" : "Storage + Solar"}
            title={lang === "zh" ? "高效集成，确保系统最高在线率。" : "High integration ensures maximum system uptime."}
            description={
              lang === "zh"
                ? "我们提供的储能系统具备极高的环境适应性，能够承载 3 倍以上的瞬时启动冲击。"
                : "Our BESS solutions are engineered for extreme environments, handling over 300% startup surges effortlessly."
            }
            priority
          />
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            {home.hero.primary}
          </Link>
          <Link href="/solutions" className="btn-secondary">
            {home.hero.secondary}
          </Link>
        </div>

        <div className="grid gap-4 border-t border-[color:var(--border)] pt-7 md:grid-cols-4">
          <div className="metric-card">
            <p className="metric-value">{lang === "zh" ? "3 条主线" : "3 Core Lines"}</p>
            <p className="metric-label">{lang === "zh" ? "户用储能、工商业储能、光伏" : "Residential Storage, C&I Storage, and Solar"}</p>
          </div>
          <div className="metric-card">
            <p className="metric-value">{lang === "zh" ? "美国本地" : "US-Based"}</p>
            <p className="metric-label">{lang === "zh" ? "West Covina, California" : "West Covina, California"}</p>
          </div>
          <div className="metric-card">
            <p className="metric-value">{lang === "zh" ? "储能 + 光伏" : "Storage + Solar"}</p>
            <p className="metric-label">{lang === "zh" ? "面向现代能源应用" : "For modern energy applications"}</p>
          </div>
          <div className="metric-card">
            <p className="metric-value">{lang === "zh" ? "直接沟通" : "Direct Contact"}</p>
            <p className="metric-label">{companyInfo.email}</p>
          </div>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="section-stack">
            <SectionHeading eyebrow={home.intro.eyebrow} title={home.intro.title} description={home.intro.description} />

            <div className="panel-card panel-card-lg">
              <div className="space-y-5">
                {home.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="body-copy">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 info-badge-row">
                <div className="info-badge">{companyInfo.address}</div>
                <div className="info-badge">{companyInfo.email}</div>
                <div className="info-badge">{lang === "zh" ? companyInfo.phoneZh : companyInfo.phoneEn}</div>
              </div>
            </div>
          </div>

          <VisualPanel
            src="/photos/solar-storage-campus.jpg"
            alt={lang === "zh" ? "储能与光伏一体化站点" : "Integrated solar and storage site"}
            eyebrow={lang === "zh" ? "业务重点" : "Business Focus"}
            title={lang === "zh" ? "为复杂工程场景提供定制化方案。" : "Customized solutions for complex engineering scenes."}
            description={
              lang === "zh"
                ? "依托深厚的 EPC 交付背景，我们为每一个场站提供最匹配的能源资产组合。"
                : "Leveraging our deep EPC background, we provide the most compatible energy asset mix for every unique site."
            }
          />
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={home.lines.eyebrow} title={home.lines.title} description={home.lines.description} />

          <div className="grid gap-6 lg:grid-cols-3">
            {shared.lines.map((line) => (
              <FeatureCard
                key={line.key}
                icon={line.icon}
                eyebrow={lang === "zh" ? "核心业务线" : "Core Line"}
                title={line.title}
                description={line.description}
                items={line.points}
                tone="accent"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="section-stack">
            <SectionHeading
              eyebrow={lang === "zh" ? "浏览路径" : "Explore the Site"}
              title={lang === "zh" ? "深耕核心赛道，提供专业工程支撑。" : "Deep expertise in core energy sectors with professional engineering support."}
              description={
                lang === "zh"
                  ? "我们的业务逻辑始终围绕降低客户运营成本与提升能源韧性展开。"
                  : "Our business logic centers on reducing operational costs and enhancing energy resilience for our clients."
              }
            />

            <div className="grid gap-4">
              {shared.pageGuide.map((item) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  cta={item.cta}
                  tone="soft"
                />
              ))}
            </div>
          </div>

          <VisualPanel
            src="/photos/solar-rooftop-premium.jpg"
            alt={lang === "zh" ? "屋顶光伏系统" : "Rooftop solar and storage system"}
            eyebrow={lang === "zh" ? "沟通重点" : "What the Site Is About"}
            title={lang === "zh" ? "全球交付经验，助力您的项目落地。" : "Global delivery experience to empower your project success."}
            description={
              lang === "zh"
                ? "从亚太中心到北美市场，我们确保每一个项目都能获得顶级的供应链支持。"
                : "From our APAC hub to the North American market, we ensure every project receives top-tier supply chain support."
            }
            items={lang === "zh" ? ["三条核心业务线", "真实公司信息", "明确下一步入口"] : ["Three core business lines", "Real company information", "Clear next-step routes"]}
          />
        </div>
      </section>

      <CtaBanner
        eyebrow={home.cta.eyebrow}
        title={home.cta.title}
        description={home.cta.description}
        primaryHref="/contact"
        primaryLabel={home.cta.primary}
        secondaryHref="/products"
        secondaryLabel={home.cta.secondary}
      />
    </>
  );
}
