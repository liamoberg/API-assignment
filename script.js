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

    getPlTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/426/leagueTable');
        fixturesDataBase.getPlFixtures();
    },

    getCsTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/427/leagueTable');
        fixturesDataBase.getCsFixtures();
    },
    
    getLoneTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/428/leagueTable');
        fixturesDataBase.getLoneFixtures();
    },

    getBund1Table: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/430/leagueTable');
        fixturesDataBase.getBund1Fixtures();
    },   

    getBund2Table: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/431/leagueTable');
        fixturesDataBase.getBund2Fixtures();
    },

    getErdTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/433/leagueTable');
        fixturesDataBase.getErdFixtures();
    },

    getLig1Table: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/434/leagueTable');
        fixturesDataBase.getLig1Fixtures();
    },

    getLig2Table: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/435/leagueTable');
        fixturesDataBase.getLig2Fixtures();
    },

    getLaligaTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/436/leagueTable');
        fixturesDataBase.getLaligaFixtures();
    },

    getAdelanteTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/437/leagueTable');
        fixturesDataBase.getAdelanteFixtures();
    },

    getSerieATable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/438/leagueTable');
        fixturesDataBase.getSerieAFixtures();
    },

    getPrimLigaTable: function(){
        leagueTableDatabase.getTable('http://api.football-data.org/v1/competitions/439/leagueTable');
        fixturesDataBase.getPrimLigaFixtures();
    }
};

const fixturesDataBase = {
    getFixtures: function (id){
        $('.fixtures').empty();
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
                if(comp.indexOf(id) > -1){
                    $('.fixtures').append('<li>'+value.homeTeamName+ ' - ' +value.awayTeamName+ '</li>');
                }
            });
        }            
        })
    },

    getPlFixtures: function(){
        fixturesDataBase.getFixtures('426');
    },

    getCsFixtures: function(){
        fixturesDataBase.getFixtures('427');
    },

    getLoneFixtures: function(){
        fixturesDataBase.getFixtures('428');
    },

    getBund1Fixtures: function(){
        fixturesDataBase.getFixtures('430');
    },
    
    getBund2Fixtures: function(){
        fixturesDataBase.getFixtures('431');
    },

    getErdFixtures: function(){
        fixturesDataBase.getFixtures('433');
    },

    getLig1Fixtures: function(){
        fixturesDataBase.getFixtures('434');
    },

    getLig2Fixtures: function(){
        fixturesDataBase.getFixtures('435');
    },

    getLaligaFixtures: function(){
        fixturesDataBase.getFixtures('436');
    },

    getAdelanteFixtures: function(){
        fixturesDataBase.getFixtures('437');
    },

    getSerieAFixtures: function(){
        fixturesDataBase.getFixtures('438');
    },

    getPrimLigaFixtures: function(){
        fixturesDataBase.getFixtures('439');
    },
};

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
    document.getElementById('seriea').addEventListener('click', leagueTableDatabase.getSerieATable);
    document.getElementById('primliga').addEventListener('click', leagueTableDatabase.getPrimLigaTable);
});


