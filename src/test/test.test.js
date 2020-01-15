import chai, { expect, assert } from "chai";
import "./setup";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});

describe("#Drum Machine tests", function() {
  var e = document.querySelectorAll(".drum-pad"),
    t = document.querySelectorAll(".drum-pad .clip");
  function r(e, t, r) {
    var a = document.createEventObject
      ? document.createEventObject()
      : document.createEvent("Events");
    a.initEvent && a.initEvent(t, !0, !0),
      r &&
        ((a.keyCode = r),
        (a.which = r),
        (a.key = String.fromCharCode(r)),
        (a.code = "Key".concat(a.key)),
        (a.charCode = "keypress" === t ? r : 0)),
      e.dispatchEvent ? e.dispatchEvent(a) : e.fireEvent("on" + t, a);
  }
  function a(e) {
    r(e, "mousedown", 0), r(e, "click", 0), r(e, "mouseup", 0);
  }
  describe("#Technology Stack", function() {
    it("You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!", function() {
      return !0;
    });
  }),
    describe("#Tests", function() {
      after(function() {
        t.forEach(function(e) {
          e.pause();
        });
      }),
        it('I should be able to see an outer container with a\n      corresponding id="drum-machine" that contains all other elements', function() {
          assert.isNotNull(document.getElementById("drum-machine")),
            Object(assert)(
              document.querySelectorAll(
                "#drum-machine div, #drum-machine .drum-pad, #drum-machine #display, #drum-machine .clip"
              ).length,
              "The #drum-machine element must contain other elements "
            );
        }),
        it('Within #drum-machine I can see an element with\n      corresponding id="display".', function() {
          assert.isNotNull(document.getElementById("display"));
        }),
        it('Within #drum-machine I can see 9 clickable "drum pad"\n      elements, each with a class name of "drum-pad", a unique id that describes\n      the audio clip the drum pad will be set up to trigger, and an inner text\n      that corresponds to one of the following keys on the keyboard: Q, W, E, A,\n      S, D, Z, X, C. The drum pads MUST be in this order.', function() {
          var t = [];
          e.forEach(function(e) {
            t.push(e.innerText.replace(/\s/g, "")),
              assert.strictEqual(
                e.hasAttribute("id"),
                !0,
                "Each .drum-pad element must have an id attribute "
              );
          }),
            assert.isAtLeast(
              e.length,
              9,
              'There should be at least 9 elements with the class "drum-pad" '
            ),
            assert.includeMembers(
              t,
              ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
              'Each .drum-pad\'s inner text should be one of the following letters (all letters must be represented): "Q", "W", "E", "A", "S", "D", "Z", "X", "C" '
            );
        }),
        it('Within each .drum-pad, there should be an HTML5 <audio>\n      element which has a src attribute pointing to an audio clip, a class name\n      of "clip", and an id corresponding to the inner text of its parent\n      .drum-pad (e.g. id="Q", id="W", id="E" etc.).', function() {
          assert.isAtLeast(
            t.length,
            9,
            'Each .drum-pad should have a child element with the class of "clip" '
          ),
            t.forEach(function(e) {
              assert.strictEqual(
                e.nodeName,
                "AUDIO",
                "Each .clip element should be an HTML5 <audio> element "
              ),
                assert.strictEqual(
                  e.hasAttribute("src"),
                  !0,
                  'Each <audio> element should have a "src" attribute '
                ),
                assert.strictEqual(
                  e.hasAttribute("id"),
                  !0,
                  'Each <audio> element should have an "id" attribute '
                ),
                assert.strictEqual(
                  e.id,
                  e.parentElement.innerText.replace(/\s/g, ""),
                  "Each <audio> element should have an id equal to its parent .drum-pad's inner-text "
                );
            });
        }),
        it("When I click on a .drum-pad element, the audio clip\n      contained in its child <audio> element should be triggered.", function() {
          assert.isAtLeast(t.length, 9, "Audio elements do not exist "),
            t.forEach(function(e) {
              e.pause(),
                a(e.parentElement),
                assert.isFalse(
                  e.paused,
                  'The <audio> element with id="' +
                    e.id +
                    '" does not play when the ' +
                    e.id +
                    " .drum-pad is clicked "
                );
            });
        }),
        it('When I press the trigger key associated with each\n      .drum-pad, the audio clip contained in its child <audio> element should be\n      triggered (e.g. pressing the Q key should trigger the drum pad which\n      contains the string "Q", pressing the W key should trigger the drum pad\n      which contains the string "W", etc.).', function() {
          var e = [81, 87, 69, 65, 83, 68, 90, 88, 67];
          assert.isAtLeast(t.length, 9, "Audio elements do not exist "),
            t.forEach(function(t, a) {
              t.pause(),
                r(t.parentElement, "keydown", e[a]),
                r(t.parentElement, "keypress", e[a]),
                r(t.parentElement, "keyup", e[a]),
                assert.isFalse(
                  t.paused,
                  "No audio plays when the " + t.id + " key is pressed "
                ),
                t.pause();
            });
        }),
        it("When a .drum-pad is triggered, a string describing the\n      associated audio clip is displayed as the inner text of the #display\n      element (each string must be unique).", function() {
          var t = [];
          e.forEach(function(e) {
            a(e), t.push(document.getElementById("display").innerText);
          }),
            (t = t.filter(function(e, r) {
              return t[0] === t[r];
            })),
            assert.isTrue(
              1 === t.length,
              'Each time a drum pad is triggered, a unique string should be displayed in the element with the id "display"'
            );
        });
    });
});
