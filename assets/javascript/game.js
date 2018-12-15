        // when page loads execute script//
        window.onload = function () {
            // array of available user choices //
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
              'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
              't', 'u', 'v', 'w', 'x', 'y', 'z'];
            //  defined variables //
        var categories;         // Array of gamess
        var chosenCategory;     // Randomly selected game  
        var word ;              // Selected word
        var guess ;             // Guess
        var geusses = [];       // Stored guesses
        var lives ;             // Lives
        var counter ;           // Count correct geusses
        var space;              // Number of spaces in word '-'
      
        // Get lives and display on document //
        var showLives = document.getElementById("mylives");
        
        // Create button function for letters and display list //
        var buttons = function () {
          myButtons = document.getElementById('buttons');
          letters = document.createElement('ul');      
          for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
          }
        }
          
        // Hidden guess word displays _ for words and - for spaces //  
         result = function () {
          wordHolder = document.getElementById('hold');
          correct = document.createElement('ul');  
          for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
              guess.innerHTML = "-";
              space = 1;
            } else {
              guess.innerHTML = "_";
            }          
            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
          }
        }
        
        // Shows lives and declares if user wins/loses if lives reach 0 //
         comments = function () {
          showLives.innerHTML = "You have " + lives + " lives";
          if (lives < 1) {
            showLives.innerHTML = "Game Over";
          }
          for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
              showLives.innerHTML = "You Win!";
            }
          }
        }
      
        // On click of correct guess, letter will show else user loses a life //
        // Won't allow user to chose the same letter more than once  //
         check = function () {
          list.onclick = function () {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
              if (word[i] === geuss) {
                geusses[i].innerHTML = geuss;
                counter += 1;
              } 
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
              lives -= 1;
              comments();
            } else {
              comments();
            }
          }
        }
         
        // Game // 
        play = function () {
          categories = [
              ["super mario bros", "zelda", "donkey kong", "ms pac man", "galaga", "space invaders", "tetris", "contra", "qbert", "asteriods"]];  
          chosenCategory = categories[Math.floor(Math.random() * categories.length)];
          word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)]; 
          console.log(word);
          buttons();
          geusses = [ ];
          lives = 10;
          counter = 0;
          space = 0;
          result();
          comments();      
        }
      
        play();
        
         // Resets game by clicking button //
        document.getElementById('reset').onclick = function() {
          correct.parentNode.removeChild(correct);   
          letters.parentNode.removeChild(letters); 
          play();
        }
      }
        
        
    