// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");

}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(name){
    const copyOfcats = [...cats, name]
    return copyOfcats
}

function prependCat(name){
    const copyOfcats = [name, ...cats]
    return copyOfcats
}

function removeLastCat(name){
    const copyOfcats = [...cats]
    copyOfcats.pop(name)
    return copyOfcats
}

function removeFirstCat(name){
    const copyOfcats = [...cats]
    copyOfcats.shift(name)
    return copyOfcats
}