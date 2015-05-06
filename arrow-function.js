var person = {
    nom : 'jojo',
    greet : function() {
        process.nextTick(() => {
            console.log('this works:');
            console.log('hi', this.nom);
        });
    }
};

person.greet();

// A gotcha!

person = {
    nom : 'jojo',
    greet : () => {
        process.nextTick(() => {
            console.log('this is a gotcha:');
            console.log('hi', this.nom);
        });
    }
};

person.greet();
