async function get_geo(country) {
    const params = new URLSearchParams({
        q: country,
        limit: 1,
        appid: "e75adb2a4dfabcc399005635cfe4644e"
    });

    const url = `http://api.openweathermap.org/geo/1.0/direct?${params}`
    let geo = {}

    let result = await fetch(url)
    let textResponse = await result.json()
    geo.lat = textResponse[0].lat
    geo.lon = textResponse[0].lon
    return geo
}

async function get_weather(geo) {
    const params = new URLSearchParams({
        lat: geo.lat,
        lon: geo.lon,
        appid: "e75adb2a4dfabcc399005635cfe4644e"
    });
    const url = `https://api.openweathermap.org/data/2.5/weather?${params}`
    let result = await fetch(url)
    let textResponse = await result.json()
    return textResponse.weather
}

export default async function weatherworker(city){
    const geo = await get_geo(city)
    const weather = await get_weather(geo)
    return weather[0].description
}

