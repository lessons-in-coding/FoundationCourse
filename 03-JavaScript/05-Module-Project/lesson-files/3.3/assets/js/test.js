var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        if (promptFight === 'skip' || promptFight === 'SKIP') {
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
          if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            break;
          }
        }
    
  
        enemyHealth = enemyHealth - playerAttack;
        window.alert(
          playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
  
        if (enemyHealth <= 0) {
          window.alert(enemyName + ' has died!');
          break;
        } else {
          window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
    
        
        playerHealth = playerHealth - enemyAttack;
        window.alert(
          enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
    
        if (playerHealth <= 0) {
          window.alert(playerName + ' has died!');
          break;
        } else {
          window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
      } 
  };

  fight("GT");