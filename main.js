const verses = [
    { verse: "And We have, indeed, made the Qur’an easy to understand and to remember. But is there anyone who would receive admonition?", reference: "Surah Al-Qamar 54:17", urdu: "اور یقیناً ہم نے قرآن کو نصیحت کے لئے آسان بنا دیا ہے، تو کیا کوئی ہے جو نصیحت حاصل کرے؟", arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ" },
    { verse: "And he who fears Allah — He will make for him a way out.", reference: "Surah At-Talaq 65:2", urdu: "اور جو اللہ سے ڈرتا ہے، اللہ اس کے لئے راستہ نکال دیتا ہے۔", arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا" },
    { verse: "Surely, Allah does not wrong men at all; but men wrong their own souls.", reference: "Surah Yunus 10:44", urdu: "یقیناً اللہ لوگوں پر ظلم نہیں کرتا، لیکن لوگ خود اپنی جانوں پر ظلم کرتے ہیں۔", arabic: "إِنَّ اللَّهَ لَا يَظْلِمُ النَّاسَ شَيْئًا وَلَكِنَّ النَّاسَ أَنفُسَهُمْ يَظْلِمُونَ" },
    { verse: "And he who puts his trust in Allah — He is sufficient for him.", reference: "Surah At-Talaq 65:3", urdu: "اور جو اللہ پر بھروسہ کرے گا تو اللہ اُس کے لیے کافی ہے۔", arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ" },
    { verse: "And, surely, We created man, and We know what his mind whispers to him, and We are nearer to him than even his jugular vein.", reference: "Surah Qaf 50:16", urdu: "اور یقیناً ہم نے انسان کو پیدا کیا، اور ہم جانتے ہیں جو اُس کے دل میں وسوسے پیدا ہوتے ہیں، اور ہم اس کی رگِ جان سے بھی زیادہ اُس کے قریب ہیں۔", arabic: "وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ" },
    { verse: "So do not lose heart, nor grieve; and you will certainly be triumphant if you are believers.", reference: "Surah Aal-E-Imran 3:139", urdu: "پس نہ کمزوری دکھاؤ اور نہ غم کرو؛ اور تم ہی غالب رہو گے اگر تم مومن ہو۔", arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ" },
    { verse: "And whoso does evil or wrongs his soul, and then asks forgiveness of Allah, will find Allah Most Forgiving, Merciful.", reference: "Surah An-Nisa 4:110", urdu: "اور جو شخص برائی کرے یا اپنے آپ پر ظلم کرے، اور پھر اللہ سے بخشش مانگے تو وہ اللہ کو بہت بخشنے والا، مہربان پائے گا۔", arabic: "وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا" },
    { verse: "Say, ‘O My servants who have committed excesses against their own souls, despair not of the mercy of Allah, surely, Allah forgives all sins. Verily, He is Most Forgiving, Merciful.", reference: "Surah Az-Zumar 39:53", urdu: "کہہ دو، 'اے میرے بندو جنہوں نے اپنی جانوں پر زیادتی کی ہے، اللہ کی رحمت سے ناامید نہ ہو۔ یقیناً اللہ سب گناہ معاف کر دیتا ہے۔'", arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا" },
    { verse: "Surely, with every difficulty there is relief.", reference: "Surah Ash-Sharh 94:6", urdu: "پس یقیناً ہر مشکل کے ساتھ آسانی ہے۔", arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا" },
    { verse: "So remember Me, I will remember you; and be thankful to Me and do not be ungrateful to Me.", reference: "Surah Al-Baqarah 2:152", urdu: "پس تم مجھے یاد کرو، میں تمہیں یاد کروں گا؛ اور میرے شکرگزار بنو اور میری ناشکری نہ کرو۔", arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ" },
    { verse: "Allah burdens not any soul beyond its capacity.", reference: "Surah Al-Baqarah 2:286", urdu: "اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا۔", arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا" },
    { verse: "And when My servants ask thee about Me, say, ‘I am near. I answer the prayer of the supplicant when he prays to Me.", reference: "Surah Al-Baqarah 2:186", urdu: "اور جب میرے بندے آپ سے میرے متعلق پوچھیں تو کہہ دیں کہ میں قریب ہوں۔ میں پکارنے والے کی پکار کا جواب دیتا ہوں جب وہ مجھے پکارتا ہے۔", arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ" },
    { verse: "Your friend is none but Allah and His Messenger and those who believe.", reference: "Surah Al-Ma'idah 5:55", urdu: "تمہارا دوست صرف اللہ اور اس کا رسول اور وہ لوگ ہیں جو ایمان لائے ہیں۔", arabic: "إِنَّمَا وَلِيُّكُمُ اللَّهُ وَرَسُولُهُ وَالَّذِينَ آمَنُوا" },
    { verse: "And seek help with patience and prayer.", reference: "Surah Al-Baqarah 2:45", urdu: "اور صبر اور نماز کے ساتھ مدد حاصل کرو۔", arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ" },
    { verse: "So be patient. Surely, the promise of Allah is true.", reference: "Surah Ar-Rum 30:60", urdu: "پس صبر کرو۔ یقیناً اللہ کا وعدہ سچا ہے۔", arabic: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ" },
    { verse: "And whoso puts his trust in Allah — He is sufficient for him.", reference: "Surah At-Talaq 65:3", urdu: "اور جو اللہ پر بھروسہ کرے گا تو اللہ اس کے لئے کافی ہے۔", arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ" },
    { verse: "Surely, Allah is with those who are patient.", reference: "Surah Al-Baqarah 2:153", urdu: "یقیناً اللہ صبر کرنے والوں کے ساتھ ہے۔", arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ" },
    { verse: "Surely, We have created man in the best make.", reference: "Surah At-Tin 95:4", urdu: "اور یقیناً ہم نے انسان کو بہترین ساخت پر پیدا کیا ہے۔", arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ" },
    { verse: "And your Lord says, ‘Pray unto Me; I will answer your prayer.", reference: "Surah Ghafir 40:60", urdu: "اور تمہارے رب نے کہا ہے، 'مجھ سے دعا کرو؛ میں تمہاری دعا قبول کروں گا۔'", arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ" },
    { verse: "The believers are surely brothers. So make peace between your brothers.", reference: "Surah Al-Hujurat 49:10", urdu: "مومن تو بھائی بھائی ہیں۔ پس اپنے دو بھائیوں کے درمیان صلح کرا دو۔", arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ" },
    { verse: "Whoso does good works while he is a believer, no ingratitude shall be shown for his effort, and We shall surely record it.", reference: "Surah Al-Anbiya 21:94", urdu: "اور جو نیک عمل کرتا ہے جبکہ وہ مومن ہے، تو اس کی محنت کا انکار نہیں کیا جائے گا، اور ہم یقیناً اسے لکھ لیتے ہیں۔", arabic: "فَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ وَهُوَ مُؤْمِنٌ فَلَا كُفْرَانَ لِسَعْيِهِ وَإِنَّا لَهُ كَاتِبُونَ" },
    { verse: "Surely, with every difficulty there is relief.", reference: "Surah Ash-Sharh 94:6", urdu: "پس یقیناً ہر مشکل کے ساتھ آسانی ہے۔", arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا" },
    { verse: "And whoso fears Allah — He will make for him a way out.", reference: "Surah At-Talaq 65:2", urdu: "اور جو اللہ سے ڈرتا ہے اللہ اس کے لئے راستہ نکال دیتا ہے۔", arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا" },
    { verse: "Surely, Allah changes not the condition of a people until they change that which is in their hearts.", reference: "Surah Ar-Ra'd 13:11", urdu: "یقیناً اللہ کسی قوم کی حالت کو نہیں بدلتا جب تک وہ خود اپنی حالت کو نہ بدل دیں۔", arabic: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنفُسِهِمْ" },
    { verse: "Surely, this Qur’an guides to that which is most right.", reference: "Surah Al-Isra 17:9", urdu: "یقیناً یہ قرآن اس راستے کی رہنمائی کرتا ہے جو سب سے زیادہ سیدھا ہے۔", arabic: "إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ" },
    { verse: "And whoso fears Allah — He will make his path easy for him.", reference: "Surah At-Talaq 65:4", urdu: "اور جو اللہ سے ڈرتا ہے، اللہ اس کے لئے اس کے معاملے میں آسانی پیدا کر دیتا ہے۔", arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَهُ مِنْ أَمْرِهِ يُسْرًا" },
    { verse: "Surely, Allah is the Best Provider.", reference: "Surah Al-Jumu'ah 62:11", urdu: "یقیناً اللہ بہترین رزق دینے والا ہے۔", arabic: "وَاللَّهُ خَيْرُ الرَّازِقِينَ" },
    { verse: "And be patient; for surely, Allah suffers not the reward of those who do good to be lost.", reference: "Surah Hud 11:115", urdu: "اور صبر کرو؛ کیونکہ یقیناً اللہ نیکی کرنے والوں کا اجر ضائع نہیں کرتا۔", arabic: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ" },
    { verse: "And despair not of the mercy of Allah.", reference: "Surah Yusuf 12:87", urdu: "اور اللہ کی رحمت سے ناامید نہ ہو۔", arabic: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ" },
    { verse: "And We have, indeed, made the Qur’an easy to understand and to remember. But is there anyone who would receive admonition?", reference: "Surah Al-Qamar 54:17", urdu: "اور یقیناً ہم نے قرآن کو سمجھنے اور یاد کرنے کے لئے آسان بنا دیا ہے؛ پھر کیا کوئی ہے جو نصیحت حاصل کرے؟", arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ" }
];

function getDailyVerse() {
    const today = new Date().toLocaleDateString();

    let usedVerses = JSON.parse(localStorage.getItem('usedVerses')) || [];
    let storedDate = localStorage.getItem('verseDate');

    if (storedDate === today) {
        const storedVerse = JSON.parse(localStorage.getItem('dailyVerse'));
        document.getElementById('verse-text').innerText = `"${storedVerse.verse}"`;
        document.getElementById('verse-reference').innerText = storedVerse.reference;
    } else {
        if (usedVerses.length === verses.length) {
            usedVerses = [];
        }

        const remainingVerses = verses.filter(v => !usedVerses.some(uv => uv.verse === v.verse));
        const randomIndex = Math.floor(Math.random() * remainingVerses.length);
        const verse = remainingVerses[randomIndex];

        usedVerses.push(verse);
        localStorage.setItem('usedVerses', JSON.stringify(usedVerses));
        localStorage.setItem('dailyVerse', JSON.stringify(verse));
        localStorage.setItem('verseDate', today);

        document.getElementById('verse-text').innerText = `"${verse.verse}"`;
        document.getElementById('verse-reference').innerText = verse.reference;
    }
}

function showTranslation(language) {
    const storedVerse = JSON.parse(localStorage.getItem('dailyVerse'));
    if (language === 'urdu') {
        document.getElementById('translation-text').innerText = storedVerse.urdu;
    } else if (language === 'arabic') {
        document.getElementById('translation-text').innerText = storedVerse.arabic;
    }
    document.getElementById('translation-text').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    getDailyVerse();
    resetVerseAtMidnight();
});

function resetVerseAtMidnight() {
    const now = new Date();
    const millisUntilMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // Next day
        0, 0, 0 // Midnight
    ).getTime() - now.getTime();

    setTimeout(() => {
        localStorage.removeItem('verseDate');
        getDailyVerse(); // Generate a new verse after midnight
        resetVerseAtMidnight(); // Set up the next reset
    }, millisUntilMidnight);
}

// Function to get user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to fetch prayer times using Aladhan API for the next 7 days
function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const apiURL = `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&method=2&month=${new Date().getMonth() + 1}&year=${new Date().getFullYear()}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const prayerTimesContainer = document.getElementById('weekly-prayer-times');
            prayerTimesContainer.innerHTML = ''; // Clear any existing content

            for (let i = 0; i < 7; i++) { // Loop through the next 7 days
                const date = new Date();
                date.setDate(date.getDate() + i); // Get the date for each day

                const timings = data.data[date.getDate() - 1].timings; // Fetch the timings for the specific day
                const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day name (e.g., "Monday")

                const dayContainer = document.createElement('div');
                dayContainer.className = 'day-container';

                dayContainer.innerHTML = `
                    <h4>${dayName} - ${date.toLocaleDateString()}</h4>
                    <ul>
                        <li>Fajr: ${timings.Fajr}</li>
                        <li>Dhuhr: ${timings.Dhuhr}</li>
                        <li>Asr: ${timings.Asr}</li>
                        <li>Maghrib: ${timings.Maghrib}</li>
                        <li>Isha: ${timings.Isha}</li>
                    </ul>
                `;

                prayerTimesContainer.appendChild(dayContainer);
            }
        })
        .catch(error => {
            console.error('Error fetching prayer times:', error);
            alert('Error: Could not fetch prayer times.');
        });
}

//Article Nav
let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


// Function to handle errors from Geolocation API
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

// Call the getLocation function when the page loads
window.onload = getLocation;

// Array of Islamic challenges
const challenges = [
    "Pray all five daily prayers on time today.",
    "Recite Surah Al-Fatiha 10 times with reflection.",
    "Read and reflect on the daily verse from the Quran. How can it be in relation to your life?",
    "Give Sadaqah to someone in need today.",
    "Memorize a short Surah from the Quran.",
    "Learn the meaning of a new Arabic word from the Quran.",
    "Perform Dhikr (remembrance of Allah) for 10 minutes.",
    "Read one Hadith and think about how to apply it in your life.",
    "Spend 10 minutes making Dua today.",
    "Share an Islamic reminder with a friend or family member.",
    "Fast one day this week with the intention of spiritual growth, as encouraged by the Promised Messiah (AS).",
    "Perform the Sunnah prayers before or after the obligatory prayers.",
    "Listen to a Quran recitation for 15 minutes.",
    "Read a book or article about the life of Prophet Muhammad (SAW).",
    "Give Chanda regularly and with the right intention.",
    "Spend 15 minutes reading the translation of the Quran.",
    "Attend or watch an Islamic lecture online.",
    "Memorize a quote from the Promised Messiah (AS).",
    "Perform the night prayer (Tahajjud) tonight.",
    "Spend time making Dua for the success of the Jama’at and Khilafat.",
    "Reflect on the meaning of the Bai'at Ceremony.",
    "Listen to a Dars or lecture by Hazrat Khalifatul Masih V (ABA) for spiritual guidance.",
    "Write a letter to our Beloved Huzoor",
    "Say SubhanAllah 500 times today",
    "Recite the Quran for 15 minutes.",
    "Learn about one of the 99 names of Allah and its meaning.",
    "Make a list of things you’re grateful for and thank Allah.",
    "Teach a child or someone new something about Islam.",
    "Pray in congregation at the mosque at least once today.",
    "Make Dua for those who are persecuted for their faith",
];

// Function to get and display the daily challenge
function getDailyChallenge() {
    const today = new Date().toLocaleDateString();

    // Retrieve stored data
    let usedChallenges = JSON.parse(localStorage.getItem('usedChallenges')) || [];
    let storedDate = localStorage.getItem('challengeDate');

    if (storedDate === today) {
        // If the challenge has already been set for today, display it
        const storedChallenge = localStorage.getItem('dailyChallenge');
        document.getElementById('daily-challenge-selection').innerText = storedChallenge;
    } else {
        // If all challenges have been used, reset the list
        if (usedChallenges.length === challenges.length) {
            usedChallenges = [];
        }

        // Get the remaining challenges
        const remainingChallenges = challenges.filter(challenge => !usedChallenges.includes(challenge));

        // Select a random challenge from the remaining challenges
        const randomIndex = Math.floor(Math.random() * remainingChallenges.length);
        const challenge = remainingChallenges[randomIndex];

        // Store the challenge and update the usedChallenges list
        usedChallenges.push(challenge);
        localStorage.setItem('usedChallenges', JSON.stringify(usedChallenges));
        localStorage.setItem('dailyChallenge', challenge);
        localStorage.setItem('challengeDate', today);

        // Display the new challenge
        document.getElementById('daily-challenge-selection').innerText = challenge;
    }
}

// Function to reset the challenge at midnight
function resetChallengeAtMidnight() {
    const now = new Date();
    const millisUntilMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // Next day
        0, 0, 0 // Midnight
    ).getTime() - now.getTime();

    setTimeout(() => {
        localStorage.removeItem('challengeDate');
        getDailyChallenge(); // Generate a new challenge after midnight
        resetChallengeAtMidnight(); // Set up the next reset
    }, millisUntilMidnight);
}

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // Next midnight
    const diff = nextMidnight - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerText =
        `Next challenge in: ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateCountdown, 1000); // Update every second
}

// Call the function to set the daily challenge on page load
getDailyChallenge();

// Start the midnight reset timer
resetChallengeAtMidnight();

// Start the countdown timer
updateCountdown();
