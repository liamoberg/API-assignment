const footballDataBase = {

    getCompetitions: function(){
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        console.log(data);
        $('.lang').text(data.standing[0]);
        $.each(data.standing, function(key, value){
            $('.tablebody').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
        });
    },
    error: function(error){

    }
    });
    }

};
footballDataBase.getCompetitions();

