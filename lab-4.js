function view (counter) {

    a = "Count: " + counter + "\n" + "(-) (+)\n" + "(q) for quit\n";
    return a;

}

function update (msg, counter) {

    if (msg == "-") {
        return counter - 1;
    }
    else if (msg == "+") {
        return counter + 1;
    }
    else {
        return counter;
    }

}

function app (counter) {
    msg = "a";  
    while (msg != "q") {
        const currentView = view(counter);
        console.log(currentView);
        var a = prompt("What would you like to do? ");
        console.clear();
        counter = update(a, counter);
    }
}

app(0);