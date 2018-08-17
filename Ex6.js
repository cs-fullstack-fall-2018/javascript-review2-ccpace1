class Book{
    constructor(name,rating,release){
        this.name = name;
        this.rating =rating;
        this.release = release
    }
    printAll(){
        document.write(this.name);
        document.write(this.rating);
        document.write(this.release)
    }
}

function main(){
    var linuxBible = new Book("Linux Bible", 4, 2015);
    var commandLine = new Book("Command Line and Shell Scripting", 5, 2015)
    console.log(linuxBible.printAll());
    console.log(commandLine.printAll());
}

main();