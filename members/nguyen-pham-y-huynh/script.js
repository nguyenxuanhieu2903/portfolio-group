(() => {
  /* 0. THEME + LANGUAGE TOGGLE (VI/EN) */
  const root = document.documentElement;
  const tr = (vi, en) => root.lang === 'en' ? en : vi;
  const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const load = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };

  const EN = {
    // Menu
    'Trang chủ':'Home',
    'Kỹ năng':'Skills',
    'Dự án':'Projects',
    'Kinh nghiệm':'Experience',
    'Liên hệ':'Contact',
    'Điều hướng chính':'Main navigation',
    'Mở menu':'Open menu',

    // Hero Section
    'Xin chào, tôi là':'Hi, I am',
    'Sinh viên Công nghệ Thông tin định hướng phát triển Web Front-End. Chuyên xây dựng giao diện tối ưu trải nghiệm người dùng (UX), đảm bảo tính tương thích đa thiết bị và chuyển đổi thiết kế thành các sản phẩm web hiện đại.':'An IT student aiming for Web Front-End Development. Specializing in building user-optimized interfaces (UX), ensuring cross-device compatibility, and transforming designs into modern web products.',

    // Contact Info
    'Quê quán: Châu Phú, An Giang':'Hometown: Chau Phu, An Giang',
    'TP. Hồ Chí Minh, Việt Nam':'Ho Chi Minh City, Vietnam',

    // Section Titles & Subtitles
    'Kỹ năng & công cụ':'Skills & tools',
    'Lọc theo nhóm để xem đúng thứ bạn quan tâm.':'Filter by group to see what matters to you.',
    'Tất cả':'All',
    'Core Tech':'Core Tech',
    'Công cụ & môi trường':'Tools & environment',
    'Kỹ năng mềm & kiểm thử':'Soft skills & testing',
    'Kỹ năng mềm':'Soft skills',
    'Làm việc nhóm, thuyết trình, quản lý thời gian':'Teamwork, presenting, time management',
    'Giao tiếp':'Communication',
    'Tự học':'Self-learning',
    'Quy trình kiểm thử':'Testing process',
    'Test case, kiểm thử thủ công, DevTools, kiểm tra responsive':'Test cases, manual testing, DevTools, responsive checks',

    // Projects
    'Dự án & sản phẩm':'Projects & products',
    'Các dự án cá nhân và học thuật được phát triển trong quá trình học tập cùng nhóm trong môi trường đại học.':'Personal and academic projects built during my studies, including teamwork at university.',
    'Vai trò: Thiết kế Frontend & lập trình':'Role: Frontend design & development',
    'Công cụ tải nhiều tệp, hỗ trợ xử lý các tác vụ tải xuống.':'A tool for downloading multiple files and handling download tasks.',
    'Dự án cá nhân':'Personal project',
    'Trang web cá nhân giới thiệu thông tin bản thân, kinh nghiệm và dự án.':'A personal website introducing myself, my experience and projects.',
    'Dự án học tập':'Academic project',
    'Dự án liên quan đến phát triển API bằng Flask.':'A project about building APIs with Flask.',
    'Đang phát triển':'In development',
    'Website trung tâm thú y, đang trong quá trình xây dựng và hoàn thiện.':'A veterinary center website, currently under development.',

    // Experience & Timeline
    'Kinh nghiệm & thành tựu':'Experience & achievements',
    'Hoạt động nhóm, nghiên cứu và đồ án đã hoàn thành.':'Teamwork, research and completed projects.',
    'Sẵn sàng học hỏi':'Ready to learn',
    'Tìm hiểu công nghệ mới.':'Exploring new tech.',
    'Design UI/UX':'UI/UX Design',
    'Thích biến ý tưởng thành sản phẩm.':'Love bringing ideas to life.',
    'CLB Lập trình – thành viên ban Truyền thông':'Programming Club – Media Team Member',
    'Thiết kế ấn phẩm, tổ chức workshop HTML/CSS cho 80 bạn sinh viên năm nhất.':'Designed media publications, organized HTML/CSS workshop for 80 freshman students.',
    'Giải Ba hội thi tin học trẻ':'3rd Prize Young Informatics Contest',
    'Nội dung lập trình C++.':'C++ programming category.',
    'Sinh viên năm 3':'3rd Year Student',
    'Tìm cơ hội Thực tập.':'Seeking Internship.',
    'Thiết kế & Quản trị CSDL Hệ thống Quản lý Thư viện':'Library Management System Database Design & Administration',
    'Xây dựng sơ đồ ERD chuẩn hóa gồm 12+ bảng dữ liệu quan hệ, viết các truy vấn SQL phức tạp phục vụ thống kê mượn trả sách.':'Built a normalized ERD with 12+ relational tables and wrote complex SQL queries for book borrowing and return statistics.',
    'Lập trình Hướng đối tượng (OOP)':'Object-Oriented Programming (OOP)',
    'Áp dụng thành thạo 4 tính chất OOP (Đóng gói, Kế thừa, Đa hình, Trừu tượng), quản lý bộ nhớ và thao tác đọc/ghi file dữ liệu.':'Proficiently applied the 4 OOP principles (Encapsulation, Inheritance, Polymorphism, Abstraction), memory management, and file read/write operations.',
    'CLB Lập trình – Ban Truyền thông':'Programming Club – Media Team',
    'Thiết kế ấn phẩm và tổ chức workshop HTML/CSS.':'Designed media publications and organized an HTML/CSS workshop.',

    // Form & Footer
    'Có cơ hội thực tập hoặc muốn hợp tác? Gửi tin nhắn, tôi sẽ phản hồi trong 24 giờ.':'Have an internship opportunity or want to collaborate? Send a message and I will reply within 24 hours.',
    'Họ và tên':'Full name',
    'Nguyễn Văn A':'John Doe',
    'ban@email.com':'you@email.com',
    'Tin nhắn':'Message',
    'Bạn muốn trao đổi điều gì?':'What would you like to discuss?',
    'Gửi tin nhắn':'Send message',
    '© 2026 Nguyễn Phạm Y Huỳnh. Thiết kế và code bằng HTML, CSS, JavaScript thuần.':'© 2026 Nguyen Pham Y Huynh. Designed and coded with plain HTML, CSS and JavaScript.',

    // Additional translations for the marquee info bar
    'Sở thích':'Interests',
    'Tìm hiểu công nghệ mới':'Exploring new technologies',
    'Thích biến ý tưởng thành sản phẩm':'Love turning ideas into products',
    'CLB Lập trình':'Programming Club',
    'Ban Truyền thông & Workshop HTML/CSS':'Media Team & HTML/CSS Workshop',
    'Giải Ba Tin học trẻ':'Third Prize in the Young Informatics Contest',
    'Nội dung C++':'C++ Programming',
    'Hiện tại':'Currently',
    'Tìm cơ hội Thực tập':'Seeking an internship',

    // Hobbies (Sở thích)
    'NGOÀI GIỜ CODE, MÌNH THÍCH…':'OUTSIDE OF CODING, I ENJOY…',
    'Những điều làm mình':'The things that make me',
    'mỉm cười mỗi ngày.':'smile every day.',
    'Bên cạnh công nghệ, mình có những thú vui nhỏ giúp tâm hồn luôn đầy năng lượng và là nguồn cảm hứng cho mọi ý tưởng sáng tạo.':'Besides technology, I have small joys that keep my spirit energized and inspire all my creative ideas.',
    'Du lịch khắp thế giới':'Traveling around the world',
    'Mỗi chuyến đi là một trang mới, mình muốn đặt chân đến thật nhiều nơi':'Every trip is a new page, I want to set foot in as many places as possible',
    'Đi biển':'Going to the beach',
    'Nghe sóng vỗ, ngắm hoàng hôn – nơi mình thấy bình yên nhất':'Listening to the waves and watching the sunset – where I feel most at peace',
    'Yêu thú cưng':'Loving pets',
    'Những người bạn bốn chân luôn làm ngày của mình ấm áp hơn':'My four-legged friends always make my day warmer',
    'Đọc sách':'Reading books',
    'Một cuốn sách hay và một góc yên tĩnh là đủ cho cả buổi chiều':'A good book and a quiet corner are enough for a whole afternoon',
    'Nghe nhạc & chụp ảnh':'Music & photography',
    'Lưu lại những khoảnh khắc và giai điệu theo mình mọi nơi':'Capturing moments and melodies wherever I go',
    'KẾT NỐI VỚI MÌNH':'CONNECT WITH ME',
    'Lưu giữ khoảnh khắc':'Keeping the moments'
  };

  function applyLanguage(l) {
    // Dynamically scan all text each time the language switch is triggered
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

    while (walker.nextNode()) {
      const n = walker.currentNode;

      if (!n.parentElement || n.parentElement.closest('script,style,#c,.wave')) continue;

      const val = n.nodeValue.trim().replace(/\s+/g, ' ');

      if (l === 'en') {
        if (EN[val]) {
          n._vi = n.nodeValue;
          n.nodeValue = n.nodeValue.replace(val, EN[val]);
        }
      } else {
        if (n._vi) n.nodeValue = n._vi;
      }
    }

    document.querySelectorAll('[placeholder],[aria-label]').forEach(el => {
      ['placeholder', 'aria-label'].forEach(a => {
        const v = el.getAttribute(a);

        if (v) {
          if (l === 'en' && EN[v]) {
            el.setAttribute('_vi_' + a, v);
            el.setAttribute(a, EN[v]);
          } else if (l === 'vi' && el.getAttribute('_vi_' + a)) {
            el.setAttribute(a, el.getAttribute('_vi_' + a));
          }
        }
      });
    });
  }

  const themeBtn = document.getElementById('theme-btn');
  const langBtn = document.getElementById('lang-btn');
  const langBox = document.getElementById('lang');
  const langList = langBox.querySelector('.lang-list');
  const langName = document.getElementById('lang-name');

  function setTheme(t) {
    root.dataset.theme = t;
    themeBtn.textContent = t === 'light' ? '🌙' : '☀️';

    themeBtn.setAttribute(
      'aria-label',
      t === 'light'
        ? tr('Chuyển sang giao diện tối', 'Switch to dark mode')
        : tr('Chuyển sang giao diện sáng', 'Switch to light mode')
    );

    save('pf-theme', t);
  }

  /* Country flags (SVG) */
  const FLAGS = {
    vi: '<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#da251d"/><polygon fill="#ffff00" points="15,4 16.35,8.14 20.71,8.15 17.19,10.71 18.53,14.85 15,12.3 11.47,14.85 12.81,10.71 9.29,8.15 13.65,8.14"/></svg>',
    en: '<svg viewBox="0 0 60 40" aria-hidden="true"><rect width="60" height="40" fill="#012169"/><path d="M0 0l60 40M60 0L0 40" stroke="#fff" stroke-width="8"/><path d="M0 0l60 40M60 0L0 40" stroke="#c8102e" stroke-width="3"/><path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="13"/><path d="M30 0v40M0 20h60" stroke="#c8102e" stroke-width="8"/></svg>'
  };

  // Flags inside the dropdown list (render once)
  document.querySelectorAll('[data-flag]').forEach(el => {
    el.innerHTML = FLAGS[el.dataset.flag];
  });

  function setLang(l) {
    root.lang = l;
    applyLanguage(l);

    langName.textContent = l === 'en' ? 'English' : 'Tiếng Việt';
    document.getElementById('lang-flag').innerHTML = FLAGS[l];

    langBtn.setAttribute('aria-label', tr('Chọn ngôn ngữ', 'Select language'));

    langList.querySelectorAll('[data-lang]').forEach(li => {
      li.setAttribute('aria-selected', li.dataset.lang === l);
    });

    save('pf-lang', l);

    // Notify dependent components to refresh their language-dependent content
    document.dispatchEvent(new Event('langchange'));
  }

  themeBtn.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
  });

  const toggleList = open => {
    langList.hidden = !open;
    langBtn.setAttribute('aria-expanded', open);
  };

  langBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleList(langList.hidden);
  });

  langList.querySelectorAll('[data-lang]').forEach(li => {
    const pick = () => {
      setLang(li.dataset.lang);
      toggleList(false);
      langBtn.focus();
    };

    li.addEventListener('click', pick);

    li.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        pick();
      }
    });
  });

  document.addEventListener('click', e => {
    if (!langBox.contains(e.target)) toggleList(false);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleList(false);
  });

  setTheme(load('pf-theme') === 'light' ? 'light' : 'dark');
  setLang(load('pf-lang') === 'en' ? 'en' : 'vi');


  /* 1. 3D tilt on mouse movement + reflective highlight */
  const heroCards = document.querySelectorAll('.hero-card, .hero-container .avatar');
  const filter = document.getElementById('liquid');
  const feImg = document.getElementById('dispMap');

  function buildLiquidMap() {
    const target = heroCards[0];
    if (!target) return;

    const w = Math.round(target.offsetWidth);
    const h = Math.round(target.offsetHeight);

    if (!w || !h) return;

    const R = 26, bezel = 40;

    const cv = document.createElement('canvas');
    cv.width = w;
    cv.height = h;

    const ctx = cv.getContext('2d');
    const img = ctx.createImageData(w, h);
    const d = img.data;

    const hx = w / 2, hy = h / 2;
    const bx = hx - R, by = hy - R;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const px = x + .5 - hx;
        const py = y + .5 - hy;

        const qx = Math.abs(px) - bx;
        const qy = Math.abs(py) - by;

        const ox = Math.max(qx, 0);
        const oy = Math.max(qy, 0);
        const len = Math.hypot(ox, oy);

        const sd = len + Math.min(Math.max(qx, qy), 0) - R;
        const dist = -sd;

        let r = 128, gch = 128;

        if (dist < bezel) {
          let nx, ny;

          if (qx > 0 && qy > 0) {
            nx = Math.sign(px) * ox / len;
            ny = Math.sign(py) * oy / len;
          } else if (qx > qy) {
            nx = Math.sign(px);
            ny = 0;
          } else {
            nx = 0;
            ny = Math.sign(py);
          }

          const t = Math.max(dist, 0) / bezel;
          const m = Math.pow(1 - t, 2.2);

          r = 128 - nx * m * 127;
          gch = 128 - ny * m * 127;
        }

        const i = (y * w + x) * 4;

        d[i] = r;
        d[i + 1] = gch;
        d[i + 2] = 128;
        d[i + 3] = 255;
      }
    }

    ctx.putImageData(img, 0, 0);

    if (filter && feImg) {
      filter.setAttribute('width', w);
      filter.setAttribute('height', h);

      feImg.setAttribute('width', w);
      feImg.setAttribute('height', h);

      const url = cv.toDataURL();
      feImg.setAttribute('href', url);
    }
  }

  buildLiquidMap();

  if (heroCards[0]) {
    new ResizeObserver(buildLiquidMap).observe(heroCards[0]);
  }

  // Independent 3D tilt on mouse movement for both hero cards
  document.addEventListener('mousemove', e => {
    heroCards.forEach(card => {
      const r = card.getBoundingClientRect();

      card.style.transform = 'none';

      card.style.setProperty(
        '--lx',
        (((e.clientX - r.left) / r.width) * 100) + '%'
      );

      card.style.setProperty(
        '--ly',
        (((e.clientY - r.top) / r.height) * 100) + '%'
      );
    });
  });

  /* 2. Menu mobile */
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });

  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') menu.classList.remove('open');
  });


  /* 3. Highlight the active menu item */
  const links = [...document.querySelectorAll('.menu a')];

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(a => {
          a.classList.toggle(
            'active',
            a.getAttribute('href') === '#' + en.target.id
          );
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  document.querySelectorAll('main section').forEach(s => io.observe(s));


  /* 4. Skills & Projects filters */
  document.querySelectorAll('[data-filter]').forEach(bar => {
    const grid = document.getElementById(bar.dataset.filter + '-grid');

    bar.addEventListener('click', e => {
      const btn = e.target.closest('.tab');
      if (!btn) return;

      bar.querySelectorAll('.tab').forEach(b => {
        b.classList.toggle('on', b === btn);
      });

      grid.querySelectorAll('[data-cat]').forEach(c => {
        c.classList.toggle(
          'hide',
          btn.dataset.f !== 'all' && c.dataset.cat !== btn.dataset.f
        );
      });
    });
  });


  /* 5. Animated skill bars when they enter view */
  const bio = new IntersectionObserver(es => {
    es.forEach(en => {
      if (en.isIntersecting) {
        en.target.style.width = en.target.dataset.w + '%';
        bio.unobserve(en.target);
      }
    });
  }, { threshold: .4 });

  document.querySelectorAll('.bar i').forEach(b => bio.observe(b));

})();


