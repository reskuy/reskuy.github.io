let Rifka = []
let Reski = []
callRifka = function(){
    let url = 'https://api.wibusoft.com/api/instagram/stalk?user=karinn.af';
    fetch(url,{method: 'GET', 
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin',headers: {
          'accept': 'application/json',
      }})
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let data = json.result.res
      document.getElementById('poto-Rifka').src = 'https://api.codetabs.com/v1/proxy/?quest='+data.profile_url
      document.getElementById('Nama-Rifka').innerHTML = data.name
      document.getElementById('IG-Rifka').innerHTML = '@'+data.username
      Rifka = data
    })
    }
    callReski = function(){
    let url = 'https://api.wibusoft.com/api/instagram/stalk?user=ressski_';
    fetch(url,{method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',headers: {
          'accept': 'application/json',
      }})
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let data = json.result.res
      document.getElementById('poto-Reski').src = 'https://api.codetabs.com/v1/proxy/?quest='+data.profile_url
      document.getElementById('Nama-Reski').innerHTML = data.name
      document.getElementById('IG-Reski').innerHTML = '@'+data.username
      Reski = data
      console.log(Reski)
    })
    }

    openReski = function(){
        window.open('https://instagram.com/'+Reski.username, '_blank').focus();
    }
    openRifka = function(){
        window.open('https://instagram.com/'+Rifka.username, '_blank').focus();
    }
    callRifka()
    callReski()

    