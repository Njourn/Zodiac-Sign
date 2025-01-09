document.getElementById('zodiacForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const month = birthdate.getMonth() + 1; // Months are 0-based
    const day = birthdate.getDate();

    const zodiacInfo = getZodiacSign(day, month);
    displayZodiac(zodiacInfo);
});

function getZodiacSign(day, month) {
    const zodiacSigns = [
        { name: "Aquarius", icon: "icons/aquarius.png", start: "01-20", end: "02-18" },
        { name: "Pisces", icon: "icons/pisces.png", start: "02-19", end: "03-20" },
        { name: "Aries", icon: "icons/aries.png", start: "03-21", end: "04-19" },
        { name: "Taurus", icon: "icons/taurus.png", start: "04-20", end: "05-20" },
        { name: "Gemini", icon: "icons/gemini.png", start: "05-21", end: "06-20" },
        { name: "Cancer", icon: "icons/cancer.png", start: "06-21", end: "07-22" },
        { name: "Leo", icon: "icons/leo.png", start: "07-23", end: "08-22" },
        { name: "Virgo", icon: "icons/virgo.png", start: "08-23", end: "09-22" },
        { name: "Libra", icon: "icons/libra.png", start: "09-23", end: "10-22" },
        { name: "Scorpio", icon: "icons/scorpio.png", start: "10-23", end: "11-21" },
        { name: "Sagittarius", icon: "icons/sagittarius.png", start: "11-22", end: "12-21" },
        { name: "Capricorn", icon: "icons/capricorn.png", start: "12-22", end: "01-19" }
    ];

    for (let sign of zodiacSigns) {
        const [startMonth, startDay] = sign.start.split("-").map(Number);
        const [endMonth, endDay] = sign.end.split("-").map(Number);

        if (
            (month === startMonth && day >= startDay) ||
            (month === endMonth && day <= endDay)
        ) {
            return sign;
        }
    }

    return zodiacSigns[11]; // Default to Capricorn if no match
}

function displayZodiac(zodiacInfo) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div class="zodiac-result">
            <img src="${zodiacInfo.icon}" alt="${zodiacInfo.name}">
            <h2>${zodiacInfo.name}</h2>
        </div>
    `;
}