/* ===== 6. 3D WHALE EFFECT SCRIPT (RUNS ONLY ON THE HOME SECTION) ===== */
const cv = document.getElementById('c');
const ctx = cv.getContext('2d');

let W, H, dpr, S, stars = [];

const P = [], NODES = [], EDGES = [];

const mouse = {
  x: -9999,
  y: -9999,
  down: false,
  burst: 0,
  r: 100
};

let userYaw = 0;
let userPitch = 0.12;
let lastX = 0;
let lastY = 0;
let velYaw = 0;

function norm(v) {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

function add(x, y, z, n, ad, b, s, opt) {
  const p = Object.assign({
    x, y, z,
    nx: n[0], ny: n[1], nz: n[2],
    ar: ad[0], ag: ad[1], ab: ad[2],
    b, s,
    ox: 0, oy: 0,
    vx: 0, vy: 0,
    back: true,
    dim: 1,
    node: false,
    sx: 0, sy: 0
  }, opt || {});

  p.u = Math.min(1, Math.max(0, (x + 2) / 3.6));

  P.push(p);

  if (p.node) NODES.push(p);
}

function C(t) {
  return [-2 + 3.6 * t, .3 - .85 * Math.pow(t, 2.2)];
}

function Rad(t) {
  if (t < .3) {
    const k = (.3 - t) / .3;
    return .55 * Math.sqrt(Math.max(0, 1 - k * k));
  }

  return .55 * Math.pow(1 - (t - .3) / .7, 1.3) + .04 * (1 - t);
}

function surf(t, phi, k) {
  const c = C(t);
  const r = Rad(t) * (k || 1);

  return [
    c[0],
    c[1] + r * .88 * Math.cos(phi),
    r * Math.sin(phi)
  ];
}

function tri(a, b, c, count, n, ad, nodeProb) {
  for (let i = 0; i < count; i++) {
    let u = Math.random();
    let v = Math.random();

    if (u + v > 1) {
      u = 1 - u;
      v = 1 - v;
    }

    const isN = Math.random() < nodeProb;

    add(
      a[0] + u * (b[0] - a[0]) + v * (c[0] - a[0]),
      a[1] + u * (b[1] - a[1]) + v * (c[1] - a[1]),
      a[2] + u * (b[2] - a[2]) + v * (c[2] - a[2]) + (Math.random() - .5) * .03,
      n,
      ad,
      isN ? 1.5 : .6 + Math.random() * .6,
      isN ? 2.8 + Math.random() * 1.2 : 1 + Math.random() * .9,
      { back: false, two: true, node: isN }
    );
  }
}

function buildModel() {
  P.length = 0;
  NODES.length = 0;
  EDGES.length = 0;

  let n = 0;

  while (n < 4600) {
    const t = Math.random();
    const phi = Math.random() * Math.PI * 2;

    if (Math.random() > (Rad(t) + .05) / .6) continue;

    const p = surf(t, phi);
    const belly = Math.cos(phi) > .35;
    const isN = Math.random() < .075;

    add(
      p[0], p[1], p[2],
      norm([0, Math.cos(phi), Math.sin(phi)]),
      belly ? [30, 75, 90] : [0, 0, 0],
      isN ? 1.5 : .55 + Math.random() * .6,
      isN ? 2.8 + Math.random() * 1.2 : 1 + Math.random() * .9,
      { node: isN }
    );

    n++;
  }

  for (let i = 0; i < 600; i++) {
    const t = Math.random();
    const phi = Math.random() * 6.283;
    const k = Math.cbrt(Math.random()) * .85;
    const p = surf(t, phi, k);

    add(
      p[0], p[1], p[2],
      norm([0, Math.cos(phi), Math.sin(phi)]),
      [0, 0, 0],
      .5 + Math.random() * .4,
      1 + Math.random() * .6,
      { dim: .35 }
    );
  }

  for (const phi of [-.9, -.6, -.3, 0, .3, .6, .9]) {
    for (let i = 0; i < 100; i++) {
      const t = .08 + Math.random() * .47;
      const p = surf(t, phi, 1.02);

      add(
        p[0], p[1], p[2],
        norm([0, Math.cos(phi), Math.sin(phi)]),
        [40, 95, 115],
        1.1,
        1 + Math.random() * .8,
        { back: false }
      );
    }
  }

  for (const s of [1, -1]) {
    const phi = s * 1.2;

    for (let i = 0; i < 220; i++) {
      const t = .02 + Math.random() * .26;
      const p = surf(t, phi, 1.03);

      add(
        p[0], p[1], p[2],
        norm([0, Math.cos(phi), Math.sin(phi)]),
        [70, 140, 170],
        1.2,
        1 + Math.random() * .8,
        { back: false }
      );
    }

    for (let i = 0; i < 25; i++) {
      const p = surf(.2, s * 1.5, 1.04);

      add(
        p[0] + (Math.random() - .5) * .05,
        p[1] - .12 + (Math.random() - .5) * .05,
        p[2] + (Math.random() - .5) * .03,
        [0, 0, s],
        [150, 190, 220],
        1.4,
        1.6,
        { back: false }
      );
    }
  }

  for (const s of [1, -1]) {
    tri(
      [-1.05, .35, s * .5],
      [-.55, .4, s * .5],
      [-.4, .85, s * 1.1],
      450,
      [0, .5, s * .85],
      [0, 20, 50],
      .04
    );

    tri(
      [1.45, -.55, 0],
      [1.85, -.55, 0],
      [2.05, -.7, s * .9],
      450,
      [0, 1, 0],
      [0, 20, 50],
      .05
    );
  }

  for (let i = 0; i < 350; i++) {
    add(
      -.6 + Math.random() * 2.8,
      -1 + Math.random() * 1.8,
      (Math.random() - .5) * 2.4,
      norm([
        Math.random() - .5,
        Math.random() - .5,
        Math.random() - .5
      ]),
      [25, 65, 110],
      .5 + Math.random() * .7,
      .8 + Math.random() * .9,
      { back: false }
    );
  }

  const seen = new Set();

  NODES.forEach((a, i) => {
    NODES
      .map((b, j) => [
        j,
        Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)
      ])
      .filter(d => d[0] !== i && d[1] < .5)
      .sort((p, q) => p[1] - q[1])
      .slice(0, 3)
      .forEach(d => {
        const k = i < d[0] ? i + '-' + d[0] : d[0] + '-' + i;

        if (!seen.has(k)) {
          seen.add(k);
          EDGES.push([a, NODES[d[0]]]);
        }
      });
  });
}

