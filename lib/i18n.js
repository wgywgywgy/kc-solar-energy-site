import { companyInfo } from "@/lib/company";

export const defaultLang = "en";

export function isSupportedLang(value) {
  return value === "en" || value === "zh";
}

export function getLang() {
  return defaultLang;
}

export const sharedCopy = {
  en: {
    brandTitle: companyInfo.name,
    brandSubtitle: "Solar and Energy Storage",
    navigation: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Solutions", href: "/solutions" },
      { label: "Products", href: "/products" },
      { label: "Applications", href: "/applications" },
      { label: "Contact", href: "/contact" }
    ],
    headerCta: "Contact Us",
    footerPages: "Pages",
    footerContact: "Contact",
    footerDescription:
      "US-based solar and energy storage business support across residential storage, commercial & industrial storage, and solar.",
    footerAddressLabel: "Address",
    footerEmailLabel: "Email",
    footerPhoneLabel: "Phone",
    footerBusinessLabel: "Business",
    footerAddress: companyInfo.address,
    footerEmail: companyInfo.email,
    footerPhone: companyInfo.phoneEn,
    footerBusiness: "Residential Storage, C&I Storage, and Solar",
    footerLink: "Contact the Team",
    privacyLabel: "Privacy Policy",
    switcherLabel: "Language"
  },
  zh: {
    brandTitle: companyInfo.name,
    brandSubtitle: "光伏与储能",
    navigation: [
      { label: "首页", href: "/" },
      { label: "关于我们", href: "/about" },
      { label: "解决方案", href: "/solutions" },
      { label: "产品", href: "/products" },
      { label: "应用场景", href: "/applications" },
      { label: "联系我们", href: "/contact" }
    ],
    headerCta: "联系我们",
    footerPages: "页面导航",
    footerContact: "联系方式",
    footerDescription:
      "面向户用储能、工商业储能和光伏业务方向的美国本地光储能源业务支持。",
    footerAddressLabel: "地址",
    footerEmailLabel: "邮箱",
    footerPhoneLabel: "电话",
    footerBusinessLabel: "业务方向",
    footerAddress: companyInfo.address,
    footerEmail: companyInfo.email,
    footerPhone: companyInfo.phoneZh,
    footerBusiness: "户用储能、工商业储能与光伏",
    footerLink: "联系团队",
    privacyLabel: "隐私政策",
    switcherLabel: "语言"
  }
};
