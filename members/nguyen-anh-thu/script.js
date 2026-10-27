// Portfolio Nguyen Anh Thu - Base Script
console.log('Portfolio Nguyen Anh Thu initialized.');
const PROFILE_EMAIL = "ngthuanh2604@gmail.com";

const translations = {
  vi: {
    skip: "Bỏ qua điều hướng",
    "nav.about": "Giới thiệu", "nav.skills": "Kỹ năng", "nav.interests": "Sở thích", "nav.education": "Học vấn", "nav.journey": "Hành trình học tập", "nav.contact": "Liên hệ",
    downloadCv: "Tải CV", "hero.eyebrow": "Sinh viên Hệ thống thông tin quản lý",
    "hero.description": "Tôi là Nguyễn Anh Thư. Tôi quan tâm đến cách công nghệ có thể giải quyết vấn đề thực tế và mong muốn phát triển ở vị trí kết nối nhu cầu kinh doanh với giải pháp kỹ thuật.",
    "hero.explore": "Khám phá hồ sơ", "hero.contact": "Liên hệ với tôi", "hero.note": "Đang tìm kiếm cơ hội thực tập BA", "hero.card": "Business<br>meets technology",
    "portrait.caption": "HỒ SƠ CÁ NHÂN", scroll: "Cuộn để khám phá",
    "about.kicker": "Đôi nét về tôi", "about.title": "Tò mò về vấn đề.<br><span>Quan tâm đến con người.</span>",
    "about.lead": "Tôi là Nguyễn Anh Thư, sinh viên chuyên ngành Hệ thống thông tin quản lý và đang định hướng theo lĩnh vực Business Analysis.",
    "about.body": "Tôi mong muốn tìm hiểu cách kết nối nhu cầu kinh doanh với giải pháp công nghệ. Trên hành trình đó, tôi đang phát triển tư duy logic, khả năng giao tiếp và cách tiếp cận vấn đề một cách có hệ thống — luôn sẵn sàng học hỏi, tiếp thu phản hồi và tích lũy trải nghiệm thực tế.",
    "objective.label": "MỤC TIÊU NGHỀ NGHIỆP", "objective.body": "Tìm kiếm cơ hội thực tập Business Analyst để làm quen với quy trình làm việc thực tế, học hỏi từ đội ngũ giàu kinh nghiệm và từng bước phát triển chuyên môn.",
    "detail.specialty": "Chuyên ngành", "detail.specialtyValue": "Hệ thống thông tin quản lý", "detail.birthday": "Ngày sinh", "detail.focus": "Định hướng",
    "skills.kicker": "Nền tảng của tôi", "skills.title": "Những điều tôi đang<br><span>trau dồi mỗi ngày.</span>", "skills.description": "Kỹ năng được trình bày đúng với những gì tôi đang học và sử dụng — nền tảng cho hành trình phát triển.",
    "skills.web": "Web Fundamentals", "skills.webDescription": "Kiến thức nền tảng về xây dựng giao diện web.", "skills.tools": "Tools", "skills.toolsDescription": "Công cụ cộng tác và quản lý công việc ở mức cơ bản.",
    "skills.soft": "Soft Skills", "skills.softDescription": "Những kỹ năng tôi chủ động rèn luyện trong học tập và cộng tác.", "skills.database": "Database", "skills.databaseDescription": "Hệ quản trị cơ sở dữ liệu được bổ sung vào hồ sơ.", basic: "cơ bản",
    "tag.selfLearning": "Tự học", "tag.communication": "Giao tiếp", "tag.teamwork": "Làm việc nhóm", "tag.time": "Quản lý thời gian", "tag.feedback": "Tiếp nhận phản hồi",
    "interests.kicker": "Sở thích cá nhân", "interests.title": "Những điều tôi yêu<br><span>thích mỗi ngày.</span>", "interests.description": "Những điều tôi yêu thích cũng phản ánh cách tôi tư duy, tổ chức thông tin và giải quyết vấn đề.",
    "interest.mysteryTitle": "Trinh thám & tâm lý học", "interest.mysteryDescription": "Xâu chuỗi dữ kiện, tìm manh mối và thấu hiểu động cơ giúp tôi rèn khả năng quan sát, suy luận và phân tích hành vi.",
    "interest.organizingTitle": "Bullet Journal & sắp xếp", "interest.organizingDescription": "Tôi yêu thích tổ chức thông tin và tối ưu thời gian bằng cách sắp xếp khoa học, lập kế hoạch rõ ràng.",
    "interest.diyTitle": "Thủ công & DIY", "interest.diyDescription": "Từng bước biến ý tưởng thành sản phẩm thực tế nuôi dưỡng sự tỉ mỉ, kiên nhẫn và chú ý đến chi tiết.",
    "interest.bakingTitle": "Làm bánh & thử công thức", "interest.bakingDescription": "Đong đếm chính xác, theo sát quy trình rồi điều chỉnh nguyên liệu dựa trên kết quả là niềm vui của tôi.",
    "education.kicker": "Học vấn", "education.title": "Bắt đầu từ nền tảng<br><span>hệ thống thông tin.</span>", "education.label": "CHƯƠNG TRÌNH ĐÀO TẠO",
    "education.degree": "Hệ thống thông tin quản lý", "education.school": "Tên trường — vui lòng cập nhật", "education.note": "Thời gian học và các môn học liên quan sẽ được bổ sung khi có thông tin xác nhận.", "education.status": "ĐANG HỌC",
    "journey.kicker": "Hành trình học tập", "journey.title": "Luôn giữ tinh thần<br><span>học hỏi.</span>", "journey.emptyTitle": "Những cột mốc tiếp theo",
    "journey.emptyBody": "Các khóa học, chứng chỉ và nội dung BA đang học sẽ được cập nhật tại đây khi có thông tin thực tế. Không có chứng chỉ hay thành tích nào được tự thêm vào hồ sơ.",
    "journey.note": "Đang mở rộng kiến thức từng bước",
    "contact.kicker": "Kết nối", "contact.title": "Cùng bắt đầu<br><span>một cuộc trò chuyện.</span>", "contact.description": "Tôi luôn sẵn sàng kết nối và tìm hiểu về những cơ hội thực tập phù hợp. Hãy gửi lời nhắn cho tôi.",
    "contact.emailButton": "Gửi email", "contact.copy": "Sao chép email", "contact.socialLabel": "Thông tin liên hệ", "contact.phoneLabel": "Điện thoại", "contact.facebookLabel": "Facebook", "contact.openProfile": "Xem trang cá nhân", "contact.formTitle": "Gửi lời nhắn",
    "form.name": "Tên của bạn", "form.email": "Email của bạn", "form.message": "Nội dung", "form.messagePlaceholder": "Bạn muốn trao đổi điều gì?",
    "form.hint": "Biểu mẫu sẽ mở ứng dụng email của bạn; nội dung chỉ được gửi khi bạn xác nhận trong ứng dụng.", "form.submit": "Gửi lời nhắn",
    "footer.note": "Được tạo với sự tập trung vào điều quan trọng.", "footer.top": "Về đầu trang",
    "error.name": "Vui lòng nhập tên của bạn.", "error.emailRequired": "Vui lòng nhập email của bạn.", "error.email": "Vui lòng nhập địa chỉ email hợp lệ.", "error.message": "Vui lòng nhập nội dung lời nhắn.",
    "error.noEmail": "Chưa cập nhật email liên hệ. Hãy bổ sung email trong script.js trước khi gửi.", "copy.unavailable": "Trình duyệt không hỗ trợ sao chép tự động. Email: ", "copy.empty": "Vui lòng cập nhật email trong script.js trước.",
    "toast.copied": "Đã sao chép email vào bộ nhớ tạm.", "form.opening": "Đang mở ứng dụng email. Bạn cần xác nhận gửi trong ứng dụng. Nếu chưa có ứng dụng email, hãy cấu hình ứng dụng mặc định hoặc gửi đến ", "theme.light": "Bật giao diện sáng", "theme.dark": "Bật giao diện tối", "menu.open": "Mở menu", "menu.close": "Đóng menu",
  },
  en: {
    skip: "Skip navigation",
    "nav.about": "About", "nav.skills": "Skills", "nav.interests": "Interests", "nav.education": "Education", "nav.journey": "Learning", "nav.contact": "Contact",
    downloadCv: "Download CV", "hero.eyebrow": "Management Information Systems student",
    "hero.description": "I'm Nguyen Anh Thu. I'm interested in how technology can solve real-world problems and hope to grow in a role that connects business needs with technical solutions.",
    "hero.explore": "Explore my profile", "hero.contact": "Get in touch", "hero.note": "Seeking a Business Analyst internship", "hero.card": "Business<br>meets technology",
    "portrait.caption": "PERSONAL PROFILE", scroll: "Scroll to explore",
    "about.kicker": "A little about me", "about.title": "Curious about problems.<br><span>Thoughtful about people.</span>",
    "about.lead": "I'm Nguyen Anh Thu, a Management Information Systems student aspiring to build a career in Business Analysis.",
    "about.body": "I'm interested in connecting business needs with technology solutions. Along the way, I'm developing logical thinking, communication, and a structured approach to problem-solving — while staying open to learning, feedback, and real-world experience.",
    "objective.label": "CAREER OBJECTIVE", "objective.body": "Seeking a Business Analyst internship to learn real-world workflows, grow alongside an experienced team, and build my professional foundations step by step.",
    "detail.specialty": "Major", "detail.specialtyValue": "Management Information Systems", "detail.birthday": "Date of birth", "detail.focus": "Career focus",
    "skills.kicker": "My foundations", "skills.title": "What I'm working<br><span>on, one day at a time.</span>", "skills.description": "Skills are presented as currently learned and used — a foundation for continued growth.",
    "skills.web": "Web Fundamentals", "skills.webDescription": "Foundational knowledge of building web interfaces.", "skills.tools": "Tools", "skills.toolsDescription": "Basic collaboration and work management tools.",
    "skills.soft": "Soft Skills", "skills.softDescription": "Skills I actively develop through learning and collaboration.", "skills.database": "Database", "skills.databaseDescription": "Database management systems added to this profile.", basic: "basic",
    "tag.selfLearning": "Self-learning", "tag.communication": "Communication", "tag.teamwork": "Teamwork", "tag.time": "Time management", "tag.feedback": "Receptive to feedback",
    "interests.kicker": "Personal interests", "interests.title": "The things I enjoy<br><span>every day.</span>", "interests.description": "The things I enjoy also reflect how I think, organize information, and approach problems.",
    "interest.mysteryTitle": "Mystery & behavioral psychology", "interest.mysteryDescription": "Connecting clues and understanding motives help me practice observation, logical reasoning, and behavioral analysis.",
    "interest.organizingTitle": "Bullet journaling & organizing", "interest.organizingDescription": "I enjoy organizing information and time through thoughtful systems and clear planning.",
    "interest.diyTitle": "Crafts & DIY", "interest.diyDescription": "Turning an idea into something tangible nurtures patience, precision, and attention to detail.",
    "interest.bakingTitle": "Baking & recipe experiments", "interest.bakingDescription": "I enjoy precise measurements, following a process, and adjusting ingredients based on the results.",
    "education.kicker": "Education", "education.title": "Building from a foundation<br>in <span>information systems.</span>", "education.label": "ACADEMIC PROGRAM",
    "education.degree": "Management Information Systems", "education.school": "University name — please update", "education.note": "Study dates and relevant coursework can be added once confirmed.", "education.status": "CURRENTLY STUDYING",
    "journey.kicker": "Learning journey", "journey.title": "Always making room<br><span>to learn.</span>", "journey.emptyTitle": "The next milestones",
    "journey.emptyBody": "Courses, certificates, and BA topics will be added here when confirmed. No credentials or achievements have been invented for this profile.",
    "journey.note": "Growing my knowledge step by step",
    "contact.kicker": "Connect", "contact.title": "Let's start<br><span>a conversation.</span>", "contact.description": "I'm always open to connecting and learning about relevant internship opportunities. Feel free to reach out.",
    "contact.emailButton": "Send an email", "contact.copy": "Copy email", "contact.socialLabel": "Contact details", "contact.phoneLabel": "Phone", "contact.facebookLabel": "Facebook", "contact.openProfile": "View profile", "contact.formTitle": "Send a message",
    "form.name": "Your name", "form.email": "Your email", "form.message": "Message", "form.messagePlaceholder": "What would you like to discuss?",
    "form.hint": "This form opens your email app; your message is sent only after you confirm in that app.", "form.submit": "Send message",
    "footer.note": "Made with a focus on what matters.", "footer.top": "Back to top",
    "error.name": "Please enter your name.", "error.emailRequired": "Please enter your email address.", "error.email": "Please enter a valid email address.", "error.message": "Please enter a message.",
    "error.noEmail": "A contact email hasn't been configured. Add it in script.js before sending.", "copy.unavailable": "Automatic copying isn't supported. Email: ", "copy.empty": "Please add your email in script.js first.",
    "toast.copied": "Email copied to clipboard.", "form.opening": "Opening your email app. Please confirm sending there. If no email app opens, configure a default app or send to ", "theme.light": "Switch to light theme", "theme.dark": "Switch to dark theme", "menu.open": "Open menu", "menu.close": "Close menu",
  },
};

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const languageToggle = document.querySelector(".language-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];
const toast = document.querySelector(".toast");
let language = "vi";
let toastTimeout;

function t(key) {
  return translations[language][key] || key;
}

function updateThemeButton() {
  const isDark = root.dataset.theme === "dark";
  const label = isDark ? t("theme.light") : t("theme.dark");
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
  themeToggle.innerHTML = isDark
    ? '<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.1 15.6A8.5 8.5 0 0 1 8.4 3.9 8.5 8.5 0 1 0 20.1 15.6Z"/></svg>'
    : '<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>';
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  root.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll(".field-error[data-error-key]").forEach((element) => {
    if (element.previousElementSibling.getAttribute("aria-invalid") === "true") {
      element.textContent = t(element.dataset.errorKey);
    }
  });
  languageToggle.textContent = language === "vi" ? "EN" : "VI";
  languageToggle.setAttribute("aria-label", language === "vi" ? "Switch language" : "Chuyển sang tiếng Việt");
  menuToggle.setAttribute("aria-label", t(nav.classList.contains("is-open") ? "menu.close" : "menu.open"));
  document.querySelector(".back-to-top").setAttribute("aria-label", t("footer.top"));
  updateThemeButton();
  document.title = language === "vi"
    ? "Nguyễn Anh Thư — Aspiring Business Analyst"
    : "Nguyen Anh Thu — Aspiring Business Analyst";
  document.querySelector('meta[name="description"]').content = language === "vi"
    ? "Hồ sơ cá nhân của Nguyễn Anh Thư — sinh viên Hệ thống thông tin quản lý, định hướng Business Analyst."
    : "The profile of Nguyen Anh Thu — a Management Information Systems student aspiring to become a Business Analyst.";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function closeMenu() {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", t("menu.open"));
}

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("profile-theme", root.dataset.theme);
  } catch (error) {
    console.warn("Theme preference could not be saved.", error);
  }
  updateThemeButton();
});