function resize() {
  dpr = Math.min(devicePixelRatio || 1, 2);

  const heroSec = document.getElementById('home');

  W = heroSec.clientWidth;
  H = heroSec.clientHeight;

  cv.width = W * dpr;
  cv.height = H * dpr;

  S = Math.min(W * .30, H * .40);

  stars = Array.from({ length: 110 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    s: Math.random() * 1.4 + .3,
    p: Math.random() * 6
  }));
}

function mul(a, b) {
  const r = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      r[i][j] =
        a[i][0] * b[0][j] +
        a[i][1] * b[1][j] +
        a[i][2] * b[2][j];
    }
  }

  return r;
}

function rot(yaw, pitch, roll) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw);
  const cx = Math.cos(pitch), sx = Math.sin(pitch);
  const cz = Math.cos(roll), sz = Math.sin(roll);

  return mul(
    mul(
      [[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]],
      [[1, 0, 0], [0, cx, -sx], [0, sx, cx]]
    ),
    [[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]]
  );
}

const LW = norm([-.7, -.4, .6]);
const LC = norm([.8, .1, .5]);

function frame(t) {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#040a16';
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = '#bfe0ff';

  for (const s of stars) {
    ctx.globalAlpha = .2 + .45 * Math.abs(Math.sin(t / 1300 + s.p));
    ctx.fillRect(s.x, s.y, s.s, s.s);
  }

  ctx.globalAlpha = 1;

  if (!mouse.down) {
    userYaw += (0 - userYaw) * 0.05;
    userPitch += (0.12 - userPitch) * 0.05;
  }

  const yaw = userYaw + Math.sin(t / 6000) * 0.08;
  const pitch = userPitch + Math.cos(t / 5000) * 0.03;

  const m = rot(yaw, pitch, -.1);
  const sway = .08 * Math.sin(t / 800);

  const cx = W / 2;
  const cy = H / 2;
  const R = mouse.r + mouse.burst * 55;
  const force = 2 * (1 + mouse.burst * 3.5);

  mouse.burst *= .9;

  ctx.globalCompositeOperation = 'lighter';

  for (const p of P) {
    const py = p.y + sway * p.u * p.u;

    const X = m[0][0] * p.x + m[0][1] * py + m[0][2] * p.z;
    const Y = m[1][0] * p.x + m[1][1] * py + m[1][2] * p.z;
    const Z = m[2][0] * p.x + m[2][1] * py + m[2][2] * p.z;

    const nx = m[0][0] * p.nx + m[0][1] * p.ny + m[0][2] * p.nz;
    const ny = m[1][0] * p.nx + m[1][1] * p.ny + m[1][2] * p.nz;
    const nz = m[2][0] * p.nx + m[2][1] * p.ny + m[2][2] * p.nz;

    const f = 4 / (4 - Z);
    const sx = cx + X * f * S + p.ox;
    const sy = cy + Y * f * S + p.oy;

    p.sx = sx;
    p.sy = sy;

    p.vx -= p.ox * .06;
    p.vy -= p.oy * .06;

    const dx = sx - mouse.x;
    const dy = sy - mouse.y;
    const d2 = dx * dx + dy * dy;

    if (d2 < R * R) {
      const d = Math.sqrt(d2) || 1;
      const k = Math.pow(1 - d / R, 2) * force;

      p.vx += dx / d * k;
      p.vy += dy / d * k;
    }

    p.vx *= .86;
    p.vy *= .86;

    p.ox += p.vx;
    p.oy += p.vy;

    let dw = nx * LW[0] + ny * LW[1] + nz * LW[2];
    let dc = nx * LC[0] + ny * LC[1] + nz * LC[2];

    if (p.two) {
      dw = Math.abs(dw);
      dc = Math.abs(dc);
    } else {
      dw = Math.max(0, dw);
      dc = Math.max(0, dc);
    }

    let br = p.b * p.dim * (.55 + .45 * Math.min(1, Math.max(0, (Z + 2) / 4)));

    if (p.back && nz < 0) br *= .5;

    const r = Math.min(255, ((140 * dw + 40 * dc + 6) * br + p.ar * .8) * .85);
    const g = Math.min(255, ((225 * dw + 110 * dc + 22) * br + p.ag * .8) * .85);
    const b = Math.min(255, ((255 * dw + 255 * dc + 50) * br + p.ab * .8) * .85);

    const sz = p.s * f * .95;

    ctx.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
    ctx.fillRect(sx - sz / 2, sy - sz / 2, sz, sz);

    if (p.node) {
      ctx.globalAlpha = .16;
      ctx.fillRect(sx - sz * 1.6, sy - sz * 1.6, sz * 3.2, sz * 3.2);
      ctx.globalAlpha = 1;
    }
  }

  ctx.strokeStyle = 'rgba(110,190,255,.2)';
  ctx.lineWidth = .8;
  ctx.beginPath();

  for (const e of EDGES) {
    ctx.moveTo(e[0].sx, e[0].sy);
    ctx.lineTo(e[1].sx, e[1].sy);
  }

  ctx.stroke();

  ctx.globalCompositeOperation = 'source-over';

  if (mouse.x > -999) {
    ctx.strokeStyle = 'rgba(207,230,255,.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
    ctx.stroke();
  }

  requestAnimationFrame(frame);
}

