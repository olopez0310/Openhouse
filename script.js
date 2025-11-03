// Simple listing storage and admin UI (client-side only)
const LS_KEY = 'openhouse_listing_v1';

function defaultListing(){
  return {
    address: '123 Main St, City, ST',
    price: '$499,000',
    description: 'Beautiful 3 bed / 2 bath home close to schools and parks.',
    features: ['3 bed', '2 bath', '1,800 sqft', 'Large yard', 'Nearby transit'],
    formspree: ''
  };
}

function getListing(){
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || defaultListing(); }
  catch(e){ return defaultListing(); }
}
function saveListing(obj){
  localStorage.setItem(LS_KEY, JSON.stringify(obj));
  renderListing();
}

function renderListing(){
  const l = getListing();
  document.getElementById('prop-address').textContent = l.address;
  document.getElementById('prop-price').textContent = l.price;
  document.getElementById('prop-desc').textContent = l.description;
  const ul = document.getElementById('prop-features');
  ul.innerHTML = '';
  (l.features || []).forEach(f => { const li = document.createElement('li'); li.textContent = f; ul.appendChild(li); });

  // Update form action if Formspree ID present
  const form = document.getElementById('interestForm');
  if (l.formspree) {
    form.action = 'https://formspree.io/f/' + l.formspree;
  }
}

renderListing();

// Admin UI
const adminBtn = document.getElementById('adminBtn');
const modal = document.getElementById('adminModal');
const closeBtn = document.getElementById('closeAdmin');
const pwLogin = document.getElementById('pwLogin');
const pwInput = document.getElementById('pwInput');
const adminForm = document.getElementById('adminForm');
const saveBtn = document.getElementById('saveListing');
const resetBtn = document.getElementById('resetListing');

adminBtn.onclick = () => { modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false'); };
closeBtn.onclick = () => { modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); adminForm.classList.add('hidden'); };

// Very simple password gating (client-side only). Change to a stronger approach for public editing.
pwLogin.onclick = () => {
  if (pwInput.value === 'openhouse2025') {
    adminForm.classList.remove('hidden');
    const l = getListing();
    document.getElementById('inAddress').value = l.address || '';
    document.getElementById('inPrice').value = l.price || '';
    document.getElementById('inDesc').value = l.description || '';
    document.getElementById('inFeatures').value = (l.features || []).join(', ');
    document.getElementById('inFormId').value = l.formspree || '';
  } else {
    alert('Incorrect password.');
  }
};

saveBtn.onclick = () => {
  const l = {
    address: document.getElementById('inAddress').value.trim(),
    price: document.getElementById('inPrice').value.trim(),
    description: document.getElementById('inDesc').value.trim(),
    features: document.getElementById('inFeatures').value.split(',').map(s=>s.trim()).filter(Boolean),
    formspree: document.getElementById('inFormId').value.trim()
  };
  saveListing(l);
  alert('Listing saved locally in your browser (localStorage). To receive form emails, add your Formspree ID in admin and redeploy.');
};

resetBtn.onclick = () => {
  if (confirm('Reset to default listing?')) {
    saveListing(defaultListing());
  }
};
