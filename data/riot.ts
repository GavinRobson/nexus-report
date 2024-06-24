export const getVersion = async () => {
  try {

    const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
    const data = await response.json();

    return data[0];
  } catch (error) {
    return ({ error: "Error fetching version" })
  }
  
}

export const getProfileIconById = async (id: string | undefined) => {
  try {
    if (id === undefined) {
      return '';
    }
    const version = await getVersion();

    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${id}.png` 
  } catch (error) {
    return ''
  }
}

export const getPuuidUsernameTag = async (username: string, tag: string) => {
  try {
    const response = await fetch(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tag}?api_key=${process.env.RIOT_API_KEY}`);
    const data = await response.json();

    return data.puuid;
  } catch (error) {
    return ({ error: "Error getting puuid with username and tag" })
  }
}

export const getSummonerByPuuid = async(puuid: string) => {
  try { 
    const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${process.env.RIOT_API_KEY}`);
    const data = await response.json();

    if (response.status === 200) {
    return data;
    }

    return { error: data.status.message }

  } catch (error) {
    return ({ error: "Error getting summoner by puuid" })
  }
}