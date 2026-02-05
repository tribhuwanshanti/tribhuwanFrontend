const mainContainer = document.getElementById("mainContainer");
const modal = document.getElementById("noticeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalContent = document.getElementById("modalContent");

// 1. Sliding Header Notice (Marquee)
fetch('https://app.stsss.edu.np/api/notices')
  .then(response => response.json())
  .then(data => {
    const headerNotice = document.querySelector('#noticeHeaderSliding');
    if (headerNotice && data.length > 0) {
      // Show the latest notice description in the marquee
      headerNotice.innerHTML = data[data.length - 1].title + ": " + data[data.length - 1].description;
    }
  })
  .catch(error => console.error('Error fetching marquee notice:', error));

// 2. Main Page Notice Cards
async function loadHomeNotices() {
  if (!mainContainer) return;

  try {
    const response = await fetch('https://app.stsss.edu.np/api/notices');
    const data = await response.json();

    mainContainer.innerHTML = '';

    if (!data || data.length === 0) {
      mainContainer.innerHTML = '<p class="col-span-full text-center text-gray-400 py-10">No recent notices found.</p>';
      return;
    }

    // Show only latest 3 notices
    const latestNotices = [...data].reverse().slice(0, 3);

    latestNotices.forEach((item, index) => {
      const dateStr = item.created_at ? item.created_at.split(" ")[0] : 'N/A';
      const rawDescription = item.description || '';
      const descriptionWithBreaks = rawDescription.replace(/\n/g, '<br>').replace(/\\n/g, '<br>');

      const noticeCard = document.createElement('div');
      noticeCard.className = 'bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group relative overflow-hidden h-full';
      noticeCard.setAttribute('data-aos', 'fade-up');
      noticeCard.setAttribute('data-aos-delay', index * 100);

      noticeCard.innerHTML = `
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                        <i class="fa-solid fa-bullhorn text-sm"></i>
                    </div>
                    <span class="text-gray-400 text-xs font-medium flex items-center gap-1.5 uppercase tracking-widest">
                        <i class="fa-regular fa-calendar"></i>
                        ${dateStr}
                    </span>
                </div>
                
                <h2 class="text-xl font-bold text-[#0A1535] mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    ${item.title}
                </h2>
                
                <div class="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    ${descriptionWithBreaks.length > 150 ? descriptionWithBreaks.substring(0, 150) + '...' : descriptionWithBreaks}
                </div>
                
                <div class="mt-auto">
                    <button onclick='openNotice(${JSON.stringify(item).replace(/'/g, "&apos;")})' class="inline-flex items-center gap-2 text-[#0A1535] font-bold text-sm group/btn hover:text-blue-600 transition-colors">
                        Read Full Story
                        <i class="fa-solid fa-arrow-right text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
                    </button>
                </div>

                <!-- Decorative elements -->
                <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50/50 rounded-full blur-2xl group-hover:bg-blue-100/50 transition-colors"></div>
            `;
      mainContainer.appendChild(noticeCard);
    });

  } catch (error) {
    console.error('Error loading notices for home page:', error);
    mainContainer.innerHTML = '<p class="col-span-full text-center text-red-400 py-10">Failed to load latest updates.</p>';
  }
}

// Modal Logic
window.openNotice = (notice) => {
  if (!modal) return;
  modalTitle.innerText = notice.title;
  modalDate.innerText = `Published: ${notice.created_at ? notice.created_at.split(" ")[0] : 'N/A'}`;
  modalContent.innerHTML = (notice.description || '').replace(/\n/g, '<br>').replace(/\\n/g, '<br>');

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('div').classList.remove('scale-95');
  }, 10);

  document.body.style.overflow = 'hidden';
};

window.closeNotice = () => {
  if (!modal) return;
  modal.classList.add('opacity-0');
  modal.querySelector('div').classList.add('scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }, 300);
};

modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeNotice();
});

loadHomeNotices();

