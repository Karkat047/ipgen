async function getAddress() {
  let ip_adress = (
    Math.floor(Math.random() * 255) + 1)+"."+
    (Math.floor(Math.random() * 255))+"."+
    (Math.floor(Math.random() * 255))+"."+
    (Math.floor(Math.random() * 255));

  const api_url = await
    fetch (`https://get.geojs.io/v1/ip/geo/${ip_adress}.json`);
  const data = await api_url.json();

  let country = data.country_code3;
  let lat = data.latitude;
  let long = data.longitude;
  let latlong = lat + ", " + long;

  if (country) {
    return {
      ip: data.ip,
      code: data.country_code3,
      city: data.city,
      organization_name: data.organization_name,
      country: data.country,
      region: data.region,
      latlong: latlong,
    };
  } else {
    return await getAddress();
  }
}

export default getAddress;