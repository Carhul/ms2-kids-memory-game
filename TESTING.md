# Testing #    

[README.md file](README.md)  
[View live project](https://carhul.github.io/ms2-kids-memory-game/)  

---  

## Table of contents ##  

1. [Testing User Stories](#Testing-User-Stories)  
2. [Manual Testing](#Manual-Testing)  
3. [Automated Testing](#Automated-Testing)  
4. [User Testing](#User-Testing)  
5. [Bugs](#Bugs)

![mockup](assets/mockups/mocup2.png)  

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
![ipad](assets/test-files/manuel/landing_page/ipad.png)  
![ipadpro](assets/test-files/manuel/landing_page/ipadpro.png)  

Play section:  
![pixel2](assets/test-files/manuel/play_section/pixel2.png)
![iphone6/7/8](assets/test-files/manuel/play_section/iphone6_7_8.png)
![iphonex](assets/test-files/manuel/play_section/iphonex.png)
![ipad](assets/test-files/manuel/play_section/ipad.png)
![ipadpro](assets/test-files/manuel/play_section/ipadpro.png)  

Contact section:  
![pixel2](assets/test-files/manuel/contact_section/pixel2.png)
![iphone6/7/8](assets/test-files/manuel/contact_section/iphone6_7_8.png)
![iphonex](assets/test-files/manuel/contact_section/iphonex.png)
![ipad](assets/test-files/manuel/contact_section/ipad.png)
![ipadpro](assets/test-files/manuel/contact_section/ipadpro.png)


### Automated Testing ###  

For HTML Validate I used [The W3C Markup Validation Service](https://validator.w3.org/), for CSS, [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) and for JS I used [JSHint](https://jshint.com/)

Testing before deployment:  

Index.html first validate had fifteen warnings / error
![html validate 1](assets/test-files/automated/html_validate_1.png)  
After trying to remove them I got this on second attempt:  
![html validate 2](assets/test-files/automated/html_validate_2.png)  
Then after understanding how to correctly comment in the HTML I got this:  
![html validate 3](assets/test-files/automated/html_validate_3.png)  
The issue on line 32, 33 and 99 is a challenge, as I put it the other way around in the first place, but then got a bug. Solved the bug by switch place on button and a href. I cleaned up the last error by removing aria-describedby="emailHelp", as this is something I first thought to include but later removed but forgot to remove all of it:  
![html validate 4](assets/test-files/automated/html_validate_4.png)   

404.html validate had one error:  
![404 validate](assets/test-files/automated/html_404_validate.png)

The remaining error needs to stay for now, as the web application is functional, and it is not if I turn them around. 

Style.CSS first validate had no error but twenty-six warnings:  
![css validate 1](assets/test-files/automated/css_validate_1.png)
![css validate warnings](assets/test-files/automated/css_warnings_1.png)  
The border colour and the background colour are the same as I thought I could see some white when not applied, but will remove this again. Second CSS validate:  
![css validate 2](assets/test-files/automated/css_validate_2.png)  
Regarding the two final warnings I found the following statement at [StackOverflow](https://stackoverflow.com/questions/25946111/importing-css-is-ending-up-with-an-error): "You're just trying to validate your CSS file using the W3C validator, and it's letting you know that it's not going to validate the imported style sheet (Google's). It's not an error, just some information for you". So I don`t do anything more about them for now.  

Index.js validation had no error, but thirty-three warnings:  
![js validate](assets/test-files/automated/js_validation_1.png).  
To clear the semicolon warnings, the semicolons where added. Credit for removing the remaining warnings about "is only available in ES6 (use 'esversion: 6" goes to Aukje - Red Pepper_Alumni on [Slack](https://app.slack.com/client/T0L30B202/search/search-559fc759-a216-4e4e-95ec-162e50113a71/thread/C7HD37Q1F-1616403659.141200). I added the line //jshint esversion: 6 to the index.js file and it worked perfect!  

* Browser Testing  

  Google Chrome and Safari works fine and are corresponding to the screenshots from responsive testing.  

* Lighthouse Testing:    

Phone:  
![phone](assets/test-files/automated/lighthouse_phone.png)  

Desktop:
![desktop](assets/test-files/automated/lighthouse_desktop.png)

### User Testing ###  

I asked my friends to check the web application and look for bugs and overall what they thought about the layout and the design. I got no bugs reported in return from anyone. The feedback on the layout and design was all good, and they had used it with their kids as well. They enjoyed it and thought it was fun and had nice colours. They also wanted to play more! So that was a really good feedback.  The only thing they wanted to change was the time the cards was visible before they turned back if not a pair. They wanted it to be visable for a little longer, so I changed that. 

The test users used the following phones: Iphone se / 6, Iphone 8, Iphone X and Ipad.  

#### Peer code review: ####  

Feedback from [Sean Young_lead](https://app.slack.com/client/T0L30B202/CGWQJQKC5/thread/CGWQJQKC5-1624870968.428100) on Slack:  

* On cardArray.sort(() => 0.5 - math.random()); This is not the best way of shuffle an array. Recomends that I take a look on [StackOverflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) to see they discuss the use and implementation of the Fisher-Yates shuffle algorithm for randomishing arrays.  

  Fixed this by changing the cardArray.sort(() => 0.5 - math.random()); to durstenfield shuffle algorithm.  
      
  After final call with mentor, we agreed on changing the code back to it`s original, as it did not shuffle the cards on reloading the page, but only when reset button was pushed.   

* Cards sometimes get stuck unflipped and double clicking a card registeres a move.  

  This error with cards sometimes get stuck unflipped, I can`t manage to reproduce. And no one else has either, so this is hard to fix. But I could reproduce the bug with moves count when double click. However, when trying to handle it I watched a lot of others work and discovered they got the same issue. I did not have the time to look in to this more before submit.  

* User stories seem to be stretched out amongst multiple sections? They don't seem to follow the normal pattern of As a user I want to <> so that I can <>.  

  I got really good feedback on my README.md for MS1, and I decided to keep the same structure as it makes sense to me and also the tutor as it was not mentioned in feedback for MS1.  

* The Bugs section I'd personally put in TESTING.md but that's probably more personal choice.  

  I totally agree on that, so I moved it.  

* There's the issue tracker in github which can be used to raise issues and can be referenced with commits that fix them. It's a great tool for linking in your README and documenting faults/fixes (and can help to gain marks) if you use it in future when your testing picks up an issue. [GitHub Issues](https://guides.github.com/features/issues/).  

  I used the issue tracker on my last issue, will definitely use it for my other projects.  

Feedback from Sean Mc, in the same thread on [Slack](https://app.slack.com/client/T0L30B202/CGWQJQKC5/thread/CGWQJQKC5-1624870968.428100): "Looks great and works well! Really nice use of images, the whole app has a very polished and consistent feel."  

Feedback from MF Wilson, in the same thread on [Slack](https://app.slack.com/client/T0L30B202/CGWQJQKC5/thread/CGWQJQKC5-1624870968.428100): "Nicely done, luv the vibe!"  


### Bugs ###  

* Header and menu button on top of the background balloon image was not as easy as I thought at first. I needed to google a lot, and in the end I had read and watched so much that I decided to give it a try in the inspection tool with all the new input - and it worked!
For this I used [GeeksforGeeks](https://www.geeksforgeeks.org/), [W3Schools](https://www.w3schools.com/), [Youtube](https://www.google.com/search?q=youtube+html+css+text+over+image+responsive&ei=4ebMYJHyAcTJrgSk1oigBw&oq=youtube+html+css+text+over+image+responsive&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsAM6BAgAEBM6CAgAEBYQHhATOggIIRAWEB0QHjoFCCEQoAE6BwghEAoQoAE6BAghEBVQlDNYnsQBYIHHAWgMcAJ4AIABkgGIAYYYkgEEMjcuN5gBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwjR5rzv6KHxAhXEpIsKHSQrAnQQ4dUDCA0&uact=5) and [StackOverflow](https://stackoverflow.com/questions/14715796/css-menu-background-height-and-text-height). In the middle call, I got feedback from my mentor that the page just looked hacked, and she recomended me to use height 100vh and put the background image as a background image in the CSS file. I started work on it and eventually I got it.

* Link from Play and Contact button would not work, solved it with the help of [StackOverflow](https://stackoverflow.com/questions/17375708/how-to-create-an-html-button-that-acts-like-a-link-to-an-item-on-the-same-page). I had put the a href inside the button, but it obviously had to be the other way around. In HTML validation, this comes out as a error - but for now I just need to leave it like this as it doesen`t work if I turn them back to the original code.

* The addEventListener in JS file would not work. Corrected typo in relative path after hours with panic not finding the bug.

* The Memory Game section would not stay in place as a "whole box". After lots of google and coffe break without making it right I moved on. When I jumped back to take a new look I discovered that I had not added height and width..

* The biggest bug in this project was that the Memory Game would not work correctly. The boxes turn, but they do not turn back, and sometimes one of the cards fly up on the top-left corner for some reason.  
  
  How I solved it:
  
  After one and a half day of trying to figure out the issue using google, youtube and looking at other peoples code I was not getting any wiser on why it did not work. I asked my mentor as I had my middle call. She recomend to look some more on other peoples code, so I did. After another day of looking and trying out different methods from others, I lost track of what I was doing, and decided to use version controll and go back for my original code. When copy-paste that in and reload - it worked..! I really dont know why it did not work in the first place, but the feeling when it worked was priceless!  

* Moves count wouldent go to zero when pushed on reset button. Changed the variables names to the same as [Michelle3334](https://github.com/Michelle3334/freaky_memory/blob/master/assets/js/script.js). The bug was probably just a typo. 

* The GitHub icon would not be styled. I eventually understood that to style it I needed to target the fa-github-square directly.

* After middle call with mentor, she recommended to use the height 100vh to make the content look nicer. I first did it on all three sctions, main, play and contact and it looked really nice. When pushed play, you got the play section on the whole screen. The same on contact. It worked on all screen sizes in inspection, but when I was dobble checking the responsive design, everything was floating around! As I was initially happy with the first layout, I made the decision to just keep the height 100vh on the main page with the header and buttons, and remove it again on the other two. 