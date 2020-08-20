const fetchUrl = (url: string, config = {}): Promise<any> =>
  fetch(url, config).then(async response => {
    const data = await response.json();
    return response.ok ? data : [];
  });
export default fetchUrl;