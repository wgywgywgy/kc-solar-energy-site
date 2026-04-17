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
            title={lang === "zh" ? "围绕三条核心业务线建立更清晰的网站结构。" : "A cleaner website structure built around three core business lines."}
            description={
              lang === "zh"
                ? "KC Solar Energy LLC 现在聚焦户用储能、工商业储能和光伏。"
                : "KC Solar Energy LLC now centers the site around Residential Storage, Commercial & Industrial Storage, and Solar."
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
            title={lang === "zh" ? "更像产品主导型新能源企业官网。" : "Structured more like a product-led clean-energy company website."}
            description={
              lang === "zh"
                ? "首页现在先讲清楚业务线，再引导访客继续看解决方案、产品和应用场景。"
                : "The homepage now clarifies the business lines first, then guides visitors into Solutions, Products, and Applications."
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
              title={lang === "zh" ? "首页只做总览，下一步去对应页面看细节。" : "The homepage stays high-level. Use the next page for the detail you actually need."}
              description={
                lang === "zh"
                  ? "这样可以避免每一页都重复解释同样的内容。"
                  : "This keeps the site from repeating the same explanation on every page."
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
            title={lang === "zh" ? "先看业务方向，再进入产品、方案或场景。" : "Start with the business line, then move into products, solutions, or applications."}
            description={
              lang === "zh"
                ? "KC Solar Energy LLC 的首页现在更像企业首页入口，而不是把所有内容都挤在同一页。"
                : "The homepage now works more like a real corporate landing page instead of trying to explain everything at once."
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
