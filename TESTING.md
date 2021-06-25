# Testing #    

[README.md file](README.md)  
[View live project]()  

---  

## Table of contents ##  

1. [Testing User Stories](#Testing-User-Stories)  
2. [Manual Testing](#Manual-Testing)  
3. [Automated Testing](#Automated-Testing)  
4. [User Testing](#User-Testing)  

![mockup](assets/test-files/mockups/mocup2.png)  

---

### Testing User Stories ###  

1. As a user I want to see a nice and colourful web application.  
    
    When enter the application, the user meets a nice yellow Kids Memory header and buttons in pink and blue on a yellow background. This is stacked on top of a colourful background image of two lego figures holding balloons. The same color palette follows throughout the application.  
2. As a user I want to see nice pictures.  
  
    We have the entering background image, twelve images when playing the Kids Memory game, and the cool icecream break image before the contact section.  
3.  As a user I want to see my score and how many moves I used.  
    
    The score and moves counter works as it should, and keeps track until finish game and reset is pushed.  
4.  As a user I want to have fun playing the game.  
    
    The game is absolutely fun for the Kids!  
5.  As a user I want to have the ability to contact the developer for questions.  
    
    The contact form looks nice, with possibility to contact after input and submit, clear form or push Play again! 

    

### Manual Testing ###  

* Buttons:  
    * Play and play again button is both working and takes the user to the play section.  
    * Contact button is working, takes the user to the contact section.  
    * Reset button is working. Resets the game.  
    * Submit button did not work. It should send an email to the devloper and alert the user on screen, also send an email to the user with confirmation.  
    ![submit alert error 501](assets/test-files/manuel/submit_alert_error_501.png)  
    After use of slack and watching the CI learning material again I removed the POST method. The submit button now function.  
    ![submit alert ok](assets/test-files/manuel/submit_alert.png)  
    Email to user:  
    ![email to user](assets/test-files/manuel/email_to_user.png)  
    Email to developer:  
    ![email to developer](assets/test-files/manuel/email_to_developer.png)  
    * Clear Form button should clear the form if the user wants to send another message or have written something wrong and wants to start over (it does not clear after submit as it should stay as a reminder of the message sent). When pushed it clears.

* Kids Memory game

  The game should just turn two image boxes, and if a match - stay open. If not a match turn back to yellow. It should also count both score and moves. This works:  
  ![turn boxes](assets/test-files/manuel/turn_boxes_score_moves.png)  
  When all matches are found the win-message should appear and it does:  
  ![win message](assets/test-files/manuel/win_message.png)  

* GitHub link on footer  
Opens in a new tab and takes the user to the developers GitHub page as it should.  

* Responsiveness  
Landing-page with header and buttons for Play and Contact:  
![pixel2](assets/test-files/manuel/landing_page/pixel2.png)  
![iphone6/7/8](assets/test-files/manuel/landing_page/iphone6_7_8.png)  
![iphonex](assets/test-files/manuel/landing_page/iphonex.png)  
![ipad](/workspace/ms2-kids-memory-game/assets/test-files/manuel/landing_page/ipad.png)  
![ipadpro](assets/test-files/manuel/landing_page/ipadpro.png)


### Automated Testing ###  

### User Testing ###