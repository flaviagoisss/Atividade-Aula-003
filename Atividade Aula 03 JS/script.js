var  signo  =  prompt ( 'Digite seu signo: ' )

switch  (signo)  {
    case  signo  =  'Áries' :
       console.log( 'Áries - de 21 de março a 20 de abril' ) ;
       break;
    case  signo  =  'Touro' :
        console.log( 'Touro - de 21 abril a 20 maio' ) ;
        break;
     case  signo  =  'Gemeos' :
        console.log( 'Gemeos - de 21 maio a 20 junho' ) ;
        break;
     case  signo  =  'Câncer' :
        console.log( 'Câncer - de 21 de junho a 22 de julho' ) ;
        break;
      case  signo  =  'Leão' :
        console.log( 'Leão - de 23 de julho a 22 de agosto' ) ;
        break;
     case  signo  =  'Virgem' :
        console.log( 'Virgem - de 23 de agosto a 22 de setembro' ) ;
        break ;
    default:
        console.log( 'Signo não registrado' ) ;
        break ;
 }