"use client";

import { FeatureCard } from "@/components/feature-card";
import { PageMetadata } from "@/components/page-metadata";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { useLang } from "@/components/lang-provider";
import { companyInfo } from "@/lib/company";

const privacyCopy = {
  en: {
    hero: {
      eyebrow: "Privacy Policy",
      title: "Privacy Policy for KC Solar Energy LLC",
      description: "Last updated: March 9, 2026"
    },
    summary: {
      eyebrow: "Overview",
      title: "How information is handled on this website.",
      description: "This page explains the basic privacy practices used in connection with website visits and contact inquiries."
    },
    highlights: [
      {
        title: "Contact-form information",
        description: "We may receive the details you submit through the contact form, including name, company, email address, and inquiry content."
      },
      {
        title: "Business communication use",
        description: "Submitted information may be used to respond to inquiries and continue legitimate business communication."
      },
      {
        title: "Language preference cookie",
        description: "This website uses a cookie to remember whether you prefer English or Chinese."
      }
    ],
    sections: [
      {
        title: "Information we may collect",
        body:
          "We may collect the information you provide through the contact form, including your name, company name, email address, and the details you include in your inquiry."
      },
      {
        title: "How we use information",
        body:
          "We use submitted information to respond to inquiries, communicate about products or services, and follow up on business opportunities related to photovoltaic power generation and energy storage solutions."
      },
      {
        title: "Cookies and website preferences",
        body:
          "This website uses a language preference cookie to remember whether you prefer English or Chinese. We may also rely on standard hosting or server logs for site operation and security."
      },
      {
        title: "Information sharing",
        body:
          "We do not state that personal information is sold. Information may be shared with service providers or partners only when reasonably necessary to operate the website, respond to inquiries, or support legitimate business communication."
      },
      {
        title: "Retention",
        body:
          "We may retain submitted information for as long as reasonably necessary to handle inquiries, maintain records, and support ongoing business communication."
      },
      {
        title: "Your contact options",
        body:
          "If you would like to contact us regarding privacy or information submitted through this website, please use the email and mailing address listed below."
      }
    ],
    contact: {
      eyebrow: "Privacy Contact",
      title: "Contact KC Solar Energy LLC regarding privacy questions.",
      description: "Use the following business information for privacy-related communication.",
      items: [
        `Company: ${companyInfo.name}`,
        `Address: ${companyInfo.address}`,
        `Email: ${companyInfo.email}`,
        `Phone: ${companyInfo.phoneEn}`
      ]
    }
  },
  zh: {
    hero: {
      eyebrow: "隐私政策",
      title: "KC Solar Energy LLC 隐私政策",
      description: "最后更新：2026 年 3 月 9 日"
    },
    summary: {
      eyebrow: "概述",
      title: "说明本网站如何处理相关信息。",
      description: "本页用于说明网站访问和联系咨询相关的基础隐私处理方式。"
    },
    highlights: [
      {
        title: "联系表单信息",
        description: "我们可能接收你通过联系表单提交的姓名、公司、邮箱地址和咨询内容。"
      },
      {
        title: "业务沟通用途",
        description: "所提交的信息可能用于回复咨询，并继续合理的业务沟通。"
      },
      {
        title: "语言偏好 Cookie",
        description: "本网站使用 Cookie 记住你偏好的英文或中文语言设置。"
      }
    ],
    sections: [
      {
        title: "我们可能收集的信息",
        body:
          "我们可能会收集你通过联系表单提交的信息，包括姓名、公司名称、邮箱地址以及你在咨询内容中提供的相关信息。"
      },
      {
        title: "信息的使用方式",
        body:
          "这些信息主要用于回复咨询、沟通产品或服务信息，以及跟进与光伏发电和储能解决方案相关的业务机会。"
      },
      {
        title: "Cookie 与网站偏好设置",
        body:
          "本网站会使用语言偏好 Cookie 以记住你选择的是英文还是中文。网站运行与安全也可能依赖标准的服务器日志或托管服务记录。"
      },
      {
        title: "信息共享",
        body:
          "我们不会声明出售个人信息。只有在网站运营、回复咨询或支持合理业务沟通所必需的情况下，信息才可能与服务提供方或合作方共享。"
      },
      {
        title: "信息保留",
        body:
          "我们可能在合理必要的期限内保留你提交的信息，以便处理咨询、保存业务记录并支持后续沟通。"
      },
      {
        title: "如何联系",
        body:
          "如果你希望就隐私问题或通过本网站提交的信息与我们联系，可使用下方列出的邮箱和邮寄地址。"
      }
    ],
    contact: {
      eyebrow: "隐私联系信息",
      title: "如有隐私问题，可联系 KC Solar Energy LLC。",
      description: "以下业务信息可用于隐私相关沟通。",
      items: [
        `公司名称：${companyInfo.name}`,
        `地址：${companyInfo.address}`,
        `邮箱：${companyInfo.email}`,
        `电话：${companyInfo.phoneZh}`
      ]
    }
  }
};

export default function PrivacyPolicyPage() {
  const { lang } = useLang();
  const copy = privacyCopy[lang];

  return (
    <>
      <PageMetadata title="Privacy Policy | KC Solar Energy LLC" description="Privacy Policy for KC Solar Energy LLC." />
      <PageHero eyebrow={copy.hero.eyebrow} title={copy.hero.title} description={copy.hero.description} />

      <section className="section-space">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={copy.summary.eyebrow} title={copy.summary.title} description={copy.summary.description} />

          <div className="grid gap-5 lg:grid-cols-3">
            {copy.highlights.map((item, index) => (
              <FeatureCard
                key={item.title}
                icon={["checklist", "mail", "workflow"][index]}
                title={item.title}
                description={item.description}
                tone="soft"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2">
            {copy.sections.map((section, index) => (
              <FeatureCard
                key={section.title}
                icon={["checklist", "mail", "workflow", "shield", "grid", "location"][index]}
                title={section.title}
                description={section.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="container-shell">
          <div className="panel-card panel-card-lg panel-card-soft">
            <SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} description={copy.contact.description} />
            <div className="mt-6 grid gap-3">
              {copy.contact.items.map((item) => (
                <div key={item} className="detail-pill">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
