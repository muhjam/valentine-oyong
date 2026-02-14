document.addEventListener('DOMContentLoaded', () => {
    const scene = document.getElementById('gallery-scene');
    const startScreen = document.getElementById('start-screen');
    const intro = document.getElementById('intro');
    const music = document.getElementById('bg-music');

    // Distribution parameters
    const zSpacing = 1300;
    const spread = 950;

    // EXACT FILENAMES from your photos folder
    const photoAssets = [
        { url: 'photos/01-pertama-kali-pacaran.jpg', caption: 'Hari pertama kita jadian... deg-degan parah! 💓' },
        { url: 'photos/02-clay-date.jpg', caption: 'Lagi bikin keramik atau lagi main tanah liat? 🏺😂' },
        { url: 'photos/03-wfc-uwu.jpg', caption: 'Temen kerja paling semangat ya cuma kamu 💻✨' },
        { url: 'photos/04-uwu-di-depan-sahabat.jpg', caption: 'Dunia milik berdua, yang lain ngontrak! 🌎✌️' },
        { url: 'photos/05-rayain-seminar+ultah.jpg', caption: 'Double celebration! Bangga banget sama kamu 🎓🎂' },
        { url: 'photos/06-disini-kamu-gemes.jpg', caption: 'Tingkat gemesnya udah di luar nalar ini mah 😤❤️' },
        { url: 'photos/07-rayain-ultah-jamjam.jpg', caption: 'Ulang tahunku jadi makin berkesan karena ada kamu 🎁✨' },
        { url: 'photos/08-disini-aku-biliardnya-jago.jpg', caption: 'Fokus masukin bola, tapi malah salfok ke kamu 🎱👀' },
        { url: 'photos/09-ditraktir-ayang.jpg', caption: 'Makan gratis dari bidadari, nikmat mana lagi? 😇🍕' },
        { url: 'photos/10-untuk-temen-obob.jpg', caption: 'Sleep call sampai pagi, tetep nggak bosen 💤🧸' },
        { url: 'photos/11-ikea-date.jpg', caption: 'Udah cocok nih milih-milih perabotan rumah 🏠💍' },
        { url: 'photos/12-sederhana-tapi-ranaca-gabisa.JPG', caption: 'Momen simpel tapi paling berkesan buat aku 🍜❤️' },
        { url: 'photos/13-merah-merona.jpeg', caption: 'Kamu pake baju merah jangan sampe lolos! 💃🔥' },
        { url: 'photos/14-uwu-ditemenin-ortu.jpg', caption: 'Pasukan restu sudah lengkap! 🙏💖' },
        { url: 'photos/15-dj-date.JPG', caption: 'Jedag-jedug bareng ayang, vibes-nya asik poll 🎧🔥' },
        { url: 'photos/15-motoran-bareng-ayang.jpg', caption: 'Riding sore-sore, pelukannya jangan dilepas ya 🛵💨' },
        { url: 'photos/17-yogya-date.jpg', caption: 'Kapan kita ke Jogja lagi? Kangen momennya... ⛩️❤️' },
        { url: 'photos/18-cantikan-cewe-gua.jpg', caption: 'Nggak usah pake filter, kamu udah paling cantik! 🌸✨' },
        { url: 'photos/19-udah-kek-dipilem-pilem-belum-sii.jpg', caption: 'Scene romantis, pemeran utamanya kita berdua 🎬🥂' },
        { url: 'photos/20-yogya-datenya-beyes.jpg', caption: 'Jogja session 2, makin sayang makin nempel 🎋☕' },
        { url: 'photos/21-sumrek-date.jpg', caption: 'Panas-panas tapi tetep happy karena ada kamu ☀️🥵' },
        { url: 'photos/22-kasumba-date.jpg', caption: 'Ngopi santai sambil liatin masa depan (kamu) ☕👀' },
        { url: 'photos/23-wicuda.jpg', caption: 'Selamat wisuda kesayangan! Gelarmu sekarang: My Wife-to-be? 🎓💍' },
        { url: 'photos/24-potobut-lagi-dan-lagi.jpg', caption: 'Ribuan foto box pun nggak akan cukup buat kita 📸😂' },
        { url: 'photos/25-dibeyiin-pija-ama-ayang.jpg', caption: 'Sogokan pizza biar nggak ngambek lagi ya? 🍕🐷' },
        { url: 'photos/26-menikmati-kopi.jpg', caption: 'Pahitnya kopi kalah sama manisnya senyum kamu ☕🍭' },
        { url: 'photos/27-aku-cayang-banget-ama-kamuu.jpg', caption: 'Nggak ada kata-kata yang bisa jelasin betapa aku sayang kamu 🌙❤️' },
        { url: 'photos/28-poto-paporit-oyongg.jpg', caption: 'Foto ini vibes-nya dapet banget, favorit aku! 💖😊' },
        { url: 'photos/29-maen-hp-aja-cakepp-cooo.jpg', caption: 'Candid tapi tetep estetik, emang bakat jadi model ya? 😂📱' },
        { url: 'photos/30-foto-terakhir.jpg', caption: 'The Final Goal: Menua bersamamu. Happy Valentine! ❤️💍', isSpecial: true }
    ];

    // Create and position photos
    photoAssets.forEach((photo, i) => {
        const frame = document.createElement('div');
        frame.className = `photo-frame ${photo.isSpecial ? 'special' : ''}`;

        const zPos = -i * zSpacing;
        let xPos = (Math.random() - 0.5) * spread;
        let yPos = (Math.random() - 0.5) * spread;
        let rotation = (Math.random() - 0.5) * 20;

        if (photo.isSpecial) {
            xPos = 0; yPos = 0; rotation = 0;
        }

        frame.style.transform = `translate3d(${xPos}px, ${yPos}px, ${zPos}px) rotate(${rotation}deg)`;

        // Handle image loading errors (especially for HEIC)
        const img = new Image();
        img.src = photo.url;
        img.alt = photo.caption;

        img.onerror = () => {
            console.error("Gagal memuat:", photo.url);
        };

        frame.appendChild(img);
        const caption = document.createElement('div');
        caption.className = 'photo-caption';
        caption.innerText = photo.caption;
        frame.appendChild(caption);

        scene.appendChild(frame);
    });

    // Audio & Start logic
    startScreen.addEventListener('click', () => {
        startScreen.style.opacity = '0';
        setTimeout(() => {
            startScreen.classList.add('hidden');
            intro.classList.remove('hidden');
            music.play().catch(e => console.log("Audio diblokir browser"));
        }, 1000);
    });

    // Scroll Logic
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        // Avoid division by zero
        const progress = maxScroll > 0 ? scrolled / maxScroll : 0;

        // totalDistance needed for the LAST photo to be at Z=0
        const totalDistance = (photoAssets.length - 1) * zSpacing;
        const currentZ = progress * totalDistance;

        scene.style.transform = `translateZ(${currentZ}px)`;

        const frames = document.querySelectorAll('.photo-frame');
        frames.forEach((frame, i) => {
            const frameZ = -i * zSpacing;
            const distanceFactor = currentZ + frameZ;

            // If the photo is behind the camera (active scrolling passed it)
            if (distanceFactor > 200) {
                frame.style.opacity = '0';
                frame.style.pointerEvents = 'none';
            } else {
                // Fade based on distance (far away = dimmer)
                const absDistance = Math.abs(distanceFactor);
                // Photos get fully clear as they approach Z=0
                let opacity = 1 - (absDistance / 3500);

                // Extra fade out when it passes the camera lens
                if (distanceFactor > 0) {
                    opacity = 1 - (distanceFactor / 200);
                }

                frame.style.opacity = Math.max(0, opacity);
                frame.style.pointerEvents = 'auto';
            }
        });

        document.querySelector('.scroll-progress').style.width = `${progress * 100}%`;

        // Hide intro text after first bit of scroll
        if (scrolled > 150) {
            intro.style.opacity = '0';
        } else {
            intro.style.opacity = '1';
        }
    });

    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 60;
        const moveY = (e.clientY - window.innerHeight / 2) / 60;
        const currentTransform = scene.style.transform.split('rotate')[0];
        scene.style.transform = `${currentTransform} rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    });
});
