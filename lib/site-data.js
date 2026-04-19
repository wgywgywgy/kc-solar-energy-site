import { companyInfo } from "@/lib/company";

const linesEn = [
  {
    key: "residential",
    icon: "battery",
    title: "Whole-Home Backup & Solar Self-Consumption",
    shortTitle: "Home Storage",
    description: "Ensure continuous power with high-safety LFP systems designed for complete household energy autonomy and grid resilience.",
    points: ["Seamless UPS backup (<10ms)", "Certified LFP chemistry (UL/CEC)", "Advanced load management"],
    outcomes: ["Grid independence", "Peak load shaving", "Emergency protection"]
  },
  {
    key: "commercial",
    icon: "factory",
    title: "C&I Peak Shaving & Mission-Critical Power",
    shortTitle: "C&I Storage",
    description: "Engineered for high-demand environments. Our BESS solutions reduce demand charges and provide stable backup for industrial operations.",
    points: ["Up to 80% fuel reduction", "Scalable containerized units", "Demand response ready"],
    outcomes: ["Opex reduction", "Power quality assurance", "Carbon footprint reduction"]
  },
  {
    key: "solar",
    icon: "solar",
    title: "Full-Lifecycle Solar Integration",
    shortTitle: "Solar EPC",
    description: "Expert engineering and procurement for commercial-grade PV assets, from technical audit to successful grid connection.",
    points: ["Tier-1 component selection", "High-efficiency DC coupling", "Professional O&M support"],
    outcomes: ["Maximizing ROI", "Certainty in delivery", "Scalable energy assets"]
  }
];

const linesZh = [
  {
    key: "residential",
    icon: "battery",
    title: "全屋备电与光伏自发自用",
    shortTitle: "家庭储能",
    description: "采用高安全等级 LFP 系统，为家庭实现全方位电力自治，有效抵御极端天气导致的电网波动。",
    points: ["无缝 UPS 切换 (<10ms)", "高安全磷酸铁锂技术", "智能能耗追踪"],
    outcomes: ["能源独立", "自发自用", "家庭韧性"]
  },
  {
    key: "commercial",
    icon: "factory",
    title: "工商业削峰填谷与关键电力保障",
    shortTitle: "工商业储能",
    description: "专为高耗能场景设计。我们的 BESS 方案通过削峰填谷降低需量电费，保障生产连续性。",
    points: ["大幅降低运营成本", "模块化可扩展设计", "并网/离网多模运行"],
    outcomes: ["降低 Opex", "保障连续生产", "优化能源结构"]
  },
  {
    key: "solar",
    icon: "solar",
    title: "全生命周期光伏资产集成",
    shortTitle: "光伏集成",
    description: "提供可融资级光伏工程设计与设备采购，确保电站资产从收益测算到并网交付的确定性。",
    points: ["一线品牌供应链支持", "高效直流耦合技术", "全球化运维保障"],
    outcomes: ["最大化投资回报", "确定性交付", "优质能源资产"]
  }
];

