(function () {
  'use strict';

  /* ===== DATA ===== */

  const SERVICES = [
    { icon: '🎬', title: 'AI 短剧生成', desc: '从剧本到成片，AI 驱动全流程短剧内容创作' },
    { icon: '🖼️', title: 'AI 图片生成', desc: '高质量 AI 图像生成，覆盖多种风格与场景' },
    { icon: '📊', title: 'AI 信息流', desc: 'AI 驱动的信息可视化与内容流设计' },
    { icon: '✂️', title: '视频剪辑', desc: '专业级视频后期剪辑与特效制作' },
    { icon: '🧩', title: 'Skill 创建', desc: '自定义 AI Skill 开发，提升工作流效率' },
    { icon: '🔌', title: 'API 调用', desc: '多平台 AI 工具 API 集成与自动化调用' }
  ];

  const WORKS = [
    { id: 'w1', cat: 'ai短剧', title: '《仙途》', desc: '古风仙侠 AI 短剧，讲述修仙少女的成长之路。采用 AI 全流程生成，从角色设计到场景搭建再到成片输出。', tags: ['AI 短剧', '古风', '仙侠'], img: 'assets/work-xiantu.jpg' },
    { id: 'w2', cat: 'ai图片', title: '梦境少女', desc: '梦幻风格 AI 人像生成系列，探索 AI 在艺术人像领域的无限可能。', tags: ['AI 图片', '人像', '梦幻'], img: 'assets/work-dream.jpg' },
    { id: 'w3', cat: 'ai图片', title: '深层补水 焕活新生', desc: '护肤品牌 AI 视觉广告，将产品特性与科技美学完美融合。', tags: ['AI 图片', '商业', '护肤'], img: 'assets/work-skincare.jpg' },
    { id: 'w4', cat: '视频剪辑', title: '未来出行·概念片', desc: '赛博朋克风格未来出行概念视频，展现 AI 视觉在科幻题材中的表现力。', tags: ['视频剪辑', '科幻', '概念'], img: 'assets/work-car.jpg' },
    { id: 'w5', cat: 'ai信息流', title: 'AI 信息流可视化', desc: '基于 AI 的数据可视化信息流设计，将复杂数据转化为直观视觉语言。', tags: ['AI 信息流', '数据', '可视化'], img: 'assets/work-infoflow.jpg' },
    { id: 'w6', cat: 'api调用', title: 'API 智能工作流', desc: '多平台 AI 工具 API 集成方案，实现跨平台自动化创作流程。', tags: ['API 调用', '自动化', '集成'], img: 'assets/work-api.jpg' }
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
    { key: 'ai短剧', label: 'AI 短剧' },
    { key: 'ai图片', label: 'AI 图片' },
    { key: 'ai信息流', label: 'AI 信息流' },
    { key: '视频剪辑', label: '视频剪辑' },
    { key: 'api调用', label: 'API 调用' }
  ];

  /* ===== RENDER ===== */

  function renderServices() {
    var grid = document.getElementById('servicesGrid');
    grid.innerHTML = SERVICES.map(function (s) {
      return '<div class="service-card">' +
        '<div class="service-icon">' + s.icon + '</div>' +
        '<h3>' + s.title + '</h3>' +
        '<p>' + s.desc + '</p>' +
        '</div>';
    }).join('');
    grid.classList.add('stagger-children');
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
        if (work) openLightbox(work);
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
    var cx = 200, cy = 200, r = 120;
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
      html += '<text x="' + lx.toFixed(1) + '" y="' + (ly + 5).toFixed(1) + '" text-anchor="' + anchor + '" fill="#CDD0D5" font-size="13" font-family="inherit">' + SKILL_LEVELS[li2].label + '</text>';
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