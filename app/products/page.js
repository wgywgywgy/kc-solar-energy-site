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

const productSuiteContent = {
  en: {
    groups: {
      residential: {
        title: "Residential storage hardware",
        description: "Battery-led hardware for home backup readiness, solar self-consumption, and daily energy resilience.",
        items: ["LFP battery direction", "Hybrid inverter pairing", "Rooftop solar compatibility"]
      },
      commercial: {
        title: "C&I storage hardware",
        description: "Battery and power-conversion components supporting facility-side storage planning and onsite energy control.",
        items: ["LFP battery systems", "Inverter integration", "Electrical connection support"]
      },
      solar: {
        title: "Solar generation hardware",
        description: "Core photovoltaic products supporting rooftops, onsite generation, and distributed energy installations.",
        items: ["PV module supply", "Solar inverter support", "Project cable coordination"]
      }
    },
    selection: {
      eyebrow: "Product Priorities",
      title: "What a product-led discussion usually needs to clarify.",
      description: "This section stays product-specific instead of repeating the whole site structure.",
      cards: [
        {
          icon: "battery",
          title: "Storage type and scale",
          description: "Clarify whether the requirement is home storage or a larger commercial storage scope."
        },
        {
          icon: "workflow",
          title: "Integration path",
          description: "Confirm whether the products need to fit a standalone storage system or a solar-plus-storage setup."
        },
        {
          icon: "supply",
          title: "Balance-of-system needs",
          description: "Component selection is easier when inverter, cable, and project-side electrical needs are discussed together."
        }
      ]
    }
  },
  zh: {
    groups: {
      residential: {
        title: "户用储能硬件",
        description: "围绕家庭备用电源、光伏自发自用和日常能源韧性的电池型硬件。",
        items: ["磷酸铁锂电池方向", "混合逆变器配套", "屋顶光伏兼容"]
      },
      commercial: {
        title: "工商业储能硬件",
        description: "支撑工商业储能规划和站内能源调节的电池与电力转换组件。",
        items: ["磷酸铁锂电池系统", "逆变器集成", "电气连接支持"]
      },
      solar: {
        title: "光伏发电硬件",
        description: "支撑屋顶、站内发电和分布式能源安装的核心光伏产品。",
        items: ["光伏组件供货", "光伏逆变器支持", "项目电缆协调"]
      }
    },
    selection: {
      eyebrow: "产品重点",
      title: "产品沟通常见的几个关键确认点。",
      description: "这一段保持产品导向，不再重复讲整站结构。",
      cards: [
        {
          icon: "battery",
          title: "储能类型与规模",
          description: "先明确需求更偏家庭储能，还是更大规模的工商业储能范围。"
        },
        {
          icon: "workflow",
          title: "系统集成路径",
          description: "确认产品是用于独立储能系统，还是光储一体化方案。"
        },
        {
          icon: "supply",
          title: "系统配套需求",
          description: "如果能同时说明逆变器、电缆和项目侧电气需求，产品沟通会更高效。"
        }
      ]
    }
  }
};

export default function ProductsPage() {
  const { lang } = useLang();
  const { products, shared } = siteContent[lang];
  const ui = productSuiteContent[lang];

  return (
    <>
      <PageMetadata
        title="Products | KC Solar Energy LLC"
        description="Products and core components for residential storage, commercial & industrial storage, and solar."
      />
      <PageHero
        eyebrow={products.hero.eyebrow}
        title={products.hero.title}
        description={products.hero.description}
        visual={
          <VisualPanel
            src="/photos/bess-cabinet-premium.jpg"
            alt={lang === "zh" ? "储能设备" : "Battery storage equipment"}
            eyebrow={lang === "zh" ? "产品方向" : "Product Direction"}
            title={lang === "zh" ? "围绕三条业务线来理解产品。" : "Understand the product story through the three core business lines."}
            description={
              lang === "zh"
                ? "产品页现在只保留户用储能、工商业储能和光伏相关内容。"
                : "The product page now stays focused on Residential Storage, Commercial & Industrial Storage, and Solar."
            }
            priority
          />
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/solutions" className="btn-primary">
            {products.hero.primary}
          </Link>
          <Link href="/contact" className="btn-secondary">
            {products.hero.secondary}
          </Link>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={products.groups.eyebrow} title={products.groups.title} description={products.groups.description} />

          <div className="grid gap-6 md:grid-cols-3">
            {shared.lines.map((line) => {
              const suite = ui.groups[line.key];

              return (
                <FeatureCard
                  key={line.key}
                  icon={line.icon}
                  eyebrow={lang === "zh" ? "产品组" : "Product Group"}
                  title={suite.title}
                  description={suite.description}
                  items={suite.items}
                  tone="accent"
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <VisualPanel
            src="/photos/solar-storage-campus.jpg"
            alt={lang === "zh" ? "光伏与储能场站" : "Solar and storage site"}
            eyebrow={lang === "zh" ? "组件逻辑" : "Component Logic"}
            title={lang === "zh" ? "产品围绕储能和光伏相关组件来组织。" : "Products are organized around storage and solar-related components."}
            description={
              lang === "zh"
                ? "产品页先看业务线，再看核心组件分类。"
                : "The page first organizes the business by line, then clarifies the key component categories."
            }
          />

          <div className="section-stack">
            <SectionHeading eyebrow={products.categories.eyebrow} title={products.categories.title} description={products.categories.description} />

            <div className="grid gap-4">
              {shared.componentCategories.map((item) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  eyebrow={lang === "zh" ? "核心组件" : "Core Component"}
                  title={item.title}
                  description={item.description}
                  items={item.items}
                  tone="soft"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="section-stack">
            <SectionHeading eyebrow={ui.selection.eyebrow} title={ui.selection.title} description={ui.selection.description} />

            <div className="grid gap-4">
              {ui.selection.cards.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} tone="soft" />
              ))}
            </div>
          </div>

          <VisualPanel
            src="/photos/solar-rooftop-premium.jpg"
            alt={lang === "zh" ? "光伏与储能硬件" : "Solar and storage hardware"}
            eyebrow={lang === "zh" ? "产品组织方式" : "Product Structure"}
            title={lang === "zh" ? "产品页只讲硬件范围，不再重复解释公司是谁。" : "The product page stays on hardware scope instead of repeating the company story."}
            description={
              lang === "zh"
                ? "这样访客能更快看清楚哪些组件支撑户用储能、工商业储能和光伏。"
                : "This makes it easier for visitors to understand which components support residential storage, C&I storage, and solar."
            }
            items={lang === "zh" ? ["储能硬件", "光伏组件", "逆变与连接组件"] : ["Storage hardware", "PV modules", "Inverters and electrical components"]}
          />
        </div>
      </section>

      <CtaBanner
        eyebrow={products.cta.eyebrow}
        title={products.cta.title}
        description={products.cta.description}
        primaryHref="/contact"
        primaryLabel={products.cta.primary}
        secondaryHref="/applications"
        secondaryLabel={products.cta.secondary}
      />
    </>
  );
}