export const siteContent = {
  en: {
    shared: {
      lines: linesEn,
      trustPoints: [
        {
          icon: "location",
          title: "Strategic Global Infrastructure",
          description: "Operating a professional dual-core structure with design centers in Tokyo and advanced manufacturing in Shijiazhuang."
        },
        {
          icon: "shield",
          title: "9+ Years of EPC Heritage",
          description: "Our group companies bring a decade of experience in delivering complex power infrastructure and industrial energy projects."
        },
        {
          icon: "workflow",
          title: "Listed Supply Chain Synergy",
          description: "Leveraging longstanding partnerships with leading Chinese power equipment manufacturers (603050.SH) for global reliability."
        }
      ],
      workflow: [
        {
          step: "01",
          title: "Technical Load Audit",
          description: "We analyze your energy profile and site constraints to identify your specific savings and backup potential."
        },
        {
          step: "02",
          title: "Custom Solution Engineering",
          description: "We engineer the specific BESS and PV configuration tailored precisely to your operational requirements."
        },
        {
          step: "03",
          title: "Deployment & Commissioning",
          description: "Complete EPC delivery ensuring your system is optimized for long-term ROI and safety."
        }
      ],
      inquiryChecklist: [
        {
          icon: "checklist",
          title: "Specify Business Type",
          description: "Residential backup, commercial peak shaving, or large-scale solar procurement?"
        },
        {
          icon: "factory",
          title: "Provide Site Context",
          description: "Include details on current grid reliability and typical daily peak energy consumption."
        },
        {
          icon: "workflow",
          title: "Define Success Metrics",
          description: "Are you prioritizing backup duration, ROI payback period, or carbon reduction goals?"
        }
      ],
      componentCategories: [
        {
          icon: "battery",
          title: "LFP Battery Systems",
          description: "High-cycle lithium iron phosphate storage for mission-critical industrial and residential applications.",
          items: ["Long-cycle reliability", "Modular scalability", "Thermal safety verified"]
        },
        {
          icon: "workflow",
          title: "Power Conversion (PCS)",
          description: "High-efficiency bi-directional inverters supporting advanced micro-grid and grid-tie scenarios.",
          items: ["Parallel expansion", "Seamless switchover", "Smart EMS integration"]
        },
        {
          icon: "solar",
          title: "PV Modules & Arrays",
          description: "High-efficiency photovoltaic hardware optimized for durable commercial solar deployment.",
          items: ["Verified durability", "System-wide compatibility", "Tier-1 performance"]
        },
        {
          icon: "supply",
          title: "Integrated Cabinets",
          description: "Professional electrical distribution and pre-assembled cabinet solutions for field-ready installation.",
          items: ["Pre-wired designs", "Certified components", "Standardized safety"]
        }
      ],
      applicationScenarios: [
        {
          icon: "building",
          title: "Premium Household Autonomy",
          description: "Independent power systems for residences requiring absolute reliability and solar self-consumption."
        },
        {
          icon: "factory",
          title: "Industrial & Construction Sites",
          description: "Rugged BESS cabinets designed to provide stable power in remote or temporary environments."
        },
        {
          icon: "solar",
          title: "Commercial Rooftop Solar",
          description: "Maximizing the energy value of commercial real estate through integrated storage and PV."
        },
        {
          icon: "grid",
          title: "Off-grid Energy Clusters",
          description: "Complete micro-grid solutions for remote facilities, mining zones, and independent research stations."
        },
        {
          icon: "workflow",
          title: "Demand Charge Optimization",
          description: "Sophisticated peak-shaving applications to slash operational energy costs and improve margins."
        },
        {
          icon: "chart",
          title: "Energy Asset Development",
          description: "BESS and PV projects engineered for financial performance and bankable outcomes."
        }
      ],
      pageGuide: [
        {
          icon: "layers",
          title: "Solutions",
          description: "Specific energy engineering for construction, industrial, and residential environments.",
          href: "/solutions",
          cta: "Technical Solutions"
        },
        {
          icon: "box",
          title: "Products",
          description: "Industrial-grade hardware components vetted by our 9-year EPC operations.",
          href: "/products",
          cta: "Product Dossiers"
        },
        {
          icon: "factory",
          title: "Applications",
          description: "See how our technology performs in real-world industrial and remote settings.",
          href: "/applications",
          cta: "Field Cases"
        }
      ]
    },
    home: {
      hero: {
        eyebrow: "KC Solar Energy LLC",
        title: "Solar and Battery Storage Solutions for Homes and Businesses.",
        description:
          "High-performance BESS and PV integration engineered for reliability and long-term ROI. Protecting your operations from grid volatility and rising fuel costs.",
        primary: "Request Custom Proposal",
        secondary: "Download Profile"
      },
      intro: {
        eyebrow: "Engineering Partner",
        title: "Delivering Certainty in Modern Energy Infrastructure.",
        description:
          "KC Solar Energy LLC bridges the gap between high-tier manufacturing and local project execution in the US and APAC markets.",
        paragraphs: [
          "Backed by over 9 years of EPC heritage in China, we specialize in delivering customized, mission-critical energy storage solutions.",
          "We focus on Residential Storage, Commercial & Industrial Storage, and Solar Integration, ensuring both technical innovation and robust supply chain support."
        ]
      },
      lines: {
        eyebrow: "Service Capabilities",
        title: "Three Paths to Operational Resilience.",
        description: "Focusing on technical excellence across residential, commercial, and solar asset integration."
      },
      trust: {
        eyebrow: "Industrial Credibility",
        title: "Engineering Performance, Not Just Sourcing Hardware.",
        description: "We leverage a strategic supply chain and a decade of real-world EPC experience to minimize project risk."
      },
      workflow: {
        eyebrow: "Engagement Process",
        title: "From Initial Audit to Certain Delivery.",
        description: "A disciplined engineering approach designed to maximize system performance and financial returns."
      },
      cta: {
        eyebrow: "Start Consultation",
        title: "Ready to stabilize your energy costs with professional BESS integration?",
        description: "Connect with our technical team for an initial site assessment and preliminary ROI projection.",
        primary: "Request Audit",
        secondary: "Company Profile"
      }
    },
    about: {
      hero: {
        eyebrow: "Corporate Group",
        title: "Bridging Manufacturing Depth with Global Market Execution.",
        description:
          "KC Solar Energy LLC acts as the strategic gateway for KC Global Holdings, providing dedicated cross-border engineering support for the BESS sector.",
        pillars: [
          { title: "EPC Pedigree", description: "9+ Years of Field Experience" },
          { title: "Supply Partners", description: "Listed Chinese Manufacturers" },
          { title: "Core Operations", description: "Tokyo | US | China" }
        ]
      },
      profile: {
        eyebrow: "Our Identity",
        title: "An Engineering-First Energy Enterprise.",
        description:
          "We operate at the nexus of technical depth, international finance, and local deployment requirements.",
        paragraphs: [
          "We specialize in bridging the gap between advanced energy storage hardware and the complex requirements of field installation.",
          "Our mission is to provide global developers and EPC firms with a reliable, bankable partner for customized energy solutions."
        ]
      },
      coverage: {
        eyebrow: "Business Scope",
        title: "Focusing on the most critical storage and solar needs.",
        description: "Maintaining a lean, expert-driven structure to ensure maximum responsiveness and project focus."
      },
      cta: {
        eyebrow: "Next Steps",
        title: "Partner with an engineering-led energy integrator.",
        description: "Contact us to review our solution portfolio or schedule a direct briefing with our leadership.",
        primary: "Contact Us",
        secondary: "See Solutions"
      }
    },
    solutions: {
      hero: {
        eyebrow: "Expertise",
        title: "Scene-Specific Engineering for Complex Power Environments.",
        description:
          "From urban construction sites to remote mining zones, we engineer BESS configurations that solve real operational challenges.",
        primary: "Hardware Data",
        secondary: "Request Audit"
      },
      guide: {
        eyebrow: "Strategy",
        title: "Outcome-Driven Configuration.",
        description: "We align system architecture with specific client pain points to ensure technical and financial success."
      },
      families: {
        eyebrow: "Core Solution Sets",
        title: "Proven performance in the field's most vital scenarios.",
        description: "Every solution is backed by empirical data and verified ROI projections."
      },
      support: {
        eyebrow: "Field Support",
        title: "Engineering verified at every stage.",
        description: "Our technical team reviews every proposal to ensure full compatibility with local grid requirements."
      },
      cta: {
        eyebrow: "Solution Audit",
        title: "Optimize your site's energy profile today.",
        description: "Submit your load data for a custom technical assessment and system configuration proposal.",
        primary: "Request Audit",
        secondary: "View Applications"
      }
    },
    products: {
      hero: {
        eyebrow: "Components",
        title: "Industrial-Grade Hardware for Predictable Performance.",
        description:
          "Our component selection is driven by the rigorous standards of our group's 9-year EPC track record.",
        primary: "Solution Sets",
        secondary: "Get Datasheets"
      },
      groups: {
        eyebrow: "Selection Protocol",
        title: "Verified by Engineers, for Engineers.",
        description: "We only supply hardware that has been proven in our own commercial and industrial project sites."
      },
      categories: {
        eyebrow: "Core Hardware",
        title: "The four pillars of our energy supply chain.",
        description: "Focusing on the components most vital to modern storage and solar system uptime."
      },
      inquiry: {
        eyebrow: "Supply Support",
        title: "Streamlined logistics and technical verification.",
        description: "We provide comprehensive support for high-volume procurement and project-side component delivery."
      },
      cta: {
        eyebrow: "Technical Data",
        title: "Access full specifications and compliance certification lists.",
        description: "Connect with us for detailed product dossiers and regional supply availability.",
        primary: "Get Datasheets",
        secondary: "View Applications"
      }
    },
    applications: {
      hero: {
        eyebrow: "Real-world Performance",
        title: "Engineering Solutions Validated by the Field.",
        description:
          "Observe how KC Solar Energy LLC technology manages power in high-stakes industrial and residential settings.",
        primary: "Technical Data",
        secondary: "Contact Us"
      },
      sectors: {
        eyebrow: "Site Capability",
        title: "Operational Excellence across Borders.",
        description: "Our systems are built to perform from tropical construction zones to remote industrial clusters."
      },
      priorities: {
        eyebrow: "Customer Goals",
        title: "Delivering Certainty in Energy Management.",
        description: "Our application focus is defined by three outcomes: Reliability, Cost Control, and Energy Autonomy."
      },
      cta: {
        eyebrow: "Assessment",
        title: "Verify system compatibility with your environment.",
        description: "Share your site details for a preliminary application and performance review.",
        primary: "Contact Us",
        secondary: "View Hardware"
      }
    },
    contact: {
      hero: {
        eyebrow: "Technical Consultation",
        title: "Connect with our Engineering Team.",
        description:
          "Discuss project-specific BESS and Solar requirements with our specialized consultants.",
      },
      details: {
        eyebrow: "Contact Info",
        title: "Global Operations, Direct Response",
        description: "Reach our technical or commercial teams through our regional manufacturing center.",
        cards: [
          { title: "Company Name", description: companyInfo.name },
          { title: "US Office", description: companyInfo.address },
          { title: "Manufacturing", description: "Shijiazhuang, China" },
          { title: "Email", description: companyInfo.email }
        ]
      },
      topics: {
        eyebrow: "Inquiry Routes",
        title: "Technical, Commercial, or Supply Chain.",
        description: "Our team is standing by to manage project-specific technical audits and large-scale procurement inquiries."
      },
      form: {
        eyebrow: "Request a Proposal",
        description: "Submit your site profile for a custom technical energy audit and ROI projection.",
        name: "Full Name",
        company: "Company Name",
        email: "Work Email",
        type: "Inquiry Type",
        overview: "Project Scope / Pain Points",
        placeholderName: "Your name",
        placeholderCompany: "Energy Development Corp",
        placeholderEmail: "engineering@company.com",
        placeholderOverview: "Please describe your site, current power source (grid/diesel), and storage requirements.",
        options: ["C&I BESS Audit", "Residential Backup Inquiry", "Solar Component Procurement", "General Partnership"],
        submit: "Request Technical Audit",
        note: "Direct technical support available via WhatsApp Business. Authorized Email: info@kcsolarenergy.com"
      }
    }
  },
  zh: {
    shared: {
      lines: linesZh,
      trustPoints: [
        {
          icon: "location",
          title: "全球战略布局",
          description: "KC Solar Energy LLC 采用双核架构：东京亚太设计中心，中国顶尖研发制造基地。"
        },
        {
          icon: "shield",
          title: "深厚 EPC 工程底蕴",
          description: "依托 9 年以上中国电力基础设施与工业能源项目交付经验，确保工程可靠性。"
        },
        {
          icon: "workflow",
          title: "上市企业供应链伙伴",
          description: "与中国领先的电力设备制造商（科林电气 603050.SH）建立长期战略协同。"
        }
      ],
      workflow: [
        {
          step: "01",
          title: "技术负荷审计",
          description: "分析您的用电画像和场站限制，挖掘真实的节电与备电潜力。"
        },
        {
          step: "02",
          title: "定制化工程方案",
          description: "针对项目需求，精选最匹配的 LFP 电池与电力转换组件进行系统集成。"
        },
        {
          step: "03",
          title: "交付与并网调试",
          description: "提供全流程 EPC 交付，确保系统在长期 ROI 和安全性方面达到最优状态。"
        }
      ],
      inquiryChecklist: [
        {
          icon: "checklist",
          title: "选择业务类型",
          description: "户用备电、工商业削峰填谷还是大规模光伏集采？"
        },
        {
          icon: "factory",
          title: "提供场站背景",
          description: "请提供当前电网可靠性及典型的每日高峰耗电量详情。"
        },
        {
          icon: "workflow",
          title: "明确成功指标",
          description: "您更看重备电时长、投资回收期还是碳减排目标？"
        }
      ],
      componentCategories: [
        {
          icon: "battery",
          title: "LFP 电池系统",
          description: "面向工业应用的高循环磷酸铁锂储能设备。",
          items: ["长寿命高可靠性", "模块化灵活扩展", "热安全验证"]
        },
        {
          icon: "workflow",
          title: "电力转换系统 (PCS)",
          description: "支持微电网与并网场景的高效双向逆变器，确保系统稳定运行。",
          items: ["多机并联扩展", "毫秒级无缝切换", "智能 EMS 集成"]
        },
        {
          icon: "solar",
          title: "光伏组件与方阵",
          description: "为大型分布式商业项目优化的高效光伏硬件。",
          items: ["经验证的耐用性", "全系统兼容性", "一线品牌性能"]
        },
        {
          icon: "supply",
          title: "集成配电柜体",
          description: "专业的配电与预装配集成方案，确保现场安装的高标准与安全性。",
          items: ["预接线设计", "认证级组件", "标准化安全"]
        }
      ],
      applicationScenarios: [
        {
          icon: "building",
          title: "高端住宅电力自治",
          description: "为对电力可靠性有极高要求的家庭提供独立能源保障方案。"
        },
        {
          icon: "factory",
          title: "工业与建筑工地供电",
          description: "专为替代昂贵、嘈杂的柴油发电机而设计的移动式 BESS 储能柜。"
        },
        {
          icon: "solar",
          title: "商业屋顶光伏",
          description: "通过集成的光储方案，最大化商业地产的能源价值与财务回报。"
        },
        {
          icon: "grid",
          title: "离网能源集群",
          description: "为偏远矿区、海岛、研究站提供完整的微电网解决方案。"
        },
        {
          icon: "workflow",
          title: "需量电费优化",
          description: "通过先进的削峰填谷方案，大幅降低运营成本并优化利润空间。"
        },
        {
          icon: "chart",
          title: "能源资产开发",
          description: "针对财务表现与可融资性而设计的 BESS 与光伏集成项目。"
        }
      ],
      pageGuide: [
        {
          icon: "layers",
          title: "解决方案",
          description: "针对建筑、工业和住宅环境的定制化能源工程方案。",
          href: "/solutions",
          cta: "查看技术方案"
        },
        {
          icon: "box",
          title: "产品中心",
          description: "经过 9 年 EPC 实战验证的工业级硬件组件。",
          href: "/products",
          cta: "查看产品档案"
        },
        {
          icon: "factory",
          title: "应用案例",
          description: "探索我们的技术在真实工业与极地环境中的表现。",
          href: "/applications",
          cta: "查看现场案例"
        }
      ]
    },
    home: {
      hero: {
        eyebrow: "KC Solar Energy LLC",
        title: "面向家庭与企业的太阳能及储能系统解决方案。",
        description:
          "为高回报率与长期稳定性而设计的 BESS 与光伏集成方案。保护您的运营不受电网波动与油价上涨的影响。",
        primary: "索取定制技术方案书",
        secondary: "下载公司简报"
      },
      intro: {
        eyebrow: "工程伙伴",
        title: "为工业能源安全提供确定性的工程交付。",
        description:
          "KC Solar Energy LLC 致力于将顶尖的制造能力与全球现场实战经验相结合，提供专业的储能方案。",
        paragraphs: [
          "我们的方案超越了标准硬件销售。我们提供关键业务级 BESS 部署所需的工程深度。",
          "我们专注于户用储能、工商业储能与光伏集成，确保技术创新与强韧的供应链支持。"
        ]
      },
      lines: {
        eyebrow: "业务范畴",
        title: "实现运营韧性的三条路径。",
        description: "聚焦技术卓越：涵盖住宅、商业与光伏资产集成。"
      },
      trust: {
        eyebrow: "实战公信力",
        title: "立足于真实的 EPC 交付经验。",
        description: "我们不仅是供应商，更是工程师。每一款产品都是我们在全球项目中亲测可靠的组件。"
      },
      workflow: {
        eyebrow: "对接流程",
        title: "从初始审计到确定性交付。",
        description: "严谨的工程路径，旨在最大化系统性能并确保财务回报。"
      },
      cta: {
        eyebrow: "开启咨询",
        title: "准备好通过专业的 BESS 集成来稳定您的能源成本了吗？",
        description: "联系我们的技术团队，进行初步场站评估与 ROI 收益测算。",
        primary: "索取技术审计",
        secondary: "查看公司简介"
      }
    },
    about: {
      hero: {
        eyebrow: "集团架构",
        title: "连接制造深度与全球市场执行力。",
        description:
          "KC Solar Energy LLC 是 KC Global Holdings 的战略门户，为全球 BESS 领域提供专属的跨境工程支持。",
        pillars: [
          { title: "工程底蕴", description: "9 年以上一线交付经验" },
          { title: "供应伙伴", description: "中国上市电力设备商" },
          { title: "核心运营", description: "东京 | 美国 | 中国" }
        ]
      },
      profile: {
        eyebrow: "公司身份",
        title: "以工程为核心的能源企业。",
        description:
          "我们运行在技术深度、国际金融与本土部署要求的交汇点。",
        paragraphs: [
          "我们专注于弥合先进储能硬件与复杂现场安装要求之间的鸿沟。",
          "我们的使命是为全球开发商与 EPC 公司提供可靠、可融资的定制化能源方案伙伴。"
        ]
      },
      coverage: {
        eyebrow: "业务覆盖",
        title: "聚焦最关键的储能与光伏需求。",
        description: "保持精悍、专家驱动的架构，确保最高的响应速度与项目专注度。"
      },
      cta: {
        eyebrow: "下一步",
        title: "与工程导向的能源集成商合作。",
        description: "了解我们的方案组合，或预约与我们领导层的直接交流。",
        primary: "联系我们",
        secondary: "查看解决方案"
      }
    },
    solutions: {
      hero: {
        eyebrow: "专业能力",
        title: "针对复杂电力环境的场景化工程方案。",
        description:
          "从城市建筑工地到偏远矿区，我们设计的 BESS 配置旨在解决真实的运营挑战。",
        primary: "硬件数据",
        secondary: "获取技术审计"
      },
      guide: {
        eyebrow: "战略逻辑",
        title: "以成果为驱动的系统配置。",
        description: "我们将系统架构 with 客户痛点精准对齐，确保技术与财务上的双重成功。"
      },
      families: {
        eyebrow: "核心方案集",
        title: "在关键应用场景中验证的实战表现。",
        description: "每一份方案都基于实证数据与经过验证的 ROI 测算模型。"
      },
      support: {
        eyebrow: "现场支持",
        title: "全程参与的工程验证。",
        description: "我们的技术团队审核每一份方案，确保与当地电网要求的完全兼容。"
      },
      cta: {
        eyebrow: "方案审计",
        title: "立即优化您的场站用能画像。",
        description: "提交您的负荷数据，获取定制化的技术评估与系统配置建议。",
        primary: "获取技术方案",
        secondary: "查看应用场景"
      }
    },
    products: {
      hero: {
        eyebrow: "核心硬件",
        title: "为可预测的表现而造的工业级组件。",
        description:
          "我们的组件选型遵循集团 9 年 EPC 历程积累的严苛标准。"
      },
      groups: {
        eyebrow: "选型协议",
        title: "由工程师为工程师把关。",
        description: "我们只供应那些在自有工商业项目现场经过验证的硬件。"
      },
      categories: {
        eyebrow: "核心类别",
        title: "能源供应链的四大支柱。",
        description: "聚焦对现代储能与光伏系统运行时间最关键的组件。"
      },
      inquiry: {
        eyebrow: "供应支持",
        title: "高效的物流与技术验证流程。",
        description: "我们为大规模采购和项目现场的组件交付提供全方位支持。"
      },
      cta: {
        eyebrow: "技术数据",
        title: "获取详细规格书与合规认证清单。",
        description: "联系我们获取详细的产品档案及您所在区域的供应情况。",
        primary: "获取规格书",
        secondary: "查看应用场景"
      }
    },
    applications: {
      hero: {
        eyebrow: "实战表现",
        title: "经现场验证的工程方案。",
        description:
          "探索 KC Solar Energy LLC 技术如何在关键的工业与住宅场景中管理电力。",
        primary: "技术数据",
        secondary: "联系我们"
      },
      sectors: {
        eyebrow: "场站能力",
        title: "跨越国界的运营卓越性。",
        description: "我们的系统旨在从热带建筑区到偏远工业集群稳定运行。"
      },
      priorities: {
        eyebrow: "客户目标",
        title: "为能源管理交付确定性。",
        description: "我们的应用重点定义为三个成果：可靠性、成本控制与电力自治。"
      },
      cta: {
        eyebrow: "场站评估",
        title: "验证系统与您环境的兼容性。",
        description: "分享您的场站详情，获取初步的应用与性能评估报告。",
        primary: "联系我们",
        secondary: "查看硬件中心"
      }
    },
    contact: {
      hero: {
        eyebrow: "技术咨询",
        title: "联系我们的工程团队。",
        description:
          "与专业顾问讨论特定项目的 BESS 储能与光伏需求。",
      },
      details: {
        eyebrow: "联系方式",
        title: "全球业务，直接响应",
        description: "通过我们的制造中心联系技术或商务团队。",
        cards: [
          { title: "公司名称", description: companyInfo.name },
          { title: "美国办公室", description: companyInfo.address },
          { title: "制造基地", description: "中国石家庄" },
          { title: "电子邮箱", description: companyInfo.email }
        ]
      },
      topics: {
        eyebrow: "咨询路径",
        title: "技术、商务或供应链。",
        description: "我们的团队随时准备处理特定项目的技术审计与大规模集采咨询。"
      },
      form: {
        eyebrow: "索取方案书",
        description: "提交您的场站画像，获取定制化的技术能源审计与 ROI 测算。",
        name: "姓名",
        company: "公司名称",
        email: "工作邮箱",
        type: "咨询类型",
        overview: "项目范围 / 痛点描述",
        placeholderName: "您的姓名",
        placeholderCompany: "您的机构",
        placeholderEmail: "name@company.com",
        placeholderOverview: "请描述您的场站位置、当前电源（电网/柴发）及储能需求。",
        options: ["工商业储能审计", "高端住宅备电咨询", "光伏组件采购", "一般业务合伙"],
        submit: "获取技术方案",
        note: "通过 WhatsApp Business 可获得即时技术支持。官方邮箱: info@kcsolarenergy.com"
      }
    }
  }
};
