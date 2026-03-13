function isValidIp(ip) {
    let ipv4 =
        /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;

    return ipv4.test(ip);
}

async function getCountryCode(ip) {
    let response = await fetch("https://json.geoiplookup.io/" + ip);
    let data = await response.json();
    return data.country_code;
}

async function main() {
    let ips = [];
    let blockedCountries = ["RU", "BY", "AF", "CN", "VE", "IR"];
    let promises = [];

    while (ips.length < 5) {
        let ip = prompt("Enter IP address №" + (ips.length + 1));

        if (ip === null) {
            return;
        }

        ip = ip.trim();

        if (!isValidIp(ip)) {
            alert("Incorrect IP address");
            continue;
        }

        ips.push(ip);
    }

    for (let i = 0; i < ips.length; i++) {
        promises.push(getCountryCode(ips[i]));
    }

    let countryCodes = await Promise.all(promises);

    for (let i = 0; i < countryCodes.length; i++) {
        if (blockedCountries.includes(countryCodes[i])) {
            alert("Our services are not available in your country");
            return;
        }
    }

    alert("Welcome to our website!");
}

main();
