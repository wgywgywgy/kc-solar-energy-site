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

const detailIcons = ["shield", "location", "mail", "workflow"];

const contactUi = {
  en: {
    response: {
      eyebrow: "Before You Reach Out",
      title: "A stronger first inquiry starts with the use case.",
      description: "The site is now organized around three business lines, so contact requests should start there as well."
    },
    formSection: {
      eyebrow: "Contact and Inquiry",
      title: "One page for real company information and direct business contact.",
      description: "The contact page no longer repeats the rest of the site. It focuses on verified details and the inquiry form."
    },
    workflow: {
      eyebrow: "What Happens Next",
      title: "After the first inquiry, keep the discussion structured.",
      description: "KC Solar Energy LLC follows a simple process: identify the business line, confirm the use case, and continue the conversation by email."
    },
    finalCta: {
      eyebrow: "Start the Discussion",
      title: "Contact KC Solar Energy LLC about Residential Storage, C&I Storage, or Solar.",
      description: "Send an inquiry if you already know the business line or application context."
    }
  },
  zh: {
    response: {
      eyebrow: "联系前建议",
      title: "从使用场景开始，首次沟通会更高效。",
      description: "网站现在围绕三条业务线组织，因此联系内容也建议先从这里开始。"
    },
    formSection: {
      eyebrow: "联系与咨询",
      title: "这一页只保留真实公司信息和直接询盘入口。",
      description: "联系页不再重复整站内容，而是集中展示经确认的信息和表单。"
    },
    workflow: {
      eyebrow: "后续流程",
      title: "首次咨询之后，让沟通保持结构化。",
      description: "KC Solar Energy LLC 会按照明确业务线、确认应用场景、继续邮件沟通的方式推进。"
    },
    finalCta: {
      eyebrow: "开始沟通",
      title: "联系 KC Solar Energy LLC 了解户用储能、工商业储能或光伏。",
      description: "如果你已经知道需求属于哪条业务线或哪种应用场景，可直接提交咨询。"
    }
  }
};

export default function ContactPage() {
  const { lang } = useLang();
  const { contact, shared } = siteContent[lang];
  const ui = contactUi[lang];

  return (
    <>
      <PageMetadata
        title="Contact | KC Solar Energy LLC"
        description="Contact KC Solar Energy LLC regarding residential storage, commercial & industrial storage, or solar."
      />
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        description={contact.hero.description}
        visual={
          <VisualPanel
            src="/photos/contact-storage.jpg"
            alt={lang === "zh" ? "光伏与储能联系页主视觉" : "Solar and battery storage contact visual"}
            eyebrow={lang === "zh" ? "直接联系" : "Direct Contact"}
            title={lang === "zh" ? "真实公司信息已经作为网站正式联系入口。" : "Real company information presented as the official contact entry point."}
            description={lang === "zh" ? "KC Solar Energy LLC 的联系页现在使用真实地址、邮箱和按需提供的电话信息。" : "The contact page now uses KC Solar Energy LLC's real address, email, and request-based phone detail."}
            priority
          />
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={`mailto:${companyInfo.email}`} className="btn-primary">
            {lang === "zh" ? "发送邮件" : "Email Us"}
          </a>
          <Link href="/solutions" className="btn-secondary">
            {lang === "zh" ? "查看解决方案" : "View Solutions"}
          </Link>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="section-stack">
            <SectionHeading eyebrow={ui.formSection.eyebrow} title={ui.formSection.title} description={ui.formSection.description} />

            <div className="grid gap-4">
              {contact.details.cards.map((card, index) => (
                <FeatureCard
                  key={card.title}
                  icon={detailIcons[index]}
                  title={card.title}
                  description={card.description}
                  tone="soft"
                />
              ))}
            </div>
          </div>

          <div className="section-stack">
            <div id="inquiry-form" className="panel-card panel-card-lg">
              <form action={`mailto:${companyInfo.email}`} method="post" encType="text/plain" className="grid gap-5">
                <div className="panel-stack">
                  <span className="chip chip-secondary">{contact.form.eyebrow}</span>
                  <p className="body-copy">{contact.form.description}</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    {contact.form.name}
                    <input type="text" name="name" className="field" placeholder={contact.form.placeholderName} />
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    {contact.form.company}
                    <input type="text" name="company" className="field" placeholder={contact.form.placeholderCompany} />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    {contact.form.email}
                    <input type="email" name="email" className="field" placeholder={contact.form.placeholderEmail} />
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    {contact.form.type}
                    <select name="projectType" className="field">
                      {contact.form.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-medium">
                  {contact.form.overview}
                  <textarea
                    name="overview"
                    rows="6"
                    className="field resize-none"
                    placeholder={contact.form.placeholderOverview}
                  />
                </label>

                <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--background-strong)] p-4 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-xl body-copy">{contact.form.note}</p>
                  <button type="submit" className="btn-primary">
                    {contact.form.submit}
                  </button>
                </div>
              </form>
            </div>

            <div className="panel-card panel-card-lg panel-card-soft">
              <SectionHeading eyebrow={ui.workflow.eyebrow} title={ui.workflow.title} description={ui.workflow.description} />
              <div className="mt-6 grid gap-4">
                {shared.workflow.map((item) => (
                  <article key={item.step} className="panel-card">
                    <div className="flex items-start gap-4">
                      <div className="number-chip">{item.step}</div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-3 body-copy">{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <VisualPanel
            src="/photos/bess-project-premium.jpg"
            alt={lang === "zh" ? "储能项目沟通" : "Battery storage project discussion"}
            eyebrow={lang === "zh" ? "咨询准备" : "Inquiry Readiness"}
            title={lang === "zh" ? "先把业务线和场景说清楚，沟通会更像一次正式项目讨论。" : "Clarifying the business line and site context makes the first exchange feel more like a real project discussion."}
            description={lang === "zh" ? "联系页不再只是简单表单，而是把沟通路径整理得更清楚。" : "The contact page is no longer just a form. It now clarifies the path into a more useful business conversation."}
          />

          <div className="section-stack">
            <SectionHeading eyebrow={ui.response.eyebrow} title={ui.response.title} description={ui.response.description} />
            <div className="grid gap-4">
              {shared.inquiryChecklist.map((item) => (
                <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} tone="soft" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow={ui.finalCta.eyebrow}
        title={ui.finalCta.title}
        description={ui.finalCta.description}
        primaryHref="/contact#inquiry-form"
        primaryLabel={lang === "zh" ? "提交咨询" : "Send Inquiry"}
        secondaryHref="/applications"
        secondaryLabel={lang === "zh" ? "查看应用场景" : "View Applications"}
      />
    </>
  );
}
