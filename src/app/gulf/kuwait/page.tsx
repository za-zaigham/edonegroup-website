import type { Metadata } from "next";
import { GulfPage, type GulfPageData } from "@/components/GulfPage";

export const metadata: Metadata = {
  title: "Study in the UK for Kuwaiti Students | EdOne Group — جامعات بريطانية للطلاب الكويتيين",
  description:
    "EdOne Group helps Kuwaiti students access top UK universities and maximise their Kuwait Cultural Office (KCO) scholarship options. Expert guidance on admissions, visas and funding from Kuwait.",
  alternates: {
    canonical: "https://edonegroup.co.uk/gulf/kuwait",
  },
  openGraph: {
    title: "Study in the UK for Kuwaiti Students | EdOne Group",
    description:
      "UK university guidance for Kuwaiti students — KCO scholarships, Kuwait Petroleum Corporation funding, Chevening and Student Route visa support.",
    url: "https://edonegroup.co.uk/gulf/kuwait",
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
    title: "Kuwait-Friendly Environment",
    desc: "Long-established Kuwaiti student communities in UK cities. Halal food, prayer facilities, and cultural familiarity in every major UK university city.",
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
    title: "بيئة ملائمة للطلاب الكويتيين",
    desc: "مجتمعات كويتية راسخة في المدن البريطانية. طعام حلال ومرافق صلاة وألفة ثقافية في كل مدينة جامعية بريطانية كبرى.",
  },
];

const data: GulfPageData = {
  countryEn: "Kuwait",
  countryAr: "الكويت",
  flag: "🇰🇼",
  taglineEn: "Study in the UK — For Kuwaiti Students",
  taglineAr: "الدراسة في المملكة المتحدة — للطلاب الكويتيين",
  heroDescEn:
    "Kuwait's government is one of the most generous in the Gulf for education scholarships. EdOne Group helps Kuwaiti students navigate UK admissions and maximise their scholarship options for study at top British universities.",
  heroDescAr:
    "تُعدّ الحكومة الكويتية من أكثر دول الخليج كرماً في تقديم المنح التعليمية. تساعد مجموعة إيدون الطلاب الكويتيين على التنقل في عملية القبول البريطانية وتعظيم خياراتهم من المنح للدراسة في أفضل الجامعات البريطانية.",
  stats: [
    { labelEn: "Average tuition/year", labelAr: "متوسط الرسوم الدراسية", value: "£14,000–£35,000" },
    { labelEn: "Masters duration", labelAr: "مدة الماجستير", value: "1 Year" },
    { labelEn: "Post-study stay", labelAr: "البقاء بعد التخرج", value: "2 Years" },
    { labelEn: "KCO Scholarship", labelAr: "منحة الملحقية الثقافية", value: "Available" },
  ],
  scholarships: [
    {
      nameEn: "Kuwait Cultural Office (KCO) Scholarship",
      nameAr: "منحة الملحقية الثقافية الكويتية",
      descEn:
        "One of the Gulf's most comprehensive scholarship programmes. The Kuwait Cultural Office in London sponsors Kuwaiti nationals for full degrees at UK universities.",
      descAr:
        "أحد أشمل برامج المنح في الخليج. ترعى الملحقية الثقافية الكويتية في لندن المواطنين الكويتيين للدراسة الكاملة في الجامعات البريطانية.",
      coverage:
        "Full tuition + £700–900/month living allowance + flights + health insurance + book allowance",
      coverageAr:
        "رسوم كاملة + 700–900 جنيه إسترليني شهرياً + تذاكر طيران + تأمين صحي + بدل كتب",
      eligibility:
        "Kuwaiti nationals, secondary school certificate, ministry nomination",
      eligibilityAr:
        "المواطنون الكويتيون، شهادة الثانوية العامة، ترشيح وزاري",
    },
    {
      nameEn: "Kuwait Petroleum Corporation Scholarship",
      nameAr: "منحة شركة نفط الكويت",
      descEn:
        "Engineering and petroleum scholarships for Kuwaiti students at top UK engineering universities.",
      descAr:
        "منح هندسية وبترولية للطلاب الكويتيين في أفضل جامعات الهندسة البريطانية.",
      coverage: "Full tuition + monthly stipend + summer internships",
      coverageAr: "رسوم كاملة + راتب شهري + تدريب صيفي",
      eligibility: "Engineering/STEM students, strong academic record",
      eligibilityAr: "طلاب الهندسة والعلوم، سجل أكاديمي متميز",
    },
    {
      nameEn: "Chevening Scholarship (UK Government)",
      nameAr: "منحة تشيفنينج (الحكومة البريطانية)",
      descEn:
        "UK government's global scholarship for future leaders. Open to Kuwaiti nationals with 2+ years work experience.",
      descAr:
        "منحة الحكومة البريطانية للقادة المستقبليين. مفتوحة للمواطنين الكويتيين ذوي خبرة عمل لا تقل عن سنتين.",
      coverage: "Full tuition + living allowance + flights + visa costs",
      coverageAr: "رسوم كاملة + بدل معيشة + تذاكر طيران + تكاليف التأشيرة",
      eligibility:
        "Kuwaiti nationals, Bachelor's degree, 2+ years work experience, leadership potential",
      eligibilityAr:
        "المواطنون الكويتيون، درجة البكالوريوس، خبرة عملية سنتان أو أكثر، إمكانات قيادية",
    },
  ],
  universities: sharedUniversities,
  withIelts: sharedWithIelts,
  withoutIelts: sharedWithoutIelts,
  fees: sharedFees,
  whyUKEn: sharedWhyUKEn,
  whyUKAr: sharedWhyUKAr,
  slug: "kuwait",
};

export default function KuwaitPage() {
  return <GulfPage data={data} />;
}
