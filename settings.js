function changeTheme(theme)
{
    //alert("change theme")
    if(theme === "nautical")
    {
        //alert("nautical");
        background_color = "rgb(11, 4, 28)";
        light_bg_color = "rgb(60, 20, 87)";
        title_color = "rgb(255, 221, 0)";
        text_color = "rgb(101, 101, 209)";
        alt_text_color = "rgb(255,255,255)";
        current_theme = "nautical";
        localStorage.current_theme =  "nautical";
    }
    else if(theme === "dim")
    {
        //alert("dim");
        background_color = "rgb(182, 181, 181)";
        light_bg_color = "rgb(200, 200, 200)";
        title_color = "rgb(0, 0, 0)";
        text_color = "rgb(101, 101, 101)";
        alt_text_color = "rgb(255,255,255)";
        current_theme = "dim";
        localStorage.current_theme =  "dim";
    }
    else if (theme === "matrix")
    {
        background_color = "rgb(0, 0, 0)";
        light_bg_color = "rgb(13, 33, 18)";
        title_color = "rgb(21, 209, 40)";
        text_color = "rgb(3, 84, 11)";
        alt_text_color = "rgb(7,224,28)";
        current_theme = "matrix";
        localStorage.current_theme =  "matrix";
    }
    loadAll();
}

function changeDisplaySetting(setting)
{
    if(setting === "wpm")
    {
        liveWPM = !liveWPM;
        localStorage.wpm=liveWPM;
        if(liveWPM){liveWPMButton.innerHTML = "ON";}
        else{liveWPMButton.innerHTML = "OFF";}
    }
    else if(setting === "percent")
    {
        livePercent = !livePercent;
        localStorage.percent=livePercent;
        if(livePercent){livePercentButton.innerHTML = "ON";}
        else{livePercentButton.innerHTML = "OFF";}
    }
}