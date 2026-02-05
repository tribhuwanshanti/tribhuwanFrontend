class SchoolFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
    <section id="contact" class="bg-[#0A1535] py-20 relative">
         <div class="container mx-auto px-6 md:px-12 flex flex-wrap gap-8">
            <!-- Map -->
            <div class="lg:w-[60%] md:w-full w-full bg-gray-300 rounded-2xl overflow-hidden relative min-h-[500px] shadow-2xl">
               <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.2796193516845!2d84.08136478970698!3d28.145748119391367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995bd1db2c1fb77%3A0xe1c361da244902aa!2sShree%20Tribhuwan%20Shanti%20Model%20Secondary%20School!5e0!3m2!1sen!2snp!4v1717952865868!5m2!1sen!2snp" style="filter: grayscale(1) contrast(1.2) opacity(0.7);"></iframe>
               
               <!-- Info Overlay -->
               <div class="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-2xl p-6 z-10">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <h2 class="title-font font-bold text-[#0A1535] tracking-widest text-xs uppercase mb-2 flex items-center">
                           <i class="fa-solid fa-location-dot mr-2 text-red-600"></i> Location
                        </h2>
                        <p class="text-sm text-gray-700 font-medium">Pokhara-30, Khudi, Dhungepatan, Kaski</p>
                     </div>
                     <div>
                        <h2 class="title-font font-bold text-[#0A1535] tracking-widest text-xs uppercase mb-2 flex items-center">
                           <i class="fa-solid fa-envelope mr-2 text-blue-600"></i> Email
                        </h2>
                        <a href="mailto:info@stsss.edu.np" class="text-blue-600 text-sm font-semibold hover:underline">info@stsss.edu.np</a>
                        
                        <h2 class="title-font font-bold text-[#0A1535] tracking-widest text-xs uppercase mt-4 mb-2 flex items-center">
                           <i class="fa-solid fa-phone mr-2 text-green-600"></i> Phone
                        </h2>
                        <p class="text-sm text-gray-700 font-medium">061-504136</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <!-- Contact Form -->
            <div class="lg:flex-1 md:w-full w-full flex flex-col">
               <h2 class="text-white text-3xl md:text-4xl mb-4 font-bold">Get In Touch</h2>
               <p class="leading-relaxed mb-8 text-gray-300">Have any queries? Send us a message and we'll get back to you.</p>
               
               <form id="form" class="space-y-5">
                   <input type="hidden" name="access_key" value="90a0e8bd-0dc9-41ab-9b4d-41e00741d312" />
                  <div>
                     <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                     <input type="text" id="name" name="name" required class="w-full bg-white/10 rounded-lg border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 text-base outline-none text-white py-3 px-4 transition-all duration-200 placeholder-gray-400" placeholder="Your Name">
                  </div>
                  <div>
                     <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                     <input type="email" id="email" name="email" required class="w-full bg-white/10 rounded-lg border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 text-base outline-none text-white py-3 px-4 transition-all duration-200 placeholder-gray-400" placeholder="your@email.com">
                  </div>
                  <div>
                     <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                     <textarea id="message" name="message" required rows="5" class="w-full bg-white/10 rounded-lg border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 text-base outline-none text-white py-3 px-4 resize-none transition-all duration-200 placeholder-gray-400" placeholder="Your message here..."></textarea>
                  </div>
                  <button type="submit" class="w-full bg-white text-[#0A1535] py-3 px-8 rounded-lg text-lg font-bold shadow-lg hover:bg-blue-50 hover:scale-[1.02] transition-all duration-200">
                     Send Message <i class="fa-solid fa-paper-plane ml-2"></i>
                  </button>
               </form>
            </div>
         </div>
      </section>
      <footer>
        <!-- Main Footer Section: Deep Navy (#0A1535) -->
        <div class="bg-[#0A1535] text-white pt-16 pb-8 font-light">
          <div class="max-w-8xl mx-auto px-6 md:px-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              <!-- Brand -->
              <div>
                <img src="/icons/nav/fav.png" alt="Logo" class="h-16 mb-6 opacity-90">
                <p class="text-blue-100 text-sm leading-relaxed mb-6">
                  Shree Tribhuwan Shanti Secondary School emphasizes humanity, cultural, moral, and spiritual values alongside academic excellence since 1969.
                </p>
                <div class="flex space-x-4">
                  <a href="https://www.facebook.com/tribhuwanshantischool" target="_blank" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="mailto:info@stsss.edu.np" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-all">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>

              <!-- Quick Links -->
              <div>
                <h3 class="text-lg font-semibold mb-6 text-white border-b border-white/20 pb-2 inline-block">Quick Links</h3>
                <ul class="space-y-3 text-sm text-blue-100">
                  <li><a href="/" class="hover:text-white hover:pl-2 transition-all duration-300">Home</a></li>
                  <li><a href="/pages/about/overview/" class="hover:text-white hover:pl-2 transition-all duration-300">About Us</a></li>
                  <li><a href="/pages/about/adminstration/" class="hover:text-white hover:pl-2 transition-all duration-300">Administration</a></li>
                   <li><a href="/pages/about/staffs/" class="hover:text-white hover:pl-2 transition-all duration-300">Staffs & Management</a></li>
                  <li><a href="/pages/admission/" class="hover:text-white hover:pl-2 transition-all duration-300">Admissions</a></li>
                  <li><a href="/pages/gallery/" class="hover:text-white hover:pl-2 transition-all duration-300">Gallery</a></li>
                </ul>
              </div>

              <!-- Academics -->
              <div>
                <h3 class="text-lg font-semibold mb-6 text-white border-b border-white/20 pb-2 inline-block">Academics</h3>
                <ul class="space-y-3 text-sm text-blue-100">
                   <li><a href="/pages/academics/science/" class="hover:text-white hover:pl-2 transition-all duration-300">+2 Science</a></li>
                   <li><a href="/pages/academics/computerscience/" class="hover:text-white hover:pl-2 transition-all duration-300">+2 Computer Science</a></li>
                   <li><a href="/pages/academics/management/english/" class="hover:text-white hover:pl-2 transition-all duration-300">+2 Management</a></li>
                   <li><a href="/pages/academics/hm/" class="hover:text-white hover:pl-2 transition-all duration-300">+2 Hotel Management</a></li>
                   <li><a href="/pages/academics/education/english/" class="hover:text-white hover:pl-2 transition-all duration-300">+2 Education</a></li>
                   <li><a href="/pages/academics/secondary/" class="hover:text-white hover:pl-2 transition-all duration-300">Secondary Level (IX-X)</a></li>
                   <li><a href="/pages/academics/basic/" class="hover:text-white hover:pl-2 transition-all duration-300">Basic Level (I-VIII)</a></li>
                </ul>
              </div>

              <!-- Contact -->
              <div>
                <h3 class="text-lg font-semibold mb-6 text-white border-b border-white/20 pb-2 inline-block">Contact Us</h3>
                <ul class="space-y-4 text-sm text-blue-100">
                  <li class="flex items-start">
                    <i class="fa-solid fa-location-dot mt-1 mr-3 text-white"></i>
                    <span>Pokhara-30, Khudi, Dhungepatan,<br>Kaski, Nepal</span>
                  </li>
                   <li class="flex items-center">
                    <i class="fa-solid fa-phone mr-3 text-white"></i>
                    <span>061-504136</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-envelope mr-3 text-white"></i>
                    <span>info@stsss.edu.np</span>
                  </li>
                  <li class="mt-4 pt-4 border-t border-white/10">
                     <a href="https://app.stsss.edu.np" class="text-white hover:text-blue-200 transition-colors font-semibold">Login Portal &rarr;</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        
        <!-- Bottom Copyright Section: White (#FFFFFF) with Navy Text -->
        <div class="bg-white py-4 text-[#0A1535] border-t border-gray-100">
          <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs font-medium">
            <p>&copy; ${year} NoteX Studios. All Rights Reserved.</p>
            <p class="mt-2 md:mt-0 text-center md:text-right">
              Developed By: <a href="https://notexstudio.cloud" class="text-[#0A1535] hover:underline font-bold">Safal Chhetri, Bikal Lamichhane,<br class="md:hidden"> Bibek Baral & Suyog Adhikari</a>
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}

// Ensure DOM is ready before registering
if (!customElements.get('school-footer')) {
  customElements.define('school-footer', SchoolFooter);
}
