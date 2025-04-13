const container = document.getElementById('cardContainer');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

container.addEventListener('click', (e) => {
    console.log("🟢 Container clicked");
  
    const burst = document.createElement('div');
    burst.className = "absolute w-3 h-3 bg-yellow-400 rounded-full pointer-events-none animate-ping";
    burst.style.left = `${e.clientX}px`;
    burst.style.top = `${e.clientY}px`;
    burst.style.transform = "translate(-50%, -50%)";
    burst.style.zIndex = 100;
  
    document.body.appendChild(burst);
  
    setTimeout(() => {
      burst.remove();
    }, 600);
  });
  

const createCard = (index) => {
  const card = document.createElement('div');
  card.className = "bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105 cursor-pointer";
  card.setAttribute('data-index', index);
  const imageUrl = `https://picsum.photos/300/200?random=${index}`;

  card.innerHTML = `
    <img src="${imageUrl}" alt="Random Image ${index}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-2">Card ${index + 1}</h2>
      <p class="text-sm text-gray-300">Click to view more about this card.</p>
    </div>
  `;

  // Click event to show modal
  card.addEventListener('click', (e) => {
    console.log(`🔵 Card ${index + 1} clicked`);

    // Set modal content
    modalImg.src = `https://picsum.photos/500/300?random=${index}`;
    modalTitle.textContent = `Card ${index + 1}`;
    modalDesc.textContent = "This is a larger preview with a better description. Event bubbling is demonstrated here.";

    // Show modal
    modal.classList.remove('hidden');
  });

  return card;
};

// Generate 20 cards dynamically
for (let i = 0; i < 20; i++) {
  const card = createCard(i);
  container.appendChild(card);
}

// Close modal logic
closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
