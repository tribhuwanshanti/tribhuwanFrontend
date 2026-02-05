
fetch('https://app.stsss.edu.np/api/notices')
  .then(response => response.json())
  .then(data => {
    let headerNotice = document.querySelector('#noticeHeaderSliding')
    if (headerNotice && data.length > 0) {
      let length = data.length - 1
      headerNotice.innerHTML = data[length].description;
    }
  })
  .catch(error => console.error('Error:', error));

fetch('https://app.stsss.edu.np/api/notices')
  .then(response => response.json())
  .then(data => {
    let mainContainer = document.getElementById("mainContainer")
    if (!mainContainer) return;

    let length = data.length;
    let i = data.length - 3;

    for (i; length > i; length--) {
      let len = length - 1;
      if (len < 0) continue; // safety

      let noticeDiv = document.createElement('div')
      let title = document.createElement('h2')
      let message = document.createElement('p')
      let date = document.createElement('span')

      // Content
      title.innerHTML = String(data[len]['title'])
      let description = data[len]['description'] || "";

      message.textContent = description;
      if (data[len]['created_at']) {
        date.textContent = `Published On: ${data[len]['created_at'].split(" ")[0]}`;
      }

      // Styling - Restoring Original Deep Navy Theme
      // Original .notice { background-color: #0a1535; color: #fff; }
      noticeDiv.className = "bg-[#0A1535] text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative pb-16 h-full border border-white/10";
      title.className = "font-heading text-xl font-semibold border-b-2 border-white pb-2 mb-4";
      message.className = "text-white text-sm leading-relaxed mb-4 flex-grow whitespace-pre-line overflow-hidden line-clamp-4 font-sans";
      date.className = "absolute bottom-4 left-6 right-6 pt-2 border-t border-white/20 text-xs font-light tracking-wider";

      noticeDiv.appendChild(title)
      noticeDiv.appendChild(message)
      noticeDiv.appendChild(date)
      mainContainer.appendChild(noticeDiv)
    }
  })
  .catch(error => console.error('Error:', error));