cv.addEventListener('pointerdown', e => {
  const rect = cv.getBoundingClientRect();

  mouse.x = lastX = e.clientX - rect.left;
  mouse.y = lastY = e.clientY - rect.top;

  mouse.down = true;
  mouse.burst = 1;
});

addEventListener('pointerup', () => {
  mouse.down = false;
});

cv.addEventListener('pointerleave', () => {
  mouse.x = mouse.y = -9999;
  mouse.down = false;
});

addEventListener('resize', resize);

buildModel();
resize();
requestAnimationFrame(frame);

cv.addEventListener('pointermove', e => {
  const rect = cv.getBoundingClientRect();

  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

/* Click highlight effect for the looping language tags (Marquee) */
const marqueeItems = document.querySelectorAll('.marquee-item');

marqueeItems.forEach(item => {
  item.addEventListener('click', () => {
    // Click a tag to highlight it and automatically clear the others
    marqueeItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});


(() => {
  /* 6. Create the horizontal info marquee */
  const singleList = [
    { period: '❤️', title: 'Một tâm hồn dịu dàng, một tinh thần tự do', place: 'và là một người không ngừng học hỏi' },
  ];

  const sepSVG = '<svg class="sep" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z"/></svg>';

  const marqueeEN = {
    'Sẵn sàng học hỏi': 'Ready to learn',
    'Tìm hiểu công nghệ mới': 'Exploring new technologies',
    'Sở thích': 'Interests',
    'Design UI/UX': 'UI/UX Design',
    'Thích biến ý tưởng thành sản phẩm': 'Love turning ideas into products',
    'CLB Lập trình': 'Programming Club',
    'Ban Truyền thông & Workshop HTML/CSS': 'Media Team & HTML/CSS Workshop',
    'Giải Ba Tin học trẻ': 'Third Prize in the Young Informatics Contest',
    'Nội dung C++': 'C++ Programming',
    'Hiện tại': 'Currently',
    'Sinh viên năm 3': '3rd Year Student',
    'Tìm cơ hội Thực tập': 'Seeking an internship'
  };

  const marqueeTr = text =>
    document.documentElement.lang === 'en'
      ? (marqueeEN[text] || text)
      : text;

  function buildMarquee(el, list, pxPerSec) {
    if (!el) return;

    const track = el.firstElementChild;
    if (!track) return;

    const html = list.map(i =>
      `<div class="item">
      <span class="period">${marqueeTr(i.period)}</span>
      <span class="title">${marqueeTr(i.title)}</span>
      <span class="place">${marqueeTr(i.place)}</span>
      </div>${sepSVG}`
    ).join('');

    // Keep the track structure so CSS can continue the scrolling animation
    track.innerHTML =
      `<div class="set" style="display:flex">${html}</div>` +
      `<div class="set" style="display:flex" aria-hidden="true">${html}</div>`;

    const set = track.firstElementChild;
    let guard = 0;

    while (
      set &&
      set.offsetWidth * (track.children.length / 2) < window.innerWidth * 1.2 &&
      guard++ < 6
    ) {
      track.insertAdjacentHTML(
        'afterbegin',
        `<div class="set" style="display:flex" aria-hidden="true">${html}</div>`
      );

      track.insertAdjacentHTML(
        'beforeend',
        `<div class="set" style="display:flex" aria-hidden="true">${html}</div>`
      );
    }

    const half = track.scrollWidth / 2;
    el.style.setProperty('--dur', (half / pxPerSec) + 's');
  }

  function initMarquee() {
    buildMarquee(
      document.getElementById('marquee-single'),
      singleList,
      60
    );
  }

  // Initialize the scrolling bar after the DOM and fonts are ready
  function startMarquee() {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(initMarquee);
    } else {
      initMarquee();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startMarquee, { once: true });
  } else {
    startMarquee();
  }

  // Refresh content when the language changes
  document.addEventListener('langchange', initMarquee);

  // Fade-out effect when scrolling away from the home section
  const marqueeWrapper = document.getElementById('hero-marquee');
  const homeSection = document.getElementById('home');

  if (marqueeWrapper && homeSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          marqueeWrapper.classList.remove('fade-out', 'paused');
        } else {
          marqueeWrapper.classList.add('fade-out', 'paused');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(homeSection);
  }
})();


/* ===== PROJECTS: 3D CAROUSEL (drag/swipe) ===== */
(() => {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const cards = [...grid.querySelectorAll('.card')];
  const countEl = document.getElementById('car-count');
  const tabs = document.querySelector('[data-filter="projects"]');

  let pos = 0, target = 0, raf = null;           // pos = current position (float), target = destination card
  let dragging = false, moved = false;
  let startX = 0, startPos = 0, lastX = 0, lastT = 0, vel = 0;

  const visible = () => cards.filter(c => !c.classList.contains('hide'));
  const maxIdx  = () => Math.max(0, visible().length - 1);
  const stepPx  = () => (grid.clientWidth < 700 ? 170 : 290);
  const clamp   = v => Math.max(0, Math.min(v, maxIdx()));

  function render() {
    const list = visible();
    const step = stepPx();

    list.forEach((c, i) => {
      const o = i - pos;
      const a = Math.abs(o);
      const angle = -Math.sign(o) * Math.min(a, 1) * 38;
      const z = -Math.min(a, 2) * 140;
      const op = a <= 1 ? 1 - a * .15 : Math.max(0, .85 - (a - 1) * .45);

      c.style.setProperty(
        'transform',
        `translateX(${o * step}px) translateZ(${z}px) rotateY(${angle}deg)`,
        'important'
      );
      c.style.opacity = op;
      c.style.filter = `brightness(${1 - Math.min(a, 1) * .45})`;
      c.style.zIndex = Math.round(100 - a * 10);
      c.style.visibility = a > 2.5 ? 'hidden' : 'visible';
      c.classList.toggle('is-active', a < .5);
    });

    if (countEl) countEl.textContent = (Math.round(clamp(pos)) + 1) + ' / ' + list.length;
  }

  function animate() {
    cancelAnimationFrame(raf);
    const tick = () => {
      pos += (target - pos) * .14;
      if (Math.abs(target - pos) < .002) { pos = target; render(); raf = null; return; }
      render();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }

  const go   = i => { target = clamp(Math.round(i)); animate(); };
  const next = () => go(target + 1);
  const prev = () => go(target - 1);

  document.getElementById('car-next')?.addEventListener('click', next);
  document.getElementById('car-prev')?.addEventListener('click', prev);

  grid.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
  });

  /* ---- Drag/swipe: cards follow the pointer ---- */
  grid.addEventListener('dragstart', e => e.preventDefault());

  grid.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true;
    moved = false;
    startX = lastX = e.clientX;
    startPos = pos;
    vel = 0;
    lastT = performance.now();
    cancelAnimationFrame(raf);
  });

  addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - startX;

    if (!moved) {
      if (Math.abs(dx) < 6) return;
      moved = true;
      grid.classList.add('dragging');
    }

    const step = stepPx();
    const now = performance.now();
    const dt = Math.max(1, now - lastT);
    vel = vel * .8 + ((lastX - e.clientX) / step / dt) * .2;   // unit: cards / ms
    lastX = e.clientX;
    lastT = now;

    let p = startPos - dx / step;
    const max = maxIdx();
    if (p < 0)   p = p * .35;                  // spring-back at the start
    if (p > max) p = max + (p - max) * .35;    // spring-back at the end
    pos = p;
    render();
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    grid.classList.remove('dragging');
    if (!moved) return;

    // inertia: faster swipes travel further (up to 2 cards)
    const boost = Math.max(-2, Math.min(2, vel * 250));
    go(pos + boost);
    setTimeout(() => { moved = false; }, 50);
  }
  addEventListener('pointerup', endDrag);
  addEventListener('pointercancel', endDrag);

  /* ---- Touchpad / mouse horizontal scroll ---- */
  let wheelT;
  grid.addEventListener('wheel', e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;   // let vertical scrolling behave normally
    e.preventDefault();
    cancelAnimationFrame(raf);
    pos = Math.max(-.3, Math.min(pos + e.deltaX / (stepPx() * 1.2), maxIdx() + .3));
    render();
    clearTimeout(wheelT);
    wheelT = setTimeout(() => go(pos), 120);
  }, { passive: false });

  /* ---- Click adjacent card -> bring it to center; ignore accidental taps right after dragging ---- */
  grid.addEventListener('click', e => {
    if (moved) { e.preventDefault(); e.stopPropagation(); return; }
    const card = e.target.closest('.card');
    if (!card || card.classList.contains('is-active')) return;
    e.preventDefault();
    e.stopPropagation();
    go(visible().indexOf(card));
  }, true);

  /* ---- Change the filter tab -> return to the first card ---- */
  tabs?.addEventListener('click', () => {
    requestAnimationFrame(() => { pos = target = 0; render(); });
  });

  addEventListener('resize', render);
  render();
})();


