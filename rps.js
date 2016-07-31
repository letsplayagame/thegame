angular.module('rpsgame', [])
.controller('RockPaperScissors', function() {
  this.choices = ['rock', 'paper', 'scissors'];
  this.winner = ['tie', 'P1', 'P2'];
  this.result = 'tie';
  this.P1score = 0;
  this.P2score = 0;
  this.round = 0;
  

  this.checkround = function checkround(p1movep,p2movep) {
    this.checkwinner (p1movep,p2movep);
    this.round = this.round + 1;

    if(this.result=="tie")
    {
      return;
    }

    if (this.result=="p1 wins") {
      this.P1score = this.P1score + 1;
    } else {
      this.P2score = this.P2score + 1;
    }

  }



  this.checkwinner = function checkwinner(p1move,p2move) {
    
    if (p1move == p2move) {
      this.result = "tie";
      return;  
    }

    if (p1move=="rock") {
      
      if (p2move=="scissors") {
        this.result="p1 wins";
      } else { //p2 is paper
        this.result = "p2 wins";
      }
    }

    if (p1move=="paper") {
      
      if (p2move=="rock") {
        this.result="p1 wins";
      } else { //p2 is scissors
        this.result = "p2 wins";
      }
    }

    if (p1move=="scissors") {
      
      if (p2move=="paper") {
        this.result="p1 wins";
      } else { //p2 is rock
        this.result = "p2 wins";
      }
    }

  };
});