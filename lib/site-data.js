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
        title: "Vetted Engineering for Industrial Energy Security.",
        description:
          "KC Solar Energy LLC delivers specialized energy storage solutions that combine high-tier manufacturing with global field experience.",
        paragraphs: [
          "Our solutions go beyond standard hardware. We provide the engineering depth required for mission-critical BESS deployments in demanding environments.",
          "Through our dual-core structure in Tokyo and Shijiazhuang, we ensure your project receives both technical innovation and robust supply chain support."
        ]
      },
      lines: {
        eyebrow: "Service Capabilities",
        title: "Three Paths to Operational Resilience.",
        description: "Focusing on technical excellence across residential, commercial, and solar asset integration."
      },
      trust: {
        eyebrow: "Direct Experience",
        title: "Founded on Real-World EPC Delivery.",
        description: "We don't just supply; we engineer. Every product is a component we trust for our own international project deployments."
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
        title: "Integrating Manufacturing Depth with Local Market Execution.",
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
        description: "Reach our technical or commercial teams through our regional APAC hub or manufacturing center.",
        cards: [
          { title: "Company Name", description: companyInfo.name },
          { title: "Global APAC Hub", description: companyInfo.address },
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
        note: "Direct technical support available via WhatsApp Business. Authorized Email: sales@kcsolarenergy.com"
      }
    }
  }
};
