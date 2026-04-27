import type { Metadata } from "next";
import { GulfPage, type GulfPageData } from "@/components/GulfPage";

export const metadata: Metadata = {
  title: "Study in the UK for Saudi Students | EdOne Group — جامعات بريطانية للطلاب السعوديين",
  description:
    "EdOne Group helps Saudi students gain entry to top UK universities. Expert guidance on KASP scholarships, Student Route visas, IELTS requirements and applications from Riyadh, Jeddah and across the Kingdom.",
  alternates: {
    canonical: "https://edonegroup.co.uk/gulf/saudi-arabia",
  },
  openGraph: {
    title: "Study in the UK for Saudi Students | EdOne Group",
    description:
      "Expert UK university guidance for Saudi students — KASP, Aramco, Chevening scholarships and Student Route visa support.",
    url: "https://edonegroup.co.uk/gulf/saudi-arabia",
  },
};

const sharedWithIelts = {
  scoreEn: "IELTS 6.0–7.0",
  notesEn:
    "Most UK postgraduate programmes require IELTS 6.5 overall, with no band below 6.0. Undergraduate typically 6.0.",
  scoreAr: "IELTS 6.0–7.0",
  notesAr:
    "تشترط معظم البرامج البريطانية لمرحلة الدراسات العليا معدل IELTS 6.5 بشكل عام، بدون درجة أقل من 6.0. والبكالوريوس عادةً 6.0.",
};

const sharedWithoutIelts = [
  {
    optionEn: "Pre-sessional English",
    descEn:
      "6–12 week English language course at your target UK university. Pass and proceed directly to your degree.",
    optionAr: "دورة الإنجليزية التمهيدية",
    descAr:
      "دورة لغة إنجليزية 6–12 أسبوعاً في جامعتك البريطانية. اجتازها والتحق مباشرةً بدرجتك.",
  },
  {
    optionEn: "University Internal Test",
    descEn:
      "Some universities accept their own English tests (e.g. OIETC, Duolingo, PTE Academic) as alternatives to IELTS.",
    optionAr: "اختبار الجامعة الداخلي",
    descAr:
      "تقبل بعض الجامعات اختباراتها الخاصة (مثل Duolingo أو PTE) بديلاً عن IELTS.",
  },
  {
    optionEn: "Medium of Instruction Letter",
    descEn:
      "If your degree was taught in English, some universities waive the IELTS requirement with a letter from your institution.",
    optionAr: "خطاب لغة التدريس",
    descAr:
      "إذا كانت دراستك باللغة الإنجليزية، تقبل بعض الجامعات خطاباً من مؤسستك بدلاً من IELTS.",
  },
];

const sharedFees = [
  { levelEn: "Undergraduate", levelAr: "البكالوريوس", range: "£14,000–£25,000/year" },
  {
    levelEn: "Postgraduate (Taught)",
    levelAr: "الدراسات العليا (تدريسي)",
    range: "£16,000–£35,000/year",
  },
  { levelEn: "MBA", levelAr: "ماجستير إدارة الأعمال", range: "£20,000–£60,000/year" },
  { levelEn: "PhD (Research)", levelAr: "الدكتوراه (بحثي)", range: "£17,000–£30,000/year" },
];

const sharedUniversities = [
  { name: "University of Manchester", rank: "Top 30 world", known: "Business, Engineering & Sciences" },
  { name: "University of Edinburgh", rank: "Top 20 world", known: "Medicine, Law & Arts" },
  { name: "UCL", rank: "Top 10 world", known: "Engineering, Sciences & Architecture" },
  { name: "King's College London", rank: "Top 40 world", known: "Law, Medicine & Dentistry" },
  { name: "University of Birmingham", rank: "Top 100 world", known: "Finance, MBA & Computer Science" },
  { name: "University of Exeter", rank: "Top 200 world", known: "Business, Law & Life Sciences" },
];

const sharedWhyUKEn = [
  {
    title: "World-Class Universities",
    desc: "4 of the world's top 10 universities are in the UK. A UK degree is recognised worldwide and respected across Gulf employers.",
  },
  {
    title: "1-Year Masters",
    desc: "UK Masters take just 1 year vs 2 years in the US or Canada — saving you a year of time and tuition.",
  },
  {
    title: "Graduate Route",
    desc: "Stay 2 years after graduation to work in the UK. No job offer needed. Build your career before returning home.",
  },
  {
    title: "Saudi-Friendly Environment",
    desc: "Large Saudi student communities across UK cities. Halal food, prayer facilities, and a welcoming environment in every major UK university city.",
  },
];

