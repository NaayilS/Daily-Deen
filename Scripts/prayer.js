const prayerVerses = [
    {
        verse: "And when My servants ask thee about Me, say: ‘I am near. I answer the prayer of the supplicant when he prays to Me.'",
        reference: "Surah Al-Baqarah 2:187",
        urdu: "اور جب میرے بندے تجھ سے میرے متعلق سوال کریں تو کہہ دے کہ مَیں قریب ہوں۔ جب کوئی دعا کرنے والا مجھے پکارتا ہے تو مَیں اُس کی دعا قبول کرتا ہوں۔",
        arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌۭ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ"
    },
    {
        verse: "Call on Me; I will answer your prayer. But those who are too proud to worship Me will surely enter Hell in humiliation.",
        reference: "Surah Ghafir 40:61",
        urdu: "تم مجھے پکارو، مَیں تمہاری دعا قبول کروں گا۔ اور یقیناً وہ لوگ جو میری عبادت سے استکبار کرتے ہیں، عنقریب وہ جہنم میں ذلیل ہو کر داخل ہوں گے۔",
        arabic: "وَقَالَ رَبُّكُمُ ٱدْعُونِيٓ أَسْتَجِبْ لَكُمْ ۚ إِنَّ ٱلَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ"
    },
    {
        verse: "Seek help with patience and Prayer; and this indeed is hard except for the humble in spirit.",
        reference: "Surah Al-Baqarah 2:46",
        urdu: "صبر اور نماز سے مدد مانگو۔ اور یہ یقیناً بہت بڑی بات ہے سوائے اُن کے جو عاجزی کرنے والے ہیں۔",
        arabic: "وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَٰشِعِينَ"
    },
    {
        verse: "Recite that which has been revealed to thee of the Book, and observe Prayer. Surely, Prayer restrains one from indecency and manifest evil.",
        reference: "Surah Al-Ankabut 29:46",
        urdu: "تُو اس کتاب سے جو تیری طرف وحی کی گئی ہے تلاوت کر اور نماز کو قائم کر۔ یقیناً نماز بے حیائی اور ہر ناپسندیدہ بات سے روکتی ہے۔",
        arabic: "ٱتْلُ مَآ أُوحِيَ إِلَيْكَ مِنَ ٱلْكِتَٰبِ وَأَقِمِ ٱلصَّلَوٰةَ ۖ إِنَّ ٱلصَّلَوٰةَ تَنْهَىٰ عَنِ ٱلْفَحْشَآءِ وَٱلْمُنكَرِ"
    },
    {
        verse: "My Lord, make me observe Prayer, and my children too. Our Lord! Bestow Thy grace on me and accept my prayer.",
        reference: "Surah Ibrahim 14:41",
        urdu: "اے میرے ربّ! مجھے اور میری اولاد کو نماز قائم کرنے والا بنا۔ اے ہمارے ربّ! میری دعا قبول فرما۔",
        arabic: "رَبِّ ٱجْعَلْنِي مُقِيمَ ٱلصَّلَوٰةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَآءِ"
    },
    {
        verse: "Surely, the believers have attained true success: Those who are humble in their Prayers.",
        reference: "Surah Al-Mu’minun 23:2-3",
        urdu: "یقیناً مومن کامیاب ہو چکے ہیں۔ وہ جو اپنی نمازوں میں عاجزی کرتے ہیں۔",
        arabic: "قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ ٱلَّذِينَ هُمْ فِي صَلَاتِهِمْ خَٰشِعُونَ"
    },
    {
        verse: "O ye who believe! seek help with patience and Prayer; surely, Allah is with the steadfast.",
        reference: "Surah Al-Baqarah 2:154",
        urdu: "اے لوگو جو ایمان لائے ہو! صبر اور نماز کے ساتھ مدد چاہو۔ یقیناً اللہ صبر کرنے والوں کے ساتھ ہے۔",
        arabic: "يَا أَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّٰبِرِينَ"
    }
];
// Function to get the daily prayer verse
function getDailyPrayerVerse() {
    const today = new Date().toLocaleDateString();

    let storedDate = localStorage.getItem('prayerVerseDate');
    let storedVerse = JSON.parse(localStorage.getItem('dailyPrayerVerse'));

    if (storedDate === today) {
        document.getElementById('verse-text').innerText = `"${storedVerse.verse}"`;
        document.getElementById('verse-reference').innerText = storedVerse.reference;
    } else {
        const randomIndex = Math.floor(Math.random() * prayerVerses.length);
        const verse = prayerVerses[randomIndex];

        localStorage.setItem('prayerVerseDate', today);
        localStorage.setItem('dailyPrayerVerse', JSON.stringify(verse));

        document.getElementById('verse-text').innerText = `"${verse.verse}"`;
        document.getElementById('verse-reference').innerText = verse.reference;
    }
}

// Function to show translation based on language
function showTranslation(language) {
    const storedVerse = JSON.parse(localStorage.getItem('dailyPrayerVerse'));

    if (language === 'urdu') {
        document.getElementById('verse-text').innerText = `"${storedVerse.urdu}"`;
    } else if (language === 'arabic') {
        document.getElementById('verse-text').innerText = `"${storedVerse.arabic}"`;
    } else {
        document.getElementById('verse-text').innerText = `"${storedVerse.verse}"`;
    }
}

function resetVerseAtMidnight() {
    const now = new Date();
    const millisUntilMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, 
        0, 0, 0 
    ).getTime() - now.getTime();

    setTimeout(() => {
        localStorage.removeItem('prayerVerseDate');
        getDailyPrayerVerse();
        resetVerseAtMidnight();
    }, millisUntilMidnight);
}

document.addEventListener('DOMContentLoaded', function() {
    getDailyPrayerVerse();
    resetVerseAtMidnight();
});
