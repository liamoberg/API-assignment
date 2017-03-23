const leagueTableDatabase = {

    getPlTable: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getCsTable: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/427/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },
    
    getLoneTable: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/428/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getBund1Table: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/430/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },   
    
    getBund1Table: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/430/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getBund2Table: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/431/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getErdTable: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/433/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getLig1Table: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/434/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getLig2Table: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/435/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getLaligaTable: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/436/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getAdelanteTable: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/437/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getSerieATable: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/438/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
    },

    getPrimLigaTable: function(){
        $('.BigTable').empty();
        $.ajax({
        method:'GET',
        url: 'http://api.football-data.org/v1/competitions/439/leagueTable',
        headers: {
            'X-Auth-Token': 'bc1c9459624a4143a7d7e78e5e00e85b'
        },
        success: (response) => {
        data = response;
        $.each(data.standing, function(key, value){
            $('.BigTable').append("<tr><th scope='row'>"+value.position+"</th><td><img src='"+value.crestURI+"'/>"+value.teamName+"</td><td>"+value.points+"</td><td>"+value.playedGames+"</td><td>"+value.wins+"</td><td>"+value.draws+"</td><td>"+value.losses+"</td></tr>");
            });
        },
            error: function(error){

            }
        });
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
    document.getElementById('seria').addEventListener('click', leagueTableDatabase.getSerieATable);
    document.getElementById('primliga').addEventListener('click', leagueTableDatabase.getPrimLigaTable);
});

