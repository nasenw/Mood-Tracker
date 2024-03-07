var moodSlider = document.getElementById("customRange3");
var moodEmoji = document.getElementById("moodSliderEmoji");
var moodSliderMood = document.getElementById("moodSliderMood");
console.log(moodSlider);

moodSlider.oninput = function() {
    if (moodSlider.value == 0)
    {
        moodSliderEmoji.innerHTML = "😠";
        moodSliderMood.innerHTML = "Angry!";
    }
    if (moodSlider.value == 1)
    {
        moodSliderEmoji.innerHTML = "😞";
        moodSliderMood.innerHTML = "Sad";
    }
    if (moodSlider.value == 2)
    {
        moodSliderEmoji.innerHTML = "😒";
        moodSliderMood.innerHTML = "Annoyed";
    }
    if (moodSlider.value == 3)
    {
        moodSliderEmoji.innerHTML = "😐";
        moodSliderMood.innerHTML = "Neutral";
    }
    if (moodSlider.value == 4)
    {
        moodSliderEmoji.innerHTML = "😗";
        moodSliderMood.innerHTML = "Decent";
    }
    if (moodSlider.value == 5)
    {
        moodSliderEmoji.innerHTML = "🙂";
        moodSliderMood.innerHTML = "Good";
    }
    if (moodSlider.value == 6)
    {
        moodSliderEmoji.innerHTML = "😄";
        moodSliderMood.innerHTML = "Great!";

    }
    
}