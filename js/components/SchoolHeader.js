class SchoolHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        school-header { display: block; }
        html, body { overflow-x: hidden !important; width: 100%; position: relative; }
        .mobile-menu-open { overflow: hidden; }
      </style>
      <header class="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 bg-white shadow-sm border-b border-gray-100" id="main-header">
        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div class="flex justify-between items-center h-20">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center h-full py-2">
              <a href="/" class="h-full block">
                <img class="h-full w-auto max-w-[180px] md:max-w-none object-contain" src="/icons/nav/main-logo.png" alt="Shree Tribhuwan Shanti Secondary School">
              </a>
            </div>

            <!-- Desktop Menu -->
            <nav class="hidden lg:flex space-x-6 xl:space-x-8 items-center text-base xl:text-lg font-medium">
              <a href="/" class="text-[#0A1535] hover:font-bold hover:border-b-2 hover:border-[#0A1535] transition-all py-1">Home</a>
              
              <!-- About Dropdown -->
              <div class="relative group h-20 flex items-center">
                <button class="text-[#0A1535] hover:font-bold inline-flex items-center transition-all outline-none py-1">
                  <span>About</span>
                  <svg class="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div class="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl py-3 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left -translate-y-2 group-hover:translate-y-0 border border-gray-100 z-50">
                  <a href="/pages/about/overview/" class="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <p class="text-lg font-semibold text-[#0A1535]">Overview</p>
                    <p class="text-xs text-gray-500 mt-0.5">About the school</p>
                  </a>
                  <a href="/pages/about/adminstration/" class="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <p class="text-lg font-semibold text-[#0A1535]">Administration</p>
                    <p class="text-xs text-gray-500 mt-0.5">Message from administration</p>
                  </a>
                  <a href="/pages/about/notice/" class="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <p class="text-lg font-semibold text-[#0A1535]">Notices</p>
                    <p class="text-xs text-gray-500 mt-0.5">Recent official updates</p>
                  </a>
                   <a href="/pages/about/staffs/" class="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <p class="text-lg font-semibold text-[#0A1535]">Staffs</p>
                    <p class="text-xs text-gray-500 mt-0.5">Non teaching Staffs</p>
                  </a>
                  <a href="/pages/about/developers/" class="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <p class="text-lg font-semibold text-[#0A1535]">Developers</p>
                    <p class="text-xs text-gray-500 mt-0.5">Development Team</p>
                  </a>
                </div>
              </div>

              <a href="/pages/admission/" class="text-[#0A1535] hover:font-bold hover:border-b-2 hover:border-[#0A1535] transition-all py-1">Admission</a>

              <!-- Academics Dropdown -->
              <div class="relative group h-20 flex items-center">
                <button class="text-[#0A1535] hover:font-bold inline-flex items-center transition-all outline-none py-1">
                  <span>Academics</span>
                  <svg class="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div class="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-xl shadow-xl py-6 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 border border-gray-100 grid grid-cols-2 gap-4 z-50">
                  <div>
                    <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 border-b pb-1">Science & Tech</h3>
                    <a href="/pages/academics/science/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">+2 Science</p>
                      <p class="text-[10px] text-gray-500">XI/XII Science Program</p>
                    </a>
                    <a href="/pages/academics/computerscience/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">+2 Computer Science</p>
                      <p class="text-[10px] text-gray-500">XI/XII CS Program</p>
                    </a>
                  </div>
                  
                  <div>
                    <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 border-b pb-1">Management</h3>
                    <a href="/pages/academics/management/english/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">+2 Mgmt (English)</p>
                      <p class="text-[10px] text-gray-500">About XI/XII Management</p>
                    </a>
                    <a href="/pages/academics/management/nepali/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">+2 Mgmt (Nepali)</p>
                      <p class="text-[10px] text-gray-500">About XI/XII Management</p>
                    </a>
                     <a href="/pages/academics/hm/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">+2 Hotel Mgmt</p>
                      <p class="text-[10px] text-gray-500">About XI/XII HM</p>
                    </a>
                  </div>

                  <div>
                     <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 border-b pb-1">Education</h3>
                    <a href="/pages/academics/education/english/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">+2 Edu (English)</p>
                      <p class="text-[10px] text-gray-500">About XI/XII Education</p>
                    </a>
                    <a href="/pages/academics/education/nepali/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">+2 Edu (Nepali)</p>
                      <p class="text-[10px] text-gray-500">About XI/XII Education</p>
                    </a>
                  </div>
                  
                  <div>
                     <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 border-b pb-1">School Level</h3>
                    <a href="/pages/academics/secondary/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">Secondary (IX-X)</p>
                       <p class="text-[10px] text-gray-500">About Grade IX & X</p>
                    </a>
                    <a href="/pages/academics/basic/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">Basic (I-VIII)</p>
                      <p class="text-[10px] text-gray-500">From Grade I to VIII</p>
                    </a>
                     <a href="/pages/academics/pre-primary/" class="block px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <p class="text-base font-semibold text-[#0A1535]">Pre-Primary</p>
                       <p class="text-[10px] text-gray-500">From Nursery to UKG</p>
                    </a>
                  </div>
                </div>
              </div>

              <a href="/pages/gallery/" class="text-[#0A1535] hover:font-bold hover:border-b-2 hover:border-[#0A1535] transition-all py-1">Gallery</a>
              <a href="#contact" class="text-[#0A1535] hover:font-bold hover:border-b-2 hover:border-[#0A1535] transition-all py-1">Contact</a>
            </nav>

            <!-- Actions -->
            <div class="hidden lg:flex items-center space-x-4">
               <a href="https://www.facebook.com/tribhuwanshantischool" target="_blank" class="text-gray-400 hover:text-blue-600 transition-colors">
                <i class="fa-brands fa-facebook text-xl"></i>
              </a>
               <a href="mailto:info@stsss.edu.np" class="text-gray-400 hover:text-red-500 transition-colors">
                <i class="fa-solid fa-envelope text-xl"></i>
              </a>
               <a href="tel:'061-504136'" class="text-gray-400 hover:text-green-500 transition-colors">
                <i class="fa-solid fa-phone text-xl"></i>
              </a>
              <a href="https://app.stsss.edu.np" class="bg-[#0A1535] hover:bg-blue-900 text-white px-6 py-2 rounded-md font-medium transition-all shadow-lg text-sm">
                Login
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="lg:hidden flex items-center">
              <button id="mobile-menu-btn" class="text-[#0A1535] hover:text-blue-800 focus:outline-none p-2" aria-label="Toggle Menu">
                <i class="fa-solid fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="fixed inset-0 bg-[#0A1535] text-white z-[60] transform translate-x-full transition-transform duration-300 lg:hidden overflow-y-auto">
          <div class="p-6">
            <div class="flex justify-between items-center mb-8">
               <span class="text-xl font-bold">Menu</span>
              <button id="close-mobile-menu" class="text-white hover:text-gray-200 p-2" aria-label="Close Menu">
                <i class="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>
            
            <nav class="space-y-6">
              <a href="/" class="block text-xl font-medium text-white border-b border-white/10 pb-2">Home</a>
              
              <div class="space-y-3">
                <p class="text-sm font-bold text-gray-400 uppercase tracking-wider">About</p>
                <div class="grid grid-cols-1 gap-3 pl-4 border-l border-white/10">
                  <a href="/pages/about/overview/" class="block text-white hover:text-blue-200 transition-all">Overview</a>
                  <a href="/pages/about/adminstration/" class="block text-white hover:text-blue-200 transition-all">Administration</a>
                  <a href="/pages/about/notice/" class="block text-white hover:text-blue-200 transition-all">Notices</a>
                  <a href="/pages/about/staffs/" class="block text-white hover:text-blue-200 transition-all">Staffs</a>
                  <a href="/pages/about/developers/" class="block text-white hover:text-blue-200 transition-all">Developers</a>
                </div>
              </div>

               <div class="space-y-3">
                <p class="text-sm font-bold text-gray-400 uppercase tracking-wider">Academics</p>
                <div class="grid grid-cols-1 gap-3 pl-4 border-l border-white/10">
                  <a href="/pages/academics/science/" class="block text-white hover:text-blue-200 transition-all">+2 Science</a>
                  <a href="/pages/academics/computerscience/" class="block text-white hover:text-blue-200 transition-all">+2 Computer Science</a>
                   <a href="/pages/academics/management/english/" class="block text-white hover:text-blue-200 transition-all">+2 Mgmt (Eng)</a>
                    <a href="/pages/academics/management/nepali/" class="block text-white hover:text-blue-200 transition-all">+2 Mgmt (Nep)</a>
                     <a href="/pages/academics/hm/" class="block text-white hover:text-blue-200 transition-all">+2 Hotel Mgmt</a>
                  <a href="/pages/academics/education/english/" class="block text-white hover:text-blue-200 transition-all">+2 Edu (Eng)</a>
                   <a href="/pages/academics/education/nepali/" class="block text-white hover:text-blue-200 transition-all">+2 Edu (Nep)</a>
                  <a href="/pages/academics/secondary/" class="block text-white hover:text-blue-200 transition-all">Secondary Level</a>
                  <a href="/pages/academics/basic/" class="block text-white hover:text-blue-200 transition-all">Basic Level</a>
                   <a href="/pages/academics/pre-primary/" class="block text-white hover:text-blue-200 transition-all">Pre-Primary</a>
                </div>
              </div>

              <div class="space-y-4 pt-4">
                <a href="/pages/admission/" class="block text-xl font-medium text-white">Admission</a>
                <a href="/pages/gallery/" class="block text-xl font-medium text-white">Gallery</a>
                <a href="#contact" class="block text-xl font-medium text-white">Contact</a>
              </div>
              
              <a href="https://app.stsss.edu.np" class="block w-full text-center bg-white text-[#0A1535] py-3 rounded-lg font-medium mt-8 shadow-lg">
                Login
              </a>
            </nav>
          </div>
        </div>
      </header>
    `;

    // Mobile Menu Logic
    const btn = this.querySelector('#mobile-menu-btn');
    const closeBtn = this.querySelector('#close-mobile-menu');
    const menu = this.querySelector('#mobile-menu');

    const toggleMenu = () => {
      menu.classList.toggle('translate-x-full');
      if (menu.classList.contains('translate-x-full')) {
        document.body.classList.remove('mobile-menu-open');
      } else {
        document.body.classList.add('mobile-menu-open');
      }
    };

    if (btn) btn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    const links = this.querySelectorAll('#mobile-menu a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('translate-x-full');
        document.body.classList.remove('mobile-menu-open');
      });
    });
  }
}

customElements.define('school-header', SchoolHeader);
