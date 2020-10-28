export default function() {
    class Animal{}

    class Bird extends Animal {
        chirp(){}
    }

    class Crow extends Bird {
        caw(){}
    }

    function chirp(bird: Bird) {
        bird.chirp();
        return bird;
    }

    // AnimalはBirdのサブタイプではないため実行できない
    // chirp(new Animal);
    chirp(new Bird);
    chirp(new Crow);

    function clone(f: (b: Bird) => Bird): void {
        
    }

    function birdToAnimal(bird: Bird): Animal {
        return new Animal
    }

    function birdToBird(bird: Bird): Bird {
        return new Bird
    }

    function birdToCrow(bird: Bird): Crow {
        return new Crow
    }

    // 戻り値がサブクラスではないといけない
    // clone(birdToAnimal);
    clone(birdToBird);
    clone(birdToCrow);


    function animalToBird(animal: Animal): Bird {
        return new Bird
    }

    function crowToBird(crow: Crow): Bird {
        return new Bird
    }

    clone(animalToBird);
    // 引数はスーパークラスでないといけない
    // clone(crowToBird);
}