const sharedWhyUKAr = [
  {
    title: "جامعات عالمية المستوى",
    desc: "4 من أفضل 10 جامعات في العالم موجودة في المملكة المتحدة. الدرجة العلمية البريطانية معترف بها عالمياً ومحترمة من قِبل أصحاب العمل في دول الخليج.",
  },
  {
    title: "ماجستير في سنة واحدة",
    desc: "يستغرق الماجستير في المملكة المتحدة سنة واحدة فقط مقابل سنتين في الولايات المتحدة أو كندا — مما يوفر عليك سنة كاملة من الوقت والرسوم.",
  },
  {
    title: "مسار الخريجين",
    desc: "ابقَ سنتين بعد التخرج للعمل في المملكة المتحدة. لا تحتاج إلى عرض عمل. ابنِ مسيرتك المهنية قبل العودة إلى الوطن.",
  },
  {
    title: "بيئة ملائمة للطلاب السعوديين",
    desc: "مجتمعات سعودية كبيرة في مدن المملكة المتحدة. طعام حلال ومرافق صلاة وبيئة ترحيبية في كل مدينة جامعية بريطانية كبرى.",
  },
];

const data: GulfPageData = {
  countryEn: "Saudi Arabia",
  countryAr: "المملكة العربية السعودية",
  flag: "🇸🇦",
  taglineEn: "Study in the UK — For Saudi Students",
  taglineAr: "الدراسة في المملكة المتحدة — للطلاب السعوديين",
  heroDescEn:
    "EdOne Group specialises in placing Saudi students at top UK universities. We guide you through the application process, scholarship options, and Student Route requirements — from Riyadh, Jeddah or anywhere in the Kingdom.",
  heroDescAr:
    "تخصصت مجموعة إيدون في مساعدة الطلاب السعوديين للالتحاق بأفضل الجامعات البريطانية. نرشدك خلال عملية التقديم، وخيارات المنح الدراسية، ومتطلبات مسار الطلاب — من الرياض أو جدة أو أي مكان في المملكة.",
  stats: [
    { labelEn: "Average tuition/year", labelAr: "متوسط الرسوم الدراسية", value: "£14,000–£35,000" },
    { labelEn: "Masters duration", labelAr: "مدة الماجستير", value: "1 Year" },
    { labelEn: "Post-study stay", labelAr: "البقاء بعد التخرج", value: "2 Years" },
    { labelEn: "Government scholarships", labelAr: "المنح الحكومية", value: "Available" },
  ],
  scholarships: [
    {
      nameEn: "King Abdullah Scholarship Program (KASP)",
      nameAr: "برنامج خادم الحرمين الشريفين للابتعاث الخارجي",
      descEn:
        "Saudi Arabia's flagship government scholarship programme, run by the Ministry of Education, covering degrees at top universities worldwide including the UK.",
      descAr:
        "البرنامج الحكومي الرائد في المملكة العربية السعودية، تديره وزارة التعليم، ويغطي الدراسة في أفضل الجامعات حول العالم بما فيها المملكة المتحدة.",
      coverage: "Full tuition + monthly allowance + flights + health insurance",
      coverageAr: "رسوم دراسية كاملة + بدل شهري + تذاكر طيران + تأمين صحي",
      eligibility: "Saudi nationals, strong academic record, Ministry of Education approval",
      eligibilityAr: "المواطنون السعوديون، سجل أكاديمي متميز، موافقة وزارة التعليم",
    },
    {
      nameEn: "Saudi Aramco Scholarship",
      nameAr: "منحة أرامكو السعودية",
      descEn:
        "Sponsored by Saudi Aramco for engineering, petroleum, and STEM disciplines at selected UK universities.",
      descAr:
        "تمنحها أرامكو السعودية لتخصصات الهندسة والبترول والعلوم في جامعات بريطانية مختارة.",
      coverage: "Full tuition + stipend + internship placement",
      coverageAr: "رسوم كاملة + راتب شهري + فرصة تدريب",
      eligibility: "STEM students, strong GPA, nomination through Aramco",
      eligibilityAr: "طلاب تخصصات العلوم والتقنية، معدل تراكمي عالٍ، ترشيح عبر أرامكو",
    },
    {
      nameEn: "Chevening Scholarship (UK Government)",
      nameAr: "منحة تشيفنينج (الحكومة البريطانية)",
      descEn:
        "UK government's global scholarship for future leaders. Open to Saudi nationals with 2+ years work experience.",
      descAr:
        "منحة الحكومة البريطانية للقادة المستقبليين. مفتوحة للمواطنين السعوديين ذوي خبرة عمل لا تقل عن سنتين.",
      coverage: "Full tuition + living allowance + flights + visa costs",
      coverageAr: "رسوم كاملة + بدل معيشة + تذاكر طيران + تكاليف التأشيرة",
      eligibility:
        "Saudi nationals, Bachelor's degree, 2+ years work experience, leadership potential",
      eligibilityAr:
        "المواطنون السعوديون، درجة البكالوريوس، خبرة عملية سنتان أو أكثر، إمكانات قيادية",
    },
  ],
  universities: sharedUniversities,
  withIelts: sharedWithIelts,
  withoutIelts: sharedWithoutIelts,
  fees: sharedFees,
  whyUKEn: sharedWhyUKEn,
  whyUKAr: sharedWhyUKAr,
  slug: "saudi-arabia",
};

export default function SaudiArabiaPage() {
  return <GulfPage data={data} />;
}
