function recogerDatos(){
    
    let dniNumber = document.getElementById('dni-number').value;
    console.log(dniNumber);

    if(dniNumber.length != 9){
        alert('tiene que tener 9 caracteres');
    }else{
        console.log(dniNumber);
        dniNumbers = dniNumber.substr(0,8)
        dniLetter = dniNumber.substr(8)
        console.log(dniNumbers);
        console.log(dniLetter);

        let resto = dniNumbers%23;

        let letra;
        switch(resto){
            case 0: letra = 't';
            break;
            case 1: letra = 'r';
            break;
            case 2: letra = 'w';
            break;
            case 3: letra = 'a';
            break;
            case 4: letra = 'g';
            break;
            case 5: letra = 'm';
            break;
            case 6: letra = 'y';
            break;
            case 7: letra = 'f';
            break;
            case 8: letra = 'p';
            break;
            case 9: letra = 'd';
            break;
            case 10: letra = 'x';
            break;
            case 11: letra = 'b';
            break;
            case 12: letra = 'n';
            break;
            case 13: letra = 'j';
            break;
            case 14: letra = 'z';
            break;
            case 15: letra = 's';
            break;
            case 16: letra = 'q';
            break;
            case 17: letra = 'v';
            break;
            case 18: letra = 'h';
            break;
            case 19: letra = 'l';
            break;
            case 20: letra = 'c';
            break;
            case 21: letra = 'k';
            break;
            case 22: letra = 'e';
            break;
        }

        if( letra === dniLetter){
            alert('el DNI es válido!');
        } else{
            alert('el DNI no es válido!');
        }

    }
    


}



