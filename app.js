(function () {
  'use strict';

  /* ===== DATA ===== */

  const SERVICES = [
    { id: '01', title: '专业提示词工程能力', desc: '精准拆解创作需求，将创意转化为标准化 AI 生成指令。适配图片、视频各类创作场景，精准把控画面风格与细节，高效提升出图质量与效率。' },
    { id: '02', title: '精准模型选型与生成能力', desc: '针对国风、二次元、3D、影视、广告等不同场景，精准匹配最优 AI 模型。通过智能控图技术锁定画面结构，快速批量产出优质原创初稿。' },
    { id: '03', title: '画面精修与迭代优化能力', desc: '修复 AI 画面畸形、透视、细节缺陷，通过局部精修、高清超分、多轮迭代，优化画面质感，达标商用视觉效果。' },
    { id: '04', title: 'AI 后期合成与二次创作能力', desc: '打通 AI 素材后期全流程，支持抠图、调色、光影优化、画面拓展等二次编辑，联动专业设计工具，快速输出海报、分镜、短视频成品。' },
    { id: '05', title: '视觉一致性管控能力', desc: '通过参数固化、模型定制、参考锁定等技术，统一人设、IP、风格与色调，解决 AI 画面不稳定问题，适配批量系列化创作。' },
    { id: '06', title: '合规校验与标准化交付能力', desc: '全维度合规筛查，规避版权与内容风险。统一商用输出标准，规范尺寸、画质与格式，实现 AI 视觉创作一站式合规交付。' }
  ];

  const WORKS = [
    { id: 'w1', cat: 'ai短剧', title: '《仙途》', desc: '古风仙侠 AI 短剧，讲述修仙少女的成长之路。采用 AI 全流程生成，从角色设计到场景搭建再到成片输出。', tags: ['AI 短剧', '古风', '仙侠'], img: 'assets/work-xiantu.jpg' },
    { id: 'w2', cat: 'ai图片', title: '梦境少女', desc: '梦幻风格 AI 人像生成系列，探索 AI 在艺术人像领域的无限可能。', tags: ['AI 图片', '人像', '梦幻'], img: 'assets/work-dream.jpg' },
    { id: 'w3', cat: '电商', title: '深层补水 焕活新生', desc: '护肤品牌 AI 视觉广告，将产品特性与科技美学完美融合。', tags: ['AI 图片', '商业', '护肤'], img: 'assets/work-skincare.jpg', link: 'https://pan.quark.cn/s/0607f931084f' },
    { id: 'w4', cat: '游戏买量视频', title: '未来出行·概念片', desc: '赛博朋克风格未来出行概念视频，展现 AI 视觉在科幻题材中的表现力。', tags: ['视频剪辑', '科幻', '概念'], img: 'assets/work-car.jpg' },
    { id: 'w5', cat: 'ai信息流', title: 'AI 信息流可视化', desc: '基于 AI 的数据可视化信息流设计，将复杂数据转化为直观视觉语言。', tags: ['AI 信息流', '数据', '可视化'], img: 'assets/work-infoflow.jpg' },
    { id: 'w6', cat: 'agent', title: 'API 智能工作流', desc: '多平台 AI 工具 API 集成方案，实现跨平台自动化创作流程。', tags: ['API 调用', '自动化', '集成'], img: 'assets/work-api.jpg' }
  ];

  const EXPERIENCES = [
    { date: '2024.01 - 至今', title: 'AI 视觉创意项目负责人', desc: '负责多个 AI 短剧及 AI 视觉项目的创意策划与制作管理，带领团队交付 50+ 项目' },
    { date: '2023.06 - 2023.12', title: '电商品牌 AI 内容制作', desc: '为电商品牌提供 AI 驱动的视觉内容制作服务，包括产品图生成与信息流广告' },
    { date: '2022.01 - 2023.05', title: '数字营销内容制作', desc: '从事数字营销视觉内容制作，逐步探索 AI 工具在创意工作流中的应用' }
  ];

  const SKILL_LEVELS = [
    { label: 'AI短剧生成', value: 90 },
    { label: 'AI图片生成', value: 95 },
    { label: 'AI信息流', value: 80 },
    { label: '视频剪辑', value: 85 },
    { label: 'Skill创建', value: 75 },
    { label: 'API调用', value: 80 }
  ];

  const TOOLS = [
    { name: '即梦', icon: '梦', url: 'https://jimeng.jianying.com/' },
    { name: '小云雀', icon: '雀', url: 'https://xyq.jianying.com/' },
    { name: 'Libtv', icon: 'L', url: 'https://www.liblib.tv/' },
    { name: '可灵', icon: '灵', url: 'https://klingai.com/' }
  ];

  const FILTER_CATS = [
    { key: 'all', label: '全部' },
    { key: '电商', label: '电商' },
    { key: '数字人', label: '数字人' },
    { key: '游戏买量视频', label: '游戏买量视频' },
    { key: 'ai信息流', label: 'AI信息流' },
    { key: 'ai短剧', label: 'AI短剧' },
    { key: 'ai图片', label: 'AI图片' },
    { key: 'agent', label: 'Agent+Skill' }
  ];

  /* ===== RENDER ===== */

  function renderServices() {
    var grid = document.getElementById('servicesGrid');
    grid.innerHTML = SERVICES.map(function (s) {
      return '<div class="capability-card">' +
        '<div class="capability-num">' + s.id + '</div>' +
        '<div class="capability-body">' +
        '<h3>' + s.title + '</h3>' +
        '<div class="capability-line"></div>' +
        '<p>' + s.desc + '</p>' +
        '</div>' +
        '</div>';
    }).join('');
    grid.classList.add('stagger-children', 'reveal');
  }

  function renderFilterBar() {
    var bar = document.getElementById('filterBar');
    bar.innerHTML = FILTER_CATS.map(function (c) {
      return '<button class="filter-btn' + (c.key === 'all' ? ' active' : '') + '" data-cat="' + c.key + '">' + c.label + '</button>';
    }).join('');
  }

  function renderWorks(filter) {
    filter = filter || 'all';
    var grid = document.getElementById('worksGrid');
    var filtered = filter === 'all' ? WORKS : WORKS.filter(function (w) { return w.cat === filter; });
    grid.innerHTML = filtered.map(function (w) {
      return '<div class="work-card" data-id="' + w.id + '">' +
        '<div class="work-card-image"><img src="' + w.img + '" alt="' + w.title + '" loading="lazy"></div>' +
        '<div class="work-card-info">' +
        '<h3>' + w.title + '</h3>' +
        '<div class="work-card-tags">' + w.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        '</div></div>';
    }).join('');
    grid.classList.add('stagger-children');
    bindWorkCards();
    observeNewReveals();
  }

  function bindWorkCards() {
    var cards = document.querySelectorAll('.work-card');
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        var id = card.dataset.id;
        var work = WORKS.find(function (w) { return w.id === id; });
        if (!work) return;
        if (work.link) { window.open(work.link, '_blank'); return; }
        openLightbox(work);
      });
    });
  }

  function renderTimeline() {
    var tl = document.getElementById('timeline');
    tl.innerHTML = EXPERIENCES.map(function (e) {
      return '<div class="timeline-item">' +
        '<div class="timeline-date">' + e.date + '</div>' +
        '<div class="timeline-title">' + e.title + '</div>' +
        '<div class="timeline-desc">' + e.desc + '</div>' +
        '</div>';
    }).join('');
  }

  function renderRadar() {
    var svg = document.getElementById('radarChart');
    var cx = 220, cy = 220, r = 120;
    var n = SKILL_LEVELS.length;
    var levels = [0.25, 0.5, 0.75, 1];

    var html = '';

    // Background grid
    for (var li = 0; li < levels.length; li++) {
      var lr = r * levels[li];
      var points = [];
      for (var i = 0; i < n; i++) {
        var angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        points.push((cx + lr * Math.cos(angle)).toFixed(1) + ',' + (cy + lr * Math.sin(angle)).toFixed(1));
      }
      html += '<polygon points="' + points.join(' ') + '" fill="none" stroke="rgba(139,92,246,0.15)" stroke-width="1"/>';
    }

    // Axes
    for (var ai = 0; ai < n; ai++) {
      var aa = (Math.PI * 2 * ai) / n - Math.PI / 2;
      html += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + r * Math.cos(aa)).toFixed(1) + '" y2="' + (cy + r * Math.sin(aa)).toFixed(1) + '" stroke="rgba(139,92,246,0.1)" stroke-width="1"/>';
    }

    // Data polygon
    var dataPoints = [];
    for (var di = 0; di < n; di++) {
      var da = (Math.PI * 2 * di) / n - Math.PI / 2;
      var dv = r * (SKILL_LEVELS[di].value / 100);
      dataPoints.push((cx + dv * Math.cos(da)).toFixed(1) + ',' + (cy + dv * Math.sin(da)).toFixed(1));
    }
    html += '<polygon points="' + dataPoints.join(' ') + '" fill="url(#radar-grad)" stroke="#8B5CF6" stroke-width="2" opacity="0.8"/>';

    // Data dots
    for (var doti = 0; doti < n; doti++) {
      var dota = (Math.PI * 2 * doti) / n - Math.PI / 2;
      var dotv = r * (SKILL_LEVELS[doti].value / 100);
      html += '<circle cx="' + (cx + dotv * Math.cos(dota)).toFixed(1) + '" cy="' + (cy + dotv * Math.sin(dota)).toFixed(1) + '" r="3" fill="#A855F7"/>';
    }

    // Labels
    for (var li2 = 0; li2 < n; li2++) {
      var la = (Math.PI * 2 * li2) / n - Math.PI / 2;
      var lx = cx + (r + 24) * Math.cos(la);
      var ly = cy + (r + 24) * Math.sin(la);
      var anchor = 'middle';
      if (lx < cx - 10) anchor = 'end';
      if (lx > cx + 10) anchor = 'start';
      html += '<text x="' + lx.toFixed(1) + '" y="' + (ly + 5).toFixed(1) + '" text-anchor="' + anchor + '" fill="#CDD0D5" font-size="14" font-family="inherit">' + SKILL_LEVELS[li2].label + '</text>';
    }

    svg.innerHTML = html + svg.innerHTML;
  }

  function renderSkillBars() {
    var bars = document.getElementById('skillBars');
    if (!bars) return;
    bars.innerHTML = SKILL_LEVELS.map(function (s) {
      return '<div class="skill-bar-item">' +
        '<div class="skill-bar-header">' +
        '<span class="skill-bar-label">' + s.label + '</span>' +
        '<span class="skill-bar-value">' + s.value + '%</span>' +
        '</div>' +
        '<div class="skill-bar-track"><div class="skill-bar-fill" style="width:' + s.value + '%"></div></div>' +
        '</div>';
    }).join('');
  }

  function renderTools() {
    var grid = document.getElementById('toolsGrid');
    grid.innerHTML = TOOLS.map(function (t) {
      return '<a href="' + t.url + '" target="_blank" rel="noopener" class="tool-card">' +
        '<div class="tool-icon">' + t.icon + '</div>' +
        '<span>' + t.name + '</span>' +
        '</a>';
    }).join('');
  }

  /* ===== LIGHTBOX ===== */

  var lightbox = document.getElementById('lightbox');
  var lightboxContent = document.getElementById('lightboxContent');
  var lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(work) {
    lightboxContent.innerHTML = '<img src="' + work.img + '" alt="' + work.title + '">' +
      '<div class="lightbox-info">' +
      '<h3>' + work.title + '</h3>' +
      '<div class="tags">' + work.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
      '<p>' + work.desc + '</p>' +
      '</div>';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(function () { lightboxContent.innerHTML = ''; }, 400);
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  /* ===== FILTER ===== */

  document.getElementById('filterBar').addEventListener('click', function (e) {
    var btn = e.target.closest('.filter-btn');
    if (!btn) return;
    var cat = btn.dataset.cat;
    var buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    renderWorks(cat);
  });

  /* ===== FORM ===== */

  var contactForm = document.getElementById('contactForm');
  var toast = document.getElementById('toast');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var contact = document.getElementById('contactField').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!name || !contact || !message) {
      showToast('请填写所有必填字段');
      return;
    }

    showToast('消息已发送，感谢联系！');
    contactForm.reset();
  });

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(function () { toast.classList.remove('show'); }, 3000);
  }

  /* ===== SCROLL REVEAL ===== */

  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        if (entry.target.classList.contains('stagger-children')) {
          entry.target.classList.add('in');
        }
      }
    });
  }, { threshold: 0.12 });

  function observeReveals() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      revealIO.observe(el);
    });
  }

  function observeNewReveals() {
    document.querySelectorAll('.works-grid .work-card').forEach(function (el) {
      el.classList.add('reveal');
      revealIO.observe(el);
    });
  }

  /* ===== COUNTERS ===== */

  var countIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var nums = entry.target.querySelectorAll('.stat-num');
        nums.forEach(function (num) {
          animateCounter(num);
        });
        countIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  function animateCounter(el) {
    var target = parseInt(el.dataset.target);
    var start = 0;
    var duration = 1500;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  var heroStats = document.querySelector('.hero-stats');
  if (heroStats) countIO.observe(heroStats);

  /* ===== NAVIGATION ===== */

  var nav = document.getElementById('nav');
  var navBurger = document.getElementById('navBurger');
  var navLinks = document.querySelector('.nav-links');

  // Scroll class
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile burger
  navBurger.addEventListener('click', function () {
    navBurger.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navBurger.classList.remove('is-open');
      navLinks.classList.remove('is-open');
    });
  });

  // Scroll spy for active nav link
  var sections = [];
  document.querySelectorAll('section[id]').forEach(function (s) {
    sections.push({ id: s.id, el: s });
  });

  var spyIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        document.querySelectorAll('.nav-links a').forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function (s) { spyIO.observe(s.el); });

  /* ===== BACK TO TOP ===== */

  var backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    backToTop.classList.toggle('visible', window.scrollY > 600);
  });

  /* ===== KEYBOARD ===== */

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  /* ===== MOUSE TRAIL ===== */

  var canvas = document.createElement('canvas');
  canvas.id = 'mouseTrail';
  var ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);

  var mx = -100, my = -100;
  var trail = [];
  var maxTrail = 30;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;
    trail.push({ x: mx, y: my, life: 1, size: 2 + Math.random() * 3 });
    if (trail.length > maxTrail) trail.shift();
  });

  function drawTrail() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < trail.length; i++) {
      var p = trail[i];
      p.life -= 0.03;
      if (p.life <= 0) { trail.splice(i, 1); i--; continue; }
      var alpha = p.life * 0.6;
      var r = p.size * p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139, 92, 246, ' + alpha + ')';
      ctx.fill();
    }
    // Main cursor glow
    if (trail.length > 0) {
      var grad = ctx.createRadialGradient(mx, my, 0, mx, my, 40);
      grad.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
      grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
      ctx.beginPath();
      ctx.arc(mx, my, 40, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }
    requestAnimationFrame(drawTrail);
  }
  drawTrail();

  /* ===== TICKER ===== */

  var tickerTrack = document.getElementById('tickerTrack');
  var tickerRAF = null;
  var tickerPos = 0;
  var tickerSpeed = 0.8;
  var tickerPaused = false;

  function initTicker() {
    if (!tickerTrack) return;
    var items = tickerTrack.children;
    var html = '';
    // Clone 4 copies
    for (var c = 0; c < 4; c++) {
      for (var i = 0; i < items.length; i++) {
        html += items[i].outerHTML;
      }
    }
    tickerTrack.innerHTML = html;
    tickerPos = 0;
    tickerTrack.style.transform = 'translateX(0)';

    // Hover pause
    tickerTrack.addEventListener('mouseenter', function () { tickerPaused = true; });
    tickerTrack.addEventListener('mouseleave', function () { tickerPaused = false; });

    runTicker();
  }

  function runTicker() {
    if (!tickerPaused) {
      tickerPos -= tickerSpeed;
      var first = tickerTrack.firstElementChild;
      if (first && tickerPos <= -first.offsetWidth) {
        tickerPos += first.offsetWidth;
        tickerTrack.appendChild(first);
      }
      tickerTrack.style.transform = 'translateX(' + tickerPos + 'px)';
    }
    tickerRAF = requestAnimationFrame(runTicker);
  }

  /* ===== INIT ===== */

  function init() {
    renderServices();
    renderFilterBar();
    renderWorks('all');
    renderTimeline();
    renderRadar();
    renderSkillBars();
    renderTools();
    observeReveals();
    initTicker();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();