languageToggle.addEventListener("click", () => setLanguage(language === "vi" ? "en" : "vi"));
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", t(isOpen ? "menu.close" : "menu.open"));
});
navLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    closeMenu();
    menuToggle.focus();
  }
});

const header = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
function updateScrollUI() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
}
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.querySelector("#current-year").textContent = String(new Date().getFullYear());

let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("profile-theme") || "light";
} catch (error) {
  console.warn("Theme preference could not be read.", error);
}
root.dataset.theme = savedTheme === "dark" ? "dark" : "light";
updateThemeButton();

const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.dataset.section === entry.target.id;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

const emailLink = document.querySelector(".email-link");
emailLink.addEventListener("click", (event) => {
  if (!PROFILE_EMAIL) {
    event.preventDefault();
    showToast(t("error.noEmail"));
  } else {
    emailLink.href = `mailto:${PROFILE_EMAIL}`;
  }
});

document.querySelector(".copy-email").addEventListener("click", async () => {
  if (!PROFILE_EMAIL) {
    showToast(t("copy.empty"));
    return;
  }
  try {
    await navigator.clipboard.writeText(PROFILE_EMAIL);
    showToast(t("toast.copied"));
  } catch (error) {
    console.warn("Clipboard access failed.", error);
    showToast(t("copy.unavailable") + PROFILE_EMAIL);
  }
});