/* ===== TIMELINE: fade in + progress line tied to scroll ===== */
(() => {
  const tl = document.querySelector('.timeline');
  if (!tl) return;

  const items = [...tl.querySelectorAll('.tl')];
  items.forEach(el => el.classList.add('rv'));   // add the class via JS: without JS, the cards remain visible by default

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.style.setProperty('--d', (items.indexOf(en.target) % 3) * 0.12 + 's');
      en.target.classList.add('in');
      io.unobserve(en.target);
    });
  }, { threshold: .2 });
  items.forEach(el => io.observe(el));

  const update = () => {
    const r = tl.getBoundingClientRect();
    const p = (innerHeight * .65 - r.top) / r.height;
    tl.style.setProperty('--p', Math.max(0, Math.min(1, p)));
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
})();


/* ===== XỬ LÝ NÚT MỎ NEO TRỞ VỀ ĐẦU TRANG ===== */
(() => {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  // Ẩn/hiện nút dựa vào vị trí cuộn trang
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  // Cuộn mượt mà lên đầu trang khi click vào mỏ neo
  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();


/* ===== HIỆU ỨNG NỀN SAO + BỌT KHÍ OXY NỔI + TƯƠNG TÁC CHUỘT TOÀN TRANG ===== */
(() => {
  const bgCv = document.getElementById('bg-canvas');
  if (!bgCv) return;

  const bgCtx = bgCv.getContext('2d');
  const mainSec = document.querySelector('.main-content');
  if (!mainSec) return;

  let bgW, bgH, bgDpr;
  let bgStars = [];
  let bubbles = [];

  const bgMouse = {
    x: -9999,
    y: -9999,
    down: false,
    burst: 0,
    r: 140 // Bán kính tác động của chuột
  };

  function initBgCanvas() {
    bgDpr = Math.min(window.devicePixelRatio || 1, 2);

    // Lấy chiều rộng và chiều cao thực tế của khối main-content chứa nội dung bên dưới
    bgW = mainSec.clientWidth;
    bgH = mainSec.scrollHeight; // Lấy tổng chiều cao bao gồm cả các phần cuộn bên trong

    bgCv.width = bgW * bgDpr;
    bgCv.height = bgH * bgDpr;

    // 1. Khởi tạo danh sách sao lấp lánh
    bgStars = Array.from({ length: Math.floor((bgW * bgH) / 9000) }, () => ({
      x: Math.random() * bgW,
      y: Math.random() * bgH,
      ox: 0, oy: 0,
      vx: 0, vy: 0,
      s: Math.random() * 1.6 + 0.4,
      p: Math.random() * 6
    }));

    // 2. Khởi tạo danh sách bọt khí Oxy nổi từ dưới lên
    bubbles = Array.from({ length: Math.floor(bgW / 15) }, () => ({
      x: Math.random() * bgW,
      y: Math.random() * bgH,
      ox: 0, oy: 0,
      vx: 0, vy: 0,
      r: Math.random() * 5 + 2,
      speed: Math.random() * 0.8 + 0.3,
      swing: Math.random() * 2.5 + 0.5,
      swingSpeed: Math.random() * 0.02 + 0.01,
      angle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.5 + 0.25
    }));
  }

  function renderBg(t) {
    bgCtx.setTransform(bgDpr, 0, 0, bgDpr, 0, 0);

    bgCtx.globalCompositeOperation = 'source-over';
    bgCtx.fillStyle = '#040a16';
    bgCtx.fillRect(0, 0, bgW, bgH);

    const R = bgMouse.r + bgMouse.burst * 60;
    const force = 2.5 * (1 + bgMouse.burst * 4);
    bgMouse.burst *= 0.88;

    // A. Vẽ sao lấp lánh & lực đẩy chuột
    bgCtx.fillStyle = '#bfe0ff';
    for (const s of bgStars) {
      s.vx -= s.ox * 0.05;
      s.vy -= s.oy * 0.05;

      const currentX = s.x + s.ox;
      const currentY = s.y + s.oy;

      const dx = currentX - bgMouse.x;
      const dy = currentY - bgMouse.y;
      const d2 = dx * dx + dy * dy;

      if (d2 < R * R) {
        const d = Math.sqrt(d2) || 1;
        const k = Math.pow(1 - d / R, 2) * force;
        s.vx += (dx / d) * k;
        s.vy += (dy / d) * k;
      }

      s.vx *= 0.85;
      s.vy *= 0.85;
      s.ox += s.vx;
      s.oy += s.vy;

      bgCtx.globalAlpha = 0.2 + 0.45 * Math.abs(Math.sin(t / 1300 + s.p));
      bgCtx.fillRect(currentX - s.s / 2, currentY - s.s / 2, s.s, s.s);
    }

    // B. Vẽ bọt khí Oxy nổi từ dưới lên & lực đẩy chuột
    for (const b of bubbles) {
      b.y -= b.speed;
      b.angle += b.swingSpeed;

      b.vx -= b.ox * 0.05;
      b.vy -= b.oy * 0.05;

      const currentX = b.x + Math.sin(b.angle) * b.swing + b.ox;
      const currentY = b.y + b.oy;

      const dx = currentX - bgMouse.x;
      const dy = currentY - bgMouse.y;
      const d2 = dx * dx + dy * dy;

      if (d2 < R * R) {
        const d = Math.sqrt(d2) || 1;
        const k = Math.pow(1 - d / R, 2) * force;
        b.vx += (dx / d) * k;
        b.vy += (dy / d) * k;
      }

      b.vx *= 0.85;
      b.vy *= 0.85;
      b.ox += b.vx;
      b.oy += b.vy;

      // Reset bọt khí khi nổi quá đỉnh
      if (b.y < -30) {
        b.y = bgH + 30;
        b.x = Math.random() * bgW;
        b.ox = 0; b.oy = 0;
        b.vx = 0; b.vy = 0;
      }

      bgCtx.beginPath();
      bgCtx.arc(currentX, currentY, b.r, 0, Math.PI * 2);
      bgCtx.strokeStyle = `rgba(122, 224, 255, ${b.opacity})`;
      bgCtx.lineWidth = 0.9;
      bgCtx.stroke();

      bgCtx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.7})`;
      bgCtx.beginPath();
      bgCtx.arc(currentX - b.r * 0.35, currentY - b.r * 0.35, b.r * 0.28, 0, Math.PI * 2);
      bgCtx.fill();
    }

    bgCtx.globalAlpha = 1;
    requestAnimationFrame(renderBg);
  }

  // LẮNG NGHE SỰ KIỆN TRÊN WINDOW ĐỂ BẮT CHUỘT XUYÊN QUA CÁC THẺ CARD
  window.addEventListener('pointermove', e => {
    const rect = bgCv.getBoundingClientRect();
    bgMouse.x = e.clientX - rect.left;
    bgMouse.y = e.clientY - rect.top;
  });

  window.addEventListener('pointerdown', e => {
    const rect = bgCv.getBoundingClientRect();
    bgMouse.x = e.clientX - rect.left;
    bgMouse.y = e.clientY - rect.top;
    bgMouse.burst = 1; // Hiệu ứng nổ dạt ra khi click
  });

  window.addEventListener('pointerleave', () => {
    bgMouse.x = -9999;
    bgMouse.y = -9999;
  });

  // Tự động cập nhật kích thước khi thay đổi màn hình hoặc nội dung co giãn
  const resizeObserver = new ResizeObserver(() => {
    initBgCanvas();
  });
  resizeObserver.observe(mainSec);

  initBgCanvas();
  requestAnimationFrame(renderBg);
})();


/* ==========================================
   GAME CONSOLE
   Charge / Unplug / Photo Eject
========================================== */
(() => {
  const gameArea = document.getElementById("gameArea");
  const consoleEl = document.getElementById("gameConsole");
  const plug = document.getElementById("chargingPlug");
  const port = document.getElementById("chargingPort");

  const screenPhoto = document.getElementById("screenPhoto");
  const smileBtn = document.getElementById("smileBtn");

  const memoryPhoto = document.getElementById("memoryPhoto");
  const memoryImage = document.getElementById("memoryImage");
  const memoryCaption = document.getElementById("memoryCaption");

  const hint = document.getElementById("chargingHint");

  const cablePath = document.getElementById("cablePath");
  const cableHighlight = document.getElementById("cableHighlight");

  if (
    !gameArea ||
    !consoleEl ||
    !plug ||
    !port ||
    !cablePath
  ) {
    return;
  }

  /* ======================================
     3 PHOTOS
  ====================================== */
  const photos = [
    {
      src: "images/hobby-11.jpg",
      title: "Memory 01"
    },
    {
      src: "images/avatar1.jpg",
      title: "Memory 02"
    },
    {
      src: "images/avatar2.jpg",
      title: "Memory 03"
    }
  ];

  let powered = false;
  let currentPhoto = 0;
  let photoOpen = false;
  let dragging = false;

  let dragOffsetX = 0;
  let dragOffsetY = 0;

  /* ======================================
     HELPER: CENTER POSITION
  ====================================== */
  function getCenter(element) {
    const rect = element.getBoundingClientRect();
    const areaRect = gameArea.getBoundingClientRect();

    return {
      x: rect.left + rect.width / 2 - areaRect.left,
      y: rect.top + rect.height / 2 - areaRect.top
    };
  }

  /* ======================================
     UPDATE CABLE CURVE
  ====================================== */
  function updateCable() {
    const portPoint = getCenter(port);
    const plugPoint = getCenter(plug);

    const distanceX = plugPoint.x - portPoint.x;

    const curve = Math.max(
      45,
      Math.abs(distanceX) * 0.35
    );

    const path = `
      M ${portPoint.x} ${portPoint.y}
      C ${portPoint.x + curve} ${portPoint.y + 70},
        ${plugPoint.x - curve} ${plugPoint.y + 70},
        ${plugPoint.x} ${plugPoint.y}
    `;

    cablePath.setAttribute("d", path);
    cableHighlight.setAttribute("d", path);
  }

  /* ======================================
     INITIAL PLUG POSITION
  ====================================== */
  function resetPlugPosition() {
    plug.style.left = "78%";
    plug.style.top = "91%";
    plug.style.transform = "translate(-50%, -50%)";

    updateCable();
  }

  /* ======================================
     POINTER DOWN: PICK UP PLUG
  ====================================== */
  plug.addEventListener("pointerdown", (event) => {
    event.preventDefault();

    dragging = true;

    plug.classList.add("dragging");

    plug.setPointerCapture(event.pointerId);

    const plugRect = plug.getBoundingClientRect();

    dragOffsetX = event.clientX - plugRect.left;
    dragOffsetY = event.clientY - plugRect.top;
  });

  /* ======================================
     POINTER MOVE: DRAG PLUG
  ====================================== */
  plug.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    const areaRect = gameArea.getBoundingClientRect();

    const x =
      event.clientX -
      areaRect.left -
      dragOffsetX;

    const y =
      event.clientY -
      areaRect.top -
      dragOffsetY;

    plug.style.left = `${x}px`;
    plug.style.top = `${y}px`;

    plug.style.transform = "none";

    updateCable();
  });

  /* ======================================
     POINTER UP
  ====================================== */
  plug.addEventListener("pointerup", () => {
    if (!dragging) return;

    dragging = false;

    plug.classList.remove("dragging");

    if (powered) {
      checkUnplug();
    } else {
      checkPlugConnection();
    }
  });

  plug.addEventListener("pointercancel", () => {
    dragging = false;
    plug.classList.remove("dragging");
  });

  /* ======================================
     CHECK PLUG CONNECTION
  ====================================== */
  function checkPlugConnection() {
    const plugPoint = getCenter(plug);
    const portPoint = getCenter(port);

    const distance = Math.hypot(
      plugPoint.x - portPoint.x,
      plugPoint.y - portPoint.y
    );

    if (distance < 85) {
      connectCharger();
    } else {
      hint.textContent =
        "Kéo đầu sạc đến gần cổng trên máy hơn nhé!";
    }
  }

  /* ======================================
     CONNECT CHARGER
  ====================================== */
  function connectCharger() {
    if (powered) return;

    powered = true;

    consoleEl.classList.add("powered");
    port.classList.add("connected");

    plug.classList.add("connected");

    // Snap đầu sạc vào cổng
    const areaRect = gameArea.getBoundingClientRect();
    const portRect = port.getBoundingClientRect();

    const x =
      portRect.left +
      portRect.width / 2 -
      areaRect.left;

    const y =
      portRect.top +
      portRect.height / 2 -
      areaRect.top;

    plug.style.left = `${x}px`;
    plug.style.top = `${y}px`;

    plug.style.transform = "translate(-50%, -50%)";

    plug.style.pointerEvents = "auto";

    hint.textContent =
      "Máy đã bật! Bấm nút màu để chọn ảnh hoặc mặt cười để mở ảnh.";

    // Ánh sáng khởi động
    consoleEl.animate(
      [
        { filter: "brightness(1)" },
        { filter: "brightness(1.5)" },
        { filter: "brightness(1)" }
      ],
      {
        duration: 800,
        easing: "ease-out"
      }
    );

    updateCable();
  }

  /* ======================================
     CHECK UNPLUG
  ====================================== */
  function checkUnplug() {
    const plugPoint = getCenter(plug);
    const portPoint = getCenter(port);

    const distance = Math.hypot(
      plugPoint.x - portPoint.x,
      plugPoint.y - portPoint.y
    );

    // Kéo đầu sạc ra xa thì ngắt nguồn
    if (distance > 90) {
      disconnectCharger();
    } else {
      // Đầu sạc vẫn gần cổng: hút lại vào cổng
      snapPlugBack();
    }
  }

  /* ======================================
     DISCONNECT CHARGER
  ====================================== */
  function disconnectCharger() {
    powered = false;
    photoOpen = false;

    consoleEl.classList.remove("powered");
    consoleEl.classList.add("unplugging");

    port.classList.remove("connected");
    plug.classList.remove("connected");

    plug.style.pointerEvents = "auto";

    // Ảnh đang nổi quay về / biến mất
    memoryPhoto.classList.remove("show", "hide");

    // Tắt màn hình
    screenPhoto.src = photos[currentPhoto].src;

    hint.textContent =
      "Đã rút sạc. Kéo đầu sạc vào cổng để bật máy lại.";

    setTimeout(() => {
      consoleEl.classList.remove("unplugging");
    }, 500);

    updateCable();
  }

  /* ======================================
     SNAP PLUG BACK INTO PORT
  ====================================== */
  function snapPlugBack() {
    const areaRect = gameArea.getBoundingClientRect();
    const portRect = port.getBoundingClientRect();

    const x =
      portRect.left +
      portRect.width / 2 -
      areaRect.left;

    const y =
      portRect.top +
      portRect.height / 2 -
      areaRect.top;

    plug.style.left = `${x}px`;
    plug.style.top = `${y}px`;

    plug.style.transform = "translate(-50%, -50%)";

    updateCable();
  }

  /* ======================================
     COLOR BUTTONS: SELECT PHOTO
  ====================================== */
  document.querySelectorAll(".game-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (!powered) {
        hint.textContent =
          "Cắm sạc để bật máy trước nhé!";
        return;
      }

      currentPhoto = Number(button.dataset.photo);

      screenPhoto.src = photos[currentPhoto].src;

      // Nếu ảnh đang mở, đổi ảnh đang nổi
      if (photoOpen) {
        memoryImage.src = photos[currentPhoto].src;
        memoryCaption.textContent =
          photos[currentPhoto].title;

        memoryPhoto.classList.remove("show");

        // Reset animation
        void memoryPhoto.offsetWidth;

        memoryPhoto.classList.add("show");
      }

      // Hiệu ứng nút nhấn
      button.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(5px)" },
          { transform: "translateY(0)" }
        ],
        {
          duration: 180
        }
      );
    });
  });

  /* ======================================
     SMILE BUTTON: EJECT / RETURN
  ====================================== */
  smileBtn.addEventListener("click", () => {
    if (!powered) {
      hint.textContent =
        "Cắm sạc để bật máy trước nhé!";
      return;
    }

    // Nút nhấn xuống
    smileBtn.animate(
      [
        { transform: "translateY(0) scale(1)" },
        { transform: "translateY(5px) scale(.94)" },
        { transform: "translateY(0) scale(1)" }
      ],
      {
        duration: 180
      }
    );

    /* Nếu ảnh đang nổi thì thu về */
    if (photoOpen) {
      memoryPhoto.classList.remove("show");
      memoryPhoto.classList.add("hide");

      photoOpen = false;

      hint.textContent =
        "Ảnh đã trở về máy. Bấm nút màu để chọn ảnh khác.";

      setTimeout(() => {
        memoryPhoto.classList.remove("hide");
      }, 600);

      return;
    }

    /* Hiện ảnh */
    memoryImage.src = photos[currentPhoto].src;

    memoryCaption.textContent =
      photos[currentPhoto].title;

    screenPhoto.src = photos[currentPhoto].src;

    memoryPhoto.classList.remove("hide");

    // Reset animation
    void memoryPhoto.offsetWidth;

    memoryPhoto.classList.add("show");

    photoOpen = true;

    hint.textContent =
      "Bấm mặt cười lần nữa để đưa ảnh về máy.";
  });

  /* ======================================
     RESPONSIVE
  ====================================== */
  window.addEventListener("resize", () => {
    updateCable();
  });

  /* ======================================
     INITIALIZE
  ====================================== */
  resetPlugPosition();

})();


/* ===== HERO CARD: MAGNIFIER ===== */
document.addEventListener("DOMContentLoaded", () => {
  const heroCard = document.querySelector(".hero-card");

  if (!heroCard) return;

  const overlay = document.createElement("div");
  overlay.className = "magnifier-overlay";
  heroCard.appendChild(overlay);

  heroCard.addEventListener("click", (event) => {
    // Không bật kính lúp khi click nút hoặc link
    if (event.target.closest("a, button")) return;

    heroCard.classList.toggle("magnifier-active");
  });

  heroCard.addEventListener("mousemove", (event) => {
    const rect = heroCard.getBoundingClientRect();

    overlay.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );

    overlay.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  });
});


/* ===================================================
   RUBIK 3×3×3 — 27 khối nhỏ thật, xoay được từng lớp
   · Kéo trên một ô      → xoay lớp chứa ô đó (thả ra tự khớp 90°)
   · Kéo ra ngoài khối   → xoay cả khối (có quán tính)
   · Nội dung 6 mặt được đọc từ HTML (.cube-face > .tile)
=================================================== */
(() => {
  const cube = document.getElementById('rubikCube');
  const area = document.getElementById('rubikArea');
  if (!cube || !area) return;

  const S = 60;                                         // cạnh 1 khối nhỏ — phải khớp --s trong CSS
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

  /* ---------- Toán 3×3 (ma trận lưu theo hàng, 9 phần tử) ---------- */
  const mul = (A, B) => {
    const C = new Array(9).fill(0);
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        for (let k = 0; k < 3; k++) C[i * 3 + j] += A[i * 3 + k] * B[k * 3 + j];
    return C;
  };
  const apply = (A, v) => [0, 1, 2].map(i => A[i * 3] * v[0] + A[i * 3 + 1] * v[1] + A[i * 3 + 2] * v[2]);
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

  // Quay q phần tư (q × 90°) quanh trục +e_k  (công thức Rodrigues, kết quả toàn số nguyên)
  const rot90 = (k, q) => {
    const [ax, ay, az] = [0, 1, 2].map(i => (i === k ? 1 : 0));
    const ang = q * Math.PI / 2;
    const c = Math.round(Math.cos(ang)), s = Math.round(Math.sin(ang));
    return [
      c + (1 - c) * ax * ax,      (1 - c) * ax * ay - s * az, (1 - c) * ax * az + s * ay,
      (1 - c) * ay * ax + s * az, c + (1 - c) * ay * ay,      (1 - c) * ay * az - s * ax,
      (1 - c) * az * ax - s * ay, (1 - c) * az * ay + s * ax, c + (1 - c) * az * az
    ].map(v => v + 0);
  };

  /* ---------- Đọc nội dung 6 mặt từ HTML ---------- */
  const FACES = [
    { name: 'front',  n: [0, 0, 1],  src: 'face-front',  tint: '122,224,255' },   // xanh ngọc
    { name: 'right',  n: [1, 0, 0],  src: 'face-right',  tint: '255,210,122' },   // vàng
    { name: 'back',   n: [0, 0, -1], src: 'face-back',   tint: '167,139,250' },   // tím
    { name: 'left',   n: [-1, 0, 0], src: 'face-left',   tint: '255,143,122' },   // san hô
    { name: 'top',    n: [0, -1, 0], src: 'face-top',    tint: '122,255,200' },   // bạc hà
    { name: 'bottom', n: [0, 1, 0],  src: 'face-bottom', tint: '90,150,255' }     // xanh dương
  ];
  const content = FACES.map(f => {
    const face = cube.querySelector('.' + f.src);
    return face ? [...face.querySelectorAll('.tile')].map(t => ({
      cls: t.className.replace('tile-', 'st-').replace(/\btile\b/, '').trim(),
      html: t.innerHTML
    })) : [];
  });
  cube.textContent = '';                                 // bỏ 6 mặt phẳng cũ, thay bằng 27 khối

  // ô thứ mấy (0–8) trên mặt `name` ứng với khối ở vị trí (x, y, z)
  const tileIndex = (name, x, y, z) => {
    const row = { front: y + 1, right: y + 1, back: y + 1, left: y + 1, top: z + 1, bottom: 1 - z }[name];
    const col = { front: x + 1, right: 1 - z, back: 1 - x, left: z + 1, top: x + 1, bottom: x + 1 }[name];
    return row * 3 + col;
  };

  /* ---------- Dựng 27 khối nhỏ ---------- */
  const cubies = [];
  const history = [];                                    // các nước đã đi, để "Đặt lại"

  const matrix = c => {
    const R = c.R, p = c.pos;
    return `matrix3d(${R[0]},${R[3]},${R[6]},0,${R[1]},${R[4]},${R[7]},0,${R[2]},${R[5]},${R[8]},0,${p[0] * S},${p[1] * S},${p[2] * S},1)`;
  };
  const setStatic = c => { c.el.style.transform = matrix(c); };

  for (let x = -1; x <= 1; x++)
    for (let y = -1; y <= 1; y++)
      for (let z = -1; z <= 1; z++) {
        const el = document.createElement('div');
        el.className = 'cubie';
        const c = { el, pos: [x, y, z], R: [1, 0, 0, 0, 1, 0, 0, 0, 1] };
        el._c = c;

        FACES.forEach((f, fi) => {
          const face = document.createElement('div');
          face.className = 'cf cf-' + f.name;
          face.dataset.n = f.n.join(',');
          face.setAttribute('aria-hidden', 'true');

          const [nx, ny, nz] = f.n;
          const exposed = (nx && x === nx) || (ny && y === ny) || (nz && z === nz);
          if (exposed) {
            const data = content[fi][tileIndex(f.name, x, y, z)] || { cls: '', html: '' };
            const st = document.createElement('div');
            st.className = ('st ' + data.cls).trim();
            st.style.setProperty('--tint', f.tint);
            st.innerHTML = data.html;
            face.appendChild(st);
          }
          el.appendChild(face);
        });

        setStatic(c);
        cube.appendChild(el);
        cubies.push(c);
      }

  /* ---------- Xoay một lớp ---------- */
  let busy = false;                                      // đang chạy hiệu ứng xoay lớp
  let locked = false;                                    // đang xáo trộn / đặt lại: khoá thao tác kéo
  const ease = t => 1 - Math.pow(1 - t, 3);
  const AXES = ['1,0,0', '0,1,0', '0,0,1'];

  const tween = (from, to, ms, step, done) => {
    if (ms <= 0) { step(to); done(); return; }
    const t0 = performance.now();
    const tick = now => {
      const p = clamp((now - t0) / ms, 0, 1);
      step(from + (to - from) * ease(p));
      p < 1 ? requestAnimationFrame(tick) : done();
    };
    requestAnimationFrame(tick);
  };

  const setLayer = (layer, k, deg) =>
    layer.forEach(c => { c.el.style.transform = `rotate3d(${AXES[k]},${deg}deg) ${matrix(c)}`; });

  const commit = (layer, k, L, q, record) => {
    if (q) {
      const Rq = rot90(k, q);
      layer.forEach(c => { c.pos = apply(Rq, c.pos); c.R = mul(Rq, c.R); });
      if (record) history.push({ k, L, q });
    }
    layer.forEach(setStatic);
  };

  const turn = (k, L, q, ms = 240, record = true) => new Promise(resolve => {
    busy = true;
    const layer = cubies.filter(c => c.pos[k] === L);
    tween(0, q * 90, reduceMotion ? 0 : ms, d => setLayer(layer, k, d), () => {
      commit(layer, k, L, q, record);
      busy = false;
      resolve();
    });
  });

  /* ---------- Góc nhìn cả khối ---------- */
  let rx = -22, ry = 32;                                 // góc ban đầu
  let velYaw = 0, velPitch = 0;
  let hover = false, visible = true, lastView = '';

  const applyView = () => {
    const v = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    if (v !== lastView) { cube.style.transform = v; lastView = v; }
  };
  const viewMatrix = () => {
    const a = rx * Math.PI / 180, b = ry * Math.PI / 180;
    const ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
    return mul([1, 0, 0, 0, ca, -sa, 0, sa, ca], [cb, 0, sb, 0, 1, 0, -sb, 0, cb]);
  };

  /* ---------- Kéo chuột / ngón tay ---------- */
  let drag = null;
  const DEG_PER_PX = 0.45;

  area.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (drag) return;
    const faceEl = e.target.closest && e.target.closest('.cf');
    const c = faceEl && faceEl.parentElement._c;
    area.setPointerCapture(e.pointerId);
    velYaw = velPitch = 0;

    if (c && !busy && !locked) {
      const nLocal = faceEl.dataset.n.split(',').map(Number);
      drag = { type: 'pending', id: e.pointerId, c, n: apply(c.R, nLocal).map(Math.round), x0: e.clientX, y0: e.clientY };
    } else {
      drag = { type: 'orbit', id: e.pointerId, lastX: e.clientX, lastY: e.clientY };
    }
  });

  // Bắt đầu kéo lớp: chọn trục xoay theo hướng ngón tay kéo trên màn hình
  const beginLayerDrag = (dx, dy) => {
    const V = viewMatrix();
    let best = null;
    for (let i = 0; i < 3; i++) {
      if (drag.n[i] !== 0) continue;                     // chỉ xét 2 hướng nằm trong mặt được kéo
      const t = [0, 0, 0]; t[i] = 1;
      const w = apply(V, t);
      const score = Math.abs(dx * w[0] + dy * w[1]);
      if (!best || score > best.score) best = { t, sv: [w[0], w[1]], score };
    }
    const a = cross(drag.n, best.t);                     // trục xoay = pháp tuyến × hướng kéo
    const k = a.findIndex(v => v !== 0);
    const len = Math.hypot(best.sv[0], best.sv[1]) || 1;

    drag.type = 'layer';
    drag.k = k;
    drag.sa = a[k];
    drag.L = drag.c.pos[k];
    drag.sv = [best.sv[0] / len, best.sv[1] / len];
    drag.layer = cubies.filter(c => c.pos[k] === drag.L);
    drag.deg = 0; drag.vel = 0; drag.prevDeg = 0; drag.prevT = performance.now();
    area.classList.add('turning');
  };

  area.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;

    if (drag.type === 'orbit') {
      const dx = e.clientX - drag.lastX, dy = e.clientY - drag.lastY;
      drag.lastX = e.clientX; drag.lastY = e.clientY;
      ry += dx * 0.4;
      rx = clamp(rx - dy * 0.4, -85, 85);
      velYaw = dx * 0.4; velPitch = -dy * 0.4;
      return;
    }

    if (drag.type === 'pending') {
      const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
      if (Math.hypot(dx, dy) < 7) return;
      beginLayerDrag(dx, dy);
    }

    if (drag.type === 'layer') {
      const along = (e.clientX - drag.x0) * drag.sv[0] + (e.clientY - drag.y0) * drag.sv[1];
      const deg = clamp(drag.sa * along * DEG_PER_PX, -180, 180);
      const now = performance.now();
      if (now - drag.prevT > 16) {
        drag.vel = (deg - drag.prevDeg) / (now - drag.prevT);   // độ / ms
        drag.prevDeg = deg; drag.prevT = now;
      }
      drag.deg = deg;
      setLayer(drag.layer, drag.k, deg);
    }
  });

  const endDrag = e => {
    if (!drag || e.pointerId !== drag.id) return;
    const d = drag;
    drag = null;
    if (d.type !== 'layer') return;

    // Làm tròn về bội số của 90°; hất nhanh thì tính là 1 nước dù kéo chưa tới
    let q = 0;
    if (Math.abs(d.deg) > 22) q = Math.sign(d.deg) * Math.max(1, Math.round(Math.abs(d.deg) / 90));
    else if (Math.abs(d.deg) > 6 && Math.abs(d.vel) > 0.25 && Math.sign(d.vel) === Math.sign(d.deg)) q = Math.sign(d.deg);

    busy = true;
    tween(d.deg, q * 90, reduceMotion ? 0 : 220, v => setLayer(d.layer, d.k, v), () => {
      commit(d.layer, d.k, d.L, q, true);
      busy = false;
      area.classList.remove('turning');
    });
  };
  area.addEventListener('pointerup', endDrag);
  area.addEventListener('pointercancel', endDrag);
  area.addEventListener('pointerenter', () => { hover = true; });
  area.addEventListener('pointerleave', () => { hover = false; });

  /* ---------- Xáo trộn / đặt lại ---------- */
  const shuffle = async () => {
    if (busy || locked) return;
    locked = true;
    let lastK = -1;
    for (let i = 0; i < 14; i++) {
      let k; do { k = Math.floor(Math.random() * 3); } while (k === lastK);
      lastK = k;
      await turn(k, [-1, 0, 1][Math.floor(Math.random() * 3)], Math.random() < 0.5 ? 1 : -1, 170);
    }
    locked = false;
  };

  const reset = async () => {
    if (busy || locked || !history.length) return;
    locked = true;
    const moves = history.splice(0).reverse();           // đi ngược lại từng nước đã đi
    const ms = clamp(2600 / moves.length, 35, 160);
    for (const m of moves) await turn(m.k, m.L, -m.q, ms, false);
    locked = false;
  };

  const btnShuffle = document.getElementById('rubikShuffle');
  const btnReset = document.getElementById('rubikReset');
  if (btnShuffle) btnShuffle.addEventListener('click', shuffle);
  if (btnReset) btnReset.addEventListener('click', reset);

  /* ---------- Vòng lặp: quán tính + tự xoay nhẹ khi rảnh ---------- */
  if ('IntersectionObserver' in window)
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(area);

  const frame = () => {
    if (visible && (!drag || drag.type === 'orbit')) {
      if (!drag) {
        velYaw *= 0.93; velPitch *= 0.93;
        ry += velYaw;
        rx = clamp(rx + velPitch, -85, 85);
        if (!reduceMotion && !hover && !busy && !locked && Math.abs(velYaw) < 0.05) ry += 0.1;   // tự xoay chậm
      }
      applyView();
    }
    requestAnimationFrame(frame);
  };

  area.setAttribute('role', 'group');
  area.setAttribute('aria-label', 'Khối Rubik 3D: kéo một ô để xoay từng lớp, kéo ra ngoài để xoay cả khối');
  applyView();
  frame();
})();


/* ===== HOBBIES: trái tim ảnh + danh sách sở thích hiện dần ===== */
(() => {
  const section = document.querySelector('#hobbies');
  if (!section) return;

  const heart   = section.querySelector('.hobby-heart');
  const content = section.querySelector('.about-content');
  if (!heart || !content) return;

  // đánh số thứ tự để hiện lần lượt
  heart.querySelectorAll('.hobby-tile').forEach((t, i) => t.style.setProperty('--i', i));
  content.querySelectorAll('.hobby-item').forEach((h, i) => h.style.setProperty('--i', i));

  const hio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('is-visible');
        hio.unobserve(en.target);
      }
    });
  }, { threshold: 0.2 });

  hio.observe(heart);
  hio.observe(content);
})();


/* ==========================================
   9. AUTO HANGING SIGN FOR EVERY SECTION (OCEAN PEARL THEME)
========================================== */
(() => {
  const sections = document.querySelectorAll('section[id]');

  const customNames = {
    home:       ['00', 'TRANG CHỦ'],
    about:      ['01', 'GIỚI THIỆU'],
    hobbies:    ['02', 'SỞ THÍCH'],
    skills:     ['03', 'KỸ NĂNG'],
    projects:   ['04', 'DỰ ÁN'],
    experience: ['05', 'KINH NGHIỆM'],
    contact:    ['06', 'LIÊN HỆ']
  };

  sections.forEach((section, index) => {

    // Tránh tạo bảng trùng lặp
    if (section.querySelector(':scope > .station-sign')) {
      section.classList.add('has-station-sign');
      return;
    }

    const heading = section.querySelector('h2, h1');

    const info = customNames[section.id] || [
      String(index + 1).padStart(2, '0'),
      heading?.textContent.trim() || 'DISCOVER'
    ];

    const sign = document.createElement('div');
    sign.className = 'station-sign';

    // Bơm toàn bộ HTML của bảng hiệu Vỏ sò ngọc trai mới vào đây
    sign.innerHTML = `
      <!-- Dây treo ngọc trai -->
      <div class="pearl-rope rope-left"></div>
      <div class="pearl-rope rope-right"></div>

      <!-- Mặt bảng hiệu -->
      <div class="station-plaque">
        <div class="plaque-stars"></div>

        <!-- Trang trí: Vỏ sò ngọc trai thuần CSS -->
        <div class="decor-shell">
          <div class="shell-top"></div>
          <div class="shell-pearl"></div>
          <div class="shell-bottom"></div>
        </div>

        <!-- Trang trí: Bóng nước pha lê -->
        <div class="ocean-bubble b-1"></div>
        <div class="ocean-bubble b-2"></div>
        <div class="ocean-bubble b-3"></div>
        <div class="ocean-bubble b-4"></div>
        <div class="ocean-bubble b-5"></div>

        <!-- Nội dung chữ (Tự động lấy số và tên section) -->
        <div style="display: flex; flex-direction: column; align-items: center; z-index: 10;">
          <h2 class="station-name" style="margin: 0;">${info[0]} ${info[1]}</h2>
          <span class="station-platform" style="font-size: 10px; letter-spacing: 2px; color: #a9dff5; margin-top: -5px; text-transform: uppercase;">MY PERSONAL JOURNEY</span>
        </div>

        <!-- Trang trí: Dây chuyền đuôi tiên cá -->
        <div class="decor-pendant">
          <div class="pendant-chain"></div>
          <div class="pendant-gem"><div class="gem-glare"></div></div>
          <div class="pendant-tail">
            <div class="fin left-fin"></div>
            <div class="fin right-fin"></div>
          </div>
        </div>
      </div>
    `;

    section.classList.add('has-station-sign');
    section.insertBefore(sign, section.firstChild);
  });

  // Chỉ kích hoạt khi slide xuất hiện trong màn hình
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const sign = entry.target.querySelector(':scope > .station-sign');

      if (!sign) return;

      if (entry.isIntersecting) {
        sign.classList.remove('is-visible');

        requestAnimationFrame(() => {
          sign.classList.add('is-visible');
        });
      } else {
        sign.classList.remove('is-visible');
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => observer.observe(section));

})();
