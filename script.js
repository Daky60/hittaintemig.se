const form = document.getElementById('contact-form');
const preview = document.getElementById('preview');
const emailInput = form.querySelector('#email');

function updatePreview() {
    const name = form.querySelector('#name').value;
    const address = form.querySelector('#address').value;
    const phone = form.querySelector('#phone').value;
    preview.value = generatePreview(name, address, phone);
}

// Kör updatePreview när något i formuläret ändras
form.addEventListener('input', updatePreview);

// Kör updatePreview en gång direkt när sidan laddas
document.addEventListener('DOMContentLoaded', () => {
    updatePreview();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const subject = encodeURIComponent('Radera mina personuppgifter');
    const body = encodeURIComponent(preview.value);
    const bcc = encodeURIComponent('support@180.se,support@birthday.se,info@merinfo.se,info@merinfo.se,info@upplysning.se,kundservice@ratsit.se,hej@nusvar.se,support@krimfup.se,redaktion@lexbase.se,info@biluppgifter.se');

    const mailtoLink = `mailto:${email}?subject=${subject}&bcc=${bcc}&body=${body}`;
    window.location.href = mailtoLink;
});

const checkboxes = document.querySelectorAll('.task-checkbox');
const progressText = document.getElementById('progress');

function updateProgress() {
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
    progressText.textContent = `Fler steg du kan ta: (${checked}/${total})`;
}

checkboxes.forEach(checkbox => {
    const id = checkbox.id;
    const saved = localStorage.getItem(`checkbox-${id}`);

    if (saved === 'true') {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', () => {
        localStorage.setItem(`checkbox-${id}`, checkbox.checked);
        updateProgress();
    });
});

updateProgress();