const contactForm = document.querySelector("#contact-form");
const contactFields = [...contactForm.querySelectorAll("input, textarea")];
const emailPattern = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$/i;

function fieldErrorKey(field) {
  const value = field.value.trim();
  if (!value) {
    if (field.name === "email") return "error.emailRequired";
    return field.name === "name" ? "error.name" : "error.message";
  }
  if (field.name === "email") {
    const localPart = value.slice(0, value.lastIndexOf("@"));
    if (!emailPattern.test(value) || localPart.startsWith(".") || localPart.endsWith(".") || localPart.includes("..")) {
      return "error.email";
    }
  }
  return "";
}

function updateFieldError(field) {
  const error = document.getElementById(field.getAttribute("aria-describedby"));
  const key = fieldErrorKey(field);
  field.setAttribute("aria-invalid", String(Boolean(key)));
  error.dataset.errorKey = key;
  error.textContent = key ? t(key) : "";
  return key;
}

contactFields.forEach((field) => {
  field.addEventListener("input", () => {
    if (field.getAttribute("aria-invalid") === "true") updateFieldError(field);
  });
  field.addEventListener("blur", () => {
    if (field.getAttribute("aria-invalid") === "true") updateFieldError(field);
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = contactForm.querySelector(".form-status");
  status.textContent = "";
  const invalidFields = contactFields.filter((field) => updateFieldError(field));

  if (invalidFields.length) {
    invalidFields[0].focus();
    return;
  }

  if (!PROFILE_EMAIL) {
    status.textContent = t("error.noEmail");
    return;
  }

  const name = contactForm.elements.name.value.trim();
  const senderEmail = contactForm.elements.email.value.trim();
  const message = contactForm.elements.message.value.trim();
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nReply email: ${senderEmail}\n\nMessage:\n${message}`);
  status.textContent = t("form.opening") + PROFILE_EMAIL;
  window.location.href = `mailto:${PROFILE_EMAIL}?subject=${subject}&body=${body}`;
});
