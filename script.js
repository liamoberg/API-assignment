const leagueTableDatabase = {

    getTable: function(url){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: url,
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            var classes = 'crest';
            if(!value.crestURI || value.crestURI === 'null'){
                classes = '';
                value.crestURI = '';
            }
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img class='"+classes+"' src='"+value.crestURI+ "'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){
                console.log("det blev fel LOL" + error);
            }
        });
    },

    getPlTable: function(url){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/426/leagueTable');
    },

    getCsTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/427/leagueTable');
    },
    
    getLoneTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/428/leagueTable');
    },

    getBund1Table: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/430/leagueTable');
    },   

    getBund2Table: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/431/leagueTable');
    },

    getErdTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/433/leagueTable');
    },

    getLig1Table: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/434/leagueTable');
    },

    getLig2Table: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/435/leagueTable');
    },

    getLaligaTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/436/leagueTable');
    },

    getAdelanteTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/437/leagueTable');
    },

    getSerieATable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/438/leagueTable');
    },

    getPrimLigaTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/439/leagueTable');
    }
};

const fixturesDataBase = {
    getCsFixtures: function (){
        $.ajax({
            method:'GET',
            url: 'http://api.football-data.org/v1/fixtures/',
            headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
            data = response;
            console.log(data);
            $.each(data.fixtures, function(key, value){
                let comp = value._links.competition.href;
                if(comp.indexOf('428') > -1){
                    $('#fixtures').append('<li>'+value.homeTeamName+ ' VS ' +value.awayTeamName+'</li>');
                }
            });
        }            
        })
    }
};

fixturesDataBase.getCsFixtures();

$( document ).ready(function() {
    document.getElementById('champ').addEventListener('click', leagueTableDatabase.getCsTable);
    document.getElementById('premier').addEventListener('click', leagueTableDatabase.getPlTable);
    document.getElementById('Lone').addEventListener('click', leagueTableDatabase.getLoneTable);
    document.getElementById('bund1').addEventListener('click', leagueTableDatabase.getBund1Table);
    document.getElementById('bund2').addEventListener('click', leagueTableDatabase.getBund2Table);
    document.getElementById('erd').addEventListener('click', leagueTableDatabase.getErdTable);
    document.getElementById('lig1').addEventListener('click', leagueTableDatabase.getLig1Table);
    document.getElementById('lig2').addEventListener('click', leagueTableDatabase.getLig2Table);
    document.getElementById('laliga').addEventListener('click', leagueTableDatabase.getLaligaTable);
    document.getElementById('adelante').addEventListener('click', leagueTableDatabase.getAdelanteTable);
    document.getElementById('seria').addEventListener('click', leagueTableDatabase.getSerieATable);
    document.getElementById('primliga').addEventListener('click', leagueTableDatabase.getPrimLigaTable);
});


