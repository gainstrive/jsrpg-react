import React from "react";
import Navigation from "./components/Main/Navigation/Navigation";
import Footer from "./components/Main/Footer/Footer";
class PatchNotes extends React.Component {
  render() {
    return (
      <div classNameName="patchNotesWrapper">
        <Navigation />
        <div className="container text-center">
          <h1>PATCH-NOTES:</h1>

          <hr />
          <h3>V1.2-alpha (01/09/2020):</h3>
          <div className="sectionBg">
            <u>Added autoplay functionality to the following screens:</u>
            <p className="text-center">
              <ul className="text-left">
                <li>
                  shop.js (if the player has enough gold, the AI will attempt to
                  buy health)
                </li>
                <li>
                  well.js (the AI interacts with the well, either collecting
                  gold or healing)
                </li>
                <li>
                  riddle.js (the AI will attempt to solve the riddle, awarding
                  gold/exp)
                </li>
                <li>
                  scroll.js (the AI will always attempt to decipher the scroll)
                </li>
                <li>
                  tutorial.js (the AI will skip the tutorial if the user opts
                  out in options menu)
                </li>
                <li>
                  tutorialFight.js (the AI will complete the encounter and redir
                  to traverse.html)
                </li>
              </ul>
            </p>
            <pre className="text-left ascii">
              {String.raw`
                ____   
               /___/\_
              _\   \/_/\__
            __\       \/_/\            BUG FIXES (V1.2-alpha):
            \   __    __ \ \                Fixed recursive memory-leak on traverse.js
           __\  \_\   \_\ \ \   __        where autoplay x/y coords were not calculated 
          /_/\\   __   __  \ \_/_/\       before autoMove() is fired. The function will
          \_\/_\__\/\__\/\__\/_\_\/       now attempt to generate new coords if the
            \_\/_/\       /_\_\/         values of either x or y are undefined.
                \_\/       \_\/
                `}
            </pre>
          </div>
            <hr />
        <h3>V1.1-alpha (01/06/2020):</h3>
        <div className="sectionBg">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; If you're reading this changelog, HAPPY NEW
            YEARS INTERNET STRANGER! 2020 is going to be a great year for JSRPG,
            and this is the first of many new updates to the game!
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; In this patch, I've added a couple of neat
            features for players to enjoy. If you look in the options menu (now
            also located on the login screen), you'll notice a new option called
            "autoplay toggle". Enabling this feature will put JSRPG into a state
            in which IT PLAYS ITSELF! The "computer" will take control of the
            player's actions playing through JSRPG just as YOU would. It will
            move the player through the overworld, engage in combat scenarios,
            and interact with non-combat room events! This feature is in it's
            infancy, but as the game develops, the AI will become more optimal
            and "better" at making choices!
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <b>
              This release is meant to be a proof-of-concept/tech demo
              presentation, NOT a major release.
            </b>
          </p>
          <p align="center">
            ------------------------------------------------------------
          </p>
          <h3>New Features:</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <b>
              <u>
                You can now enable AUTOPLAY in the options menu! The "computer"
                AI can:
              </u>
            </b>
            <br />
            <ul className="text-left">
              <li>
                <b>Navigate the overworld, just as YOU would!</b>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp; Instead of the player pressing the
              movement keys to get around, the AI will fixate on a particular
              pair of coordinates (X,Y) that correspond to a random room
              encounter. It will intelligently turn left, right, and move
              forward, triggering animations. The AI will first move to the
              chosen X coordinate. Once it reaches that room tile, it will begin
              movement towards the chosen Y coordinate. On the way to it's
              destination, the computer will trigger other encounters if it
              moves over them along it's path!
              <li>
                <b>Choose actions in combat!</b>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp; Upon entering a combat encounter, the RNG
              turn decider will determine who goes first (the computer or the
              enemy AI). Once it is the players turn, it will execute actions in
              turn order. Currently, because blocking on your turn is NOT
              optimal and has little gameplay value, the computer has a 1/4
              chance of choosing block. The algorithm will become more advanced
              when new gameplay options become available (e.g using items,
              spells, etc...)!
              <li>
                <b>Interact with non-combat encounters!</b>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp; Depending on the encounter, the AI will
              determine the optimal choice out of all actions. It will then
              proceed through the encounter attempting to finish it.{" "}
              <u>
                It will ONLY choose to abandon an encounter if there is no
                chance of a positive outcome, assuming that there is an option
                to abandon.
              </u>
              .
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <b>
              <u>Added a new combat encounter!</u>
            </b>
            <br />
            <br />
            <ul className="text-left">
              <li>
                <b>BEWARE THE PUMPKING!</b>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp; Most farmers in nearby towns have been
              dealing with a deadly famine for seasons without end. However,
              there are a few whose farms are seemingly unaffected; their land
              remaining fertile while others had withered long ago. Local
              legends (if you're one to believe in legends) speak of a dark pact
              they made with a spirit of nature, promising healthy crops in
              exchange for a human sacrifice each hallows eve. Some say it takes
              on the form of a seasonal gourd, brought to life and seeking souls
              of wanderers to drain. It's the Great Pumpkin, Charlie Brown!
            </ul>
          </p>
        </div>
        <Footer />
      </div>
      </div>
    );
  }
}
export default PatchNotes;
