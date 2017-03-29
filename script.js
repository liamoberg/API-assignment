const leagueTableDatabase = {
    
    // The main function that gets the leaguetable for all the leagues. Takes the URL as a parameter.
    getTable: function(url){
        // First of all it emptys the current shown table.
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: url,
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (data) => {
        // $.each that goes through the object that is standing.
        $.each(data.standing, function(key, value){
            $('.mainimg').fadeOut();
            $('.table').fadeIn();
            // Declares the class 'crest' as a variabel.
            var classes = 'crest';
            // If statement that checks if there is a crestURI or if it is null, it sets classes and value.crestuURI to nothing. 
            // This is so teams that dont have a crestURI dont get the css styling i've done for the teams that have crestURI.
            if(!value.crestURI || value.crestURI === 'null'){
                classes = '';
                value.crestURI = '';
            }
            // Appends all the data to a tbody that is already created.
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img class='"+classes+"' src='"+value.crestURI+ "'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
        error: function(error){
            alert("Något gick snett" + error);
        }
        
        });
    },
    // Functions that run the code above for all the different leagues and the code that gets all the fixtures from
    // different leagues.
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
    // The function that displays the fixtures for all the leagues. Takes 1 parameter.
    getFixtures: function (id){
        $('.fixtures').empty();
        $('.fixtures').fadeIn();
        $.ajax({
            method:'GET',
            url: 'http://api.football-data.org/v1/fixtures/',
            headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (data) => {
            // Goes through data.fixtures.
            $.each(data.fixtures, function(key, value){
                // declares a let that is the href for every competition.
                let comp = value._links.competition.href;
                // Checks the indexOf the link is the same as the ID from the parameter.
                if(comp.indexOf(id) > -1){
                    // if that is true it appends all the fixtures to the ul I've already made.
                    $('.fixtures').append('<li class="liMatches">' +value.homeTeamName+ ' - ' +value.awayTeamName+ '</li>');
                }
            });
        },
        error:(error) => {
            alert('Något gick snett ' + error);
        }
        })
    },

    // simple function that gets the timeframe for the fixtures.
    displayTime: function(){
        $('.matches').add('.display').fadeIn();
        $('.matches').empty();
        $.ajax({
            method:'GET',
            url: 'http://api.football-data.org/v1/fixtures/',
            headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success:(data) => {
            $('.matches').append('Fixtures from ' + data.timeFrameStart + ' until ' +  data.timeFrameEnd);
        },
        error:(error) => {
            alert('Något gick snett ' + error);
        }
        
        })
        
    },

    // functions that calls the 2 functions above, getFixtures has the id of the league as parameter.
    getPlFixtures: function(){
        fixturesDataBase.getFixtures('426');
        fixturesDataBase.displayTime();
    },

    getCsFixtures: function(){
        fixturesDataBase.getFixtures('427');
        fixturesDataBase.displayTime();
    },

    getLoneFixtures: function(){
        fixturesDataBase.getFixtures('428');
        fixturesDataBase.displayTime();
    },

    getBund1Fixtures: function(){
        fixturesDataBase.getFixtures('430');
        fixturesDataBase.displayTime();
    },
    
    getBund2Fixtures: function(){
        fixturesDataBase.getFixtures('431');
        fixturesDataBase.displayTime();
    },

    getErdFixtures: function(){
        fixturesDataBase.getFixtures('433');
        fixturesDataBase.displayTime();
    },

    getLig1Fixtures: function(){
        fixturesDataBase.getFixtures('434');
        fixturesDataBase.displayTime();
    },

    getLig2Fixtures: function(){
        fixturesDataBase.getFixtures('435');
        fixturesDataBase.displayTime();
    },

    getLaligaFixtures: function(){
        fixturesDataBase.getFixtures('436');
        fixturesDataBase.displayTime();
    },

    getAdelanteFixtures: function(){
        fixturesDataBase.getFixtures('437');
        fixturesDataBase.displayTime();
    },

    getSerieAFixtures: function(){
        fixturesDataBase.getFixtures('438');
        fixturesDataBase.displayTime();
    },

    getPrimLigaFixtures: function(){
        fixturesDataBase.getFixtures('439');
        fixturesDataBase.displayTime();
    },
};


// JQuery function that only runs when DOM is ready.
$(document).ready(function(){  
    // All the buttons that listens for a click and then runs the function that gets all the tables and fixtures.
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

