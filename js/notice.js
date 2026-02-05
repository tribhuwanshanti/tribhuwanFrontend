const mainContainer = document.getElementById("mainContainer");
const modal = document.getElementById("noticeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalContent = document.getElementById("modalContent");

async function loadNotices() {
  try {
    const response = await fetch('https://app.stsss.edu.np/api/notices');
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();

    // Clear loading state
    mainContainer.innerHTML = '';

    if (!data || data.length === 0) {
      mainContainer.innerHTML = `
                <div class="col-span-full py-20 text-center text-gray-400">
                    <i class="fa-solid fa-circle-info text-4xl mb-4"></i>
                    <p class="text-lg">No official notices found at the moment.</p>
                </div>
            `;
      return;
    }

    // Show newest first (assuming API returns oldest first)
    const notices = [...data].reverse();

    notices.forEach((item, index) => {
      const dateStr = item.created_at ? item.created_at.split(" ")[0] : 'N/A';
      const rawDescription = item.description || '';
      const descriptionWithBreaks = rawDescription.replace(/\n/g, '<br>').replace(/\\n/g, '<br>');
      const shortDesc = rawDescription.length > 150 ? rawDescription.substring(0, 150) + '...' : rawDescription;

      const noticeCard = document.createElement('div');
      noticeCard.className = 'bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group relative overflow-hidden h-full';
      noticeCard.setAttribute('data-aos', 'fade-up');
      noticeCard.setAttribute('data-aos-delay', (index % 3) * 100);

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
                    ${descriptionWithBreaks.length > 180 ? descriptionWithBreaks.substring(0, 180) + '...' : descriptionWithBreaks}
                </div>
                
                <div class="mt-auto">
                    <button onclick='openNotice(${JSON.stringify(item).replace(/'/g, "&apos;")})' class="inline-flex items-center gap-2 text-[#0A1535] font-bold text-sm group/btn hover:text-blue-600 transition-colors">
                        View Full Notice
                        <i class="fa-solid fa-arrow-right text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
                    </button>
                </div>

                <!-- Decorative elements -->
                <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50/50 rounded-full blur-2xl group-hover:bg-blue-100/50 transition-colors"></div>
            `;
      mainContainer.appendChild(noticeCard);
    });

  } catch (error) {
    console.error('Error fetching notices:', error);
    mainContainer.innerHTML = `
            <div class="col-span-full py-20 text-center">
                <div class="bg-red-50 text-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="fa-solid fa-triangle-exclamation text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Failed to load notices</h3>
                <p class="text-gray-500 mb-8">Connectivity issue or server maintenance.</p>
                <button onclick="loadNotices()" class="bg-[#0A1535] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg">
                    Try Again
                </button>
            </div>
        `;
  }
}

window.openNotice = (notice) => {
  modalTitle.innerText = notice.title;
  modalDate.innerText = `Published: ${notice.created_at ? notice.created_at.split(" ")[0] : 'N/A'}`;
  modalContent.innerHTML = (notice.description || '').replace(/\n/g, '<br>');

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  // Trigger animation
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('div').classList.remove('scale-95');
  }, 10);

  document.body.style.overflow = 'hidden';
};

window.closeNotice = () => {
  modal.classList.add('opacity-0');
  modal.querySelector('div').classList.add('scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }, 300);
};

// Close modal on background click
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeNotice();
});

loadNotices();

