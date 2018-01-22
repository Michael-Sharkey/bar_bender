$(document).ready(function(){
  const navButton = document.getElementById('nav-button-tour');
  const navMenu = document.getElementById('nav-menu');
  const tourButton = document.getElementById('tour-button');

  function toggleNav() {
    if (navMenu.style.paddingRight !== "150px"){
      navMenu.style.paddingRight = "150px";
    } else if (navMenu.style.paddingRight === "150px"){
      navMenu.style.paddingRight = "0px";
    };
  };

  var tour = {
    id: "tour",
    steps: [
      {
        title: "The Menu Button",
        content: "Ever lamented the fact that fitness apps only include weight training functionality as a very obvious afterthought?  It's been nearly impossible to keep track of sets, reps, and weight in a simple format.  This is your menu button - your home base.  Go ahead and click it.",
        target: document.querySelector("#nav-button-tour"),
        placement: "top",
        fixedElement: true,
        showNextButton: false,
        nextOnTargetClick: true,
        width: 200,
        xOffset: -170,
        arrowOffset: 180
      },
      {
        title: "Home",
        content: "Gets you back to your dashboard from anywhere else.",
        target: document.querySelector("#tour-home"),
        placement: "left",
        fixedElement: true,
        showNextButton: false,
        nextOnTargetClick: true,
        width: 200,
        xOffset: -150
      },
      {
        title: "User Information",
        content: "Update your contact information, deactivate, etc.",
        target: document.querySelector("#tour-info"),
        placement: "left",
        fixedElement: true,
        showNextButton: false,
        nextOnTargetClick: true,
        width: 200
      },
      {
        title: "Log Out",
        content: "End your current session",
        target: document.querySelector("#tour-logout"),
        placement: "left",
        fixedElement: "bottom",
        showNextButton: false,
        nextOnTargetClick: true,
        width: 200
      },
      {
        title: "Eat",
        content: "This isn't a nutrition app, but we want you take pay attention to what you're eating.  You take or upload a photo, and give it a thumbs up if it was healthy for you.  It's that simple.",
        target: document.querySelector("#tour-add-meal"),
        placement: "left",
        fixedElement: true,
        showNextButton: false,
        nextOnTargetClick: true,
        width: 200
      },
      {
        title: "Meal Carousel",
        content: "Your meals show up here.  If it's healthy, it's tinted green.  If it's not, it's tinted red.  Too much red, and you're probably not going to be happy with your results.",
        target: document.querySelector("#tourMeals"),
        placement: "top",
        width: 200
      },
      {
      title: "Workout",
      content: "The reason you're here!  Track your exercises, sets, reps, then hit submit.  That's all there is to it.",
      target: document.querySelector("#tour-workout"),
      placement: "left",
      fixedElement: true,
      showNextButton: false,
      nextOnTargetClick: true,
      width: 200
    },
    {
      title: "Daily Maxes",
      content: "If you're like me - writing down what you do in your workouts isn't really the problem.  It's going back to actually see if you're making progress.  We've got that covered.  The first chart here shows you your daily maximum weight used on the big four lifts (Squat / Bench / Deadlift / Overhead).  The size of the circle shows you how many reps you did on your max set. As you can see here, our sample use has made some good, steady progress over the year.",
      target: document.querySelector("#tourMaxes"),
      placement: "top",
      width: 400
    },
    {
      title: "Accumulated Volume",
      content: "Size and strength ultimately boil down to volume (weight x repetitions).  The more volume you do, the bigger and stronger you get.  But you also need to keep it balanced.  As you see here, our sample user is doing a lot more pushing than she is pulling.  This could lead to injury.  Strive to maintain a reasonable balance between the sizes and shapes of the slices of this pie!",
      target: document.querySelector("#tourVolume"),
      placement: "top",
      width: 400
    },
    {
      title: "Rep Ranges",
      content: "Doing too many maximum effort singles?  You're going to tear a muscle.  Addicted to the pump?  You'll never get stronger.  Try to maintain a reaonsable balance between strength and hypertrophy rep ranges.  Generally, this chart should skew towards reps in the 4-10 range.  Our user here neither goes heavy enough on core work, nor lightens up on hinging (hip exenstion) movements.  This is a recipe for lower back pain.",
      target: document.querySelector("#tourReps"),
      placement: "top",
      width: 400
    },
    {
      title: "Let's get strong!",
      content: "Ready to sign up?  You have nothing to lose but bodyfat.",
      target: document.querySelector("#tour-sign-up"),
      placement: "left",
      fixedElement: true,
      showNextButton: true,
      nextOnTargetClick: true,
      width: 200,
      onNext(){
        tour.end();
      }
    }
  ],
  };

  tourButton.addEventListener('click', function(){
    hopscotch.startTour(tour);
  })

  navButton.addEventListener('click', toggleNav);

});
