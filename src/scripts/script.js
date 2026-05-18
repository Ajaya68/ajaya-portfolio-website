// Ajaya Mahanty Portfolio — interactions
(function () {
  'use strict';

  // Data
  var tools = [
    { name: 'Core Java', role: 'Language', color: '#F89820' },
    { name: 'Oracle SQL, PL/SQL', role: 'Database', color: '#F80000' },
    { name: 'HTML', role: 'FrontEnd Structure', color: '#6DB33F' },
    { name: 'CSS', role: 'FrontEnd Design', color: '#F7DF1E' },
    { name: 'Bootstrap', role: 'CSS Framework', color: '#61DAFB' },
    { name: 'JavaScript', role: 'Interactions', color: '#2496ED' },
    // { name: 'Jenkins', role: 'CI / CD', color: '#D33833' },
    // { name: 'AWS', role: 'Cloud Basics', color: '#FF9900' }
  ];

  var projects = [
    {
      title: 'Employee Payroll System',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      tags: [ 'Oracle SQL', 'PL/SQL'],
      description: 'Designed and developed an enterprise-level payroll database system using Oracle Corporation SQL and PL/SQL. Created normalized database schema with 10+ relational tables for employee, department, attendance, leave, tax, bonus, and payroll management.',
      link: 'https://github.com/Ajaya68/employee-payroll-system-oracle.git'
    },
    {
      title: 'Banking Transaction Reporting System',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tags: [ 'Oracle SQL', 'PL/SQL'],
      description: 'Designed and implemented a normalized banking database schema for customers, accounts, transactions, branches, and loans using Oracle Corporation SQL. Developed stored procedures for deposit processing, account updates, and transaction report generation.',
      link: 'https://github.com/Ajaya68/banking-transaction-reporting-system-oracle.git'
    },
    {
      title: 'Diabetes Prediction Web App',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      tags: ['Python', 'scikit-learn', 'pandas', 'Streamlit'],
      description: 'Built and deployed an ML classification model to predict diabetes risk based on patient health parameters. Applied data preprocessing, feature scaling and model evaluation.',
      link: 'https://diabetes-prediction-rc9us66qzdoqhqt7gerdfx.streamlit.app/'
    },
    // {
    //   title: 'React Task Dashboard',
    //   image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
    //   tags: ['ReactJS', 'Hooks', 'Bootstrap', 'Axios'],
    //   description: 'Responsive task management dashboard built with React Hooks, React Router and a clean component-driven UI.',
    //   link: '#'
    // },
    // {
    //   title: 'Student Management Portal',
    //   image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    //   tags: ['Java', 'Spring MVC', 'Hibernate', 'Bootstrap'],
    //   description: 'Classic Spring MVC CRUD portal for student records with Hibernate ORM, form validation and Bootstrap 5 responsive UI.',
    //   link: '#'
    // },
    {
      title: 'Portfolio Website',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      tags: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      description: 'Personal developer portfolio with smooth scroll navigation, modern dark UI and animated micro-interactions.',
      link: '#'
    }
  ];

  var certificates = [
    {
      title: 'Full Stack Java Developer Certification',
      issuer: 'NARESH IT',
      date: '2026 \u2013 2027',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80',
      link: '#'
    },
    {
      title: 'SQL Intermediate',
      issuer: 'HackerRank',
      // date: '2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      link: 'https://www.hackerrank.com'
    },
    {
      title: 'SQL Basic',
      issuer: 'HackerRank',
      // date: '2024',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
      link: 'https://www.hackerrank.com'
    },
    {
      title: 'React',
      issuer: 'HackerRank',
      date: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      link: '#'
    }
  ];

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (k === 'class') e.className = attrs[k];
        else if (k === 'style') e.setAttribute('style', attrs[k]);
        else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), attrs[k]);
        else e.setAttribute(k, attrs[k]);
      }
    }
    if (children) {
      if (!Array.isArray(children)) children = [children];
      children.forEach(function (c) {
        if (c == null) return;
        if (typeof c === 'string') e.appendChild(document.createTextNode(c));
        else e.appendChild(c);
      });
    }
    return e;
  }

  function hexWithAlpha(hex, alpha) {
    return hex + alpha;
  }

  function renderTools() {
    var grid = document.getElementById('toolsGrid');
    if (!grid) return;
    tools.forEach(function (t) {
      var item = el('div', { class: 'tool' }, [
        el('div', { class: 'ico', style: 'background:' + hexWithAlpha(t.color, '1a') + ';color:' + t.color + ';' }, t.name.slice(0, 2).toUpperCase()),
        el('div', null, [
          el('div', { class: 'name' }, t.name),
          el('div', { class: 'role' }, t.role)
        ])
      ]);
      grid.appendChild(item);
    });
  }

  function renderProjects() {
    var grid = document.getElementById('projectsGrid');
    if (!grid) return;
    projects.forEach(function (p) {
      var col = el('div', { class: 'col-md-6 col-lg-4' });
      var card = el('article', { class: 'card-item' });
      card.appendChild(el('div', { class: 'card-media' }, el('img', { src: p.image, alt: p.title, loading: 'lazy' })));
      var body = el('div', { class: 'card-body-2' });
      var head = el('div', { class: 'card-head' }, [
        el('h3', { class: 'card-title' }, p.title),
        (function () {
          var a = el('a', { class: 'icon-btn', href: p.link, target: '_blank', rel: 'noopener', 'aria-label': 'Open ' + p.title });
          a.innerHTML = '<i class="bi bi-arrow-up-right"></i>';
          return a;
        })()
      ]);
      body.appendChild(head);
      body.appendChild(el('p', { class: 'card-desc' }, p.description));
      var tagsWrap = el('div', { class: 'card-tags' });
      p.tags.forEach(function (t) { tagsWrap.appendChild(el('span', { class: 'chip' }, t)); });
      body.appendChild(tagsWrap);
      card.appendChild(body);
      col.appendChild(card);
      grid.appendChild(col);
    });
  }

  function renderCerts() {
    var grid = document.getElementById('certsGrid');
    if (!grid) return;
    certificates.forEach(function (c) {
      var col = el('div', { class: 'col-md-6 col-lg-4' });
      var card = el('div', { class: 'card-item' });
      card.appendChild(el('div', { class: 'card-media' }, el('img', { src: c.image, alt: c.title, loading: 'lazy' })));
      var body = el('div', { class: 'card-body-2' });
      var head = el('div', { class: 'card-head' }, [
        el('div', null, [
          el('h3', { class: 'card-title' }, c.title),
          el('div', { class: 'card-meta' }, c.issuer + ' | ' + c.date)
        ]),
        (function () {
          var a = el('a', { class: 'icon-btn', href: c.link, target: '_blank', rel: 'noopener', 'aria-label': 'Open ' + c.title });
          a.innerHTML = '<i class="bi bi-arrow-up-right"></i>';
          return a;
        })()
      ]);
      body.appendChild(head);
      card.appendChild(body);
      col.appendChild(card);
      grid.appendChild(col);
    });
  }

  function setupNav() {
    var nav = document.getElementById('nav');
    var toTop = document.getElementById('toTop');
    var links = document.querySelectorAll('[data-link]');
    var sections = Array.prototype.map.call(links, function (a) {
      var id = a.getAttribute('href').slice(1);
      return { id: id, el: document.getElementById(id), link: a };
    }).filter(function (s) { return s.el; });

    function onScroll() {
      var y = window.scrollY;
      if (nav) nav.classList.toggle('scrolled', y > 20);
      if (toTop) toTop.classList.toggle('show', y > 400);

      var currentId = sections[0] ? sections[0].id : null;
      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].el.getBoundingClientRect();
        if (rect.top <= 120) currentId = sections[i].id;
      }
      links.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + currentId);
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    links.forEach(function (a) {
      a.addEventListener('click', function () {
        links.forEach(function (l) { l.classList.remove('active'); });
        a.classList.add('active');
      });
    });
  }

  function setupContact() {
    var form = document.getElementById('contactForm');
    var toast = document.getElementById('formToast');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();

      if (!name || !email || !message) {
        toast.textContent = 'Please fill in all fields before submitting.';
        toast.style.color = '#fca5a5';
        return;
      }
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        toast.textContent = 'Please enter a valid email address.';
        toast.style.color = '#fca5a5';
        return;
      }
      try {
        var saved = JSON.parse(localStorage.getItem('contact_messages') || '[]');
        saved.push({ name: name, email: email, message: message, at: new Date().toISOString() });
        localStorage.setItem('contact_messages', JSON.stringify(saved));
      } catch (err) { /* ignore */ }

      toast.style.color = '';
      toast.textContent = 'Thanks, ' + name.split(' ')[0] + '! Your message has been received.';
      form.reset();
      setTimeout(function () { toast.textContent = ''; }, 5000);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderTools();
    renderProjects();
    renderCerts();
    setupNav();
    setupContact();
  });
})();
