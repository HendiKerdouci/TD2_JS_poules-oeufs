

var listPoules =[];
var caTotal = 0;




function ajouter()
{
    document.getElementById('formulaire').style.display="block";
    document.getElementById('tableau').style.display="none";

    var race = document.getElementById('race').value;
    var nom = document.getElementById('nom').value;
    var couleurPoule = document.getElementById('couleurPoule').value;
    var couleurOeuf = document.getElementById('couleurOeuf').value;
    var nbOeuf = document.getElementById('nbOeuf').value;
    var nbOeufS;
    var nbOeufM;
    var nbOeufA;
    var ca;
    

    if(race == '')
    {
        document.getElementById('erreurRace').style.display="inline-block";
    }
    else
    {
        document.getElementById('erreurRace').style.display="none";
    }

    if(nom == '')
    {
        document.getElementById('erreurNom').style.display="inline-block";
    }
    else
    {
        document.getElementById('erreurNom').style.display="none";
    }

    if(couleurPoule == '')
    {
        document.getElementById('erreurCouleurPoule').style.display="inline-block";
    }
    else
    {
        document.getElementById('erreurCouleurPoule').style.display="none";
    }

    if(couleurOeuf == '')
    {
        document.getElementById('erreurCouleurOeuf').style.display="inline-block";
    }
    else
    {
        document.getElementById('erreurCouleurOeuf').style.display="none";
    }

    if(nbOeuf == '')
    {
        document.getElementById('erreurNbOeuf').style.display="inline-block";
    }
    else
    {
        document.getElementById('erreurNbOeuf').style.display="none";
    }

    if((race != '') && (nom != '') && (couleurPoule != '') && (couleurOeuf != '') && (nbOeuf != ''))
    {
        
        var getPoule = listPoules.find(alias => alias.nom === nom);
        if (getPoule)
        {
            document.getElementById('erreurNom').style.display="inline-block";
            document.getElementById('erreurNom').innerHTML=" *Cette poule est déjà enregistrée";
            document.getElementById('succes').innerHTML = '';
        }
        else
        {

            nbOeufS = (nbOeuf*7); 
            nbOeufM = Math.ceil(nbOeuf*7*4.33*0.95); 
            nbOeufA = (nbOeufM*12); 

            if (couleurOeuf == 'beige')
            {
                ca = nbOeufA;
            }

            if (couleurOeuf == 'bleu')
            {
                ca = nbOeufA*1.2;
            }

            if (couleurOeuf == 'vert')
            {
                ca = nbOeufA*1.3;
            }

            if (couleurOeuf == 'brun')
            {
                ca = nbOeufA*2;
            }

            if (couleurOeuf == 'blanc')
            {
                ca = nbOeufA*1.6;
            }

            listPoules.push
            (
                {
                    race: race,
                    nom: nom,
                    couleur: couleurPoule,
                    couleurOeuf: couleurOeuf,
                    nbOeufJ: nbOeuf,
                    nbOeufS: nbOeufS,
                    nbOeufM: nbOeufM,
                    nbOeufA: nbOeufA,
                    ca: ca.toFixed(2)
                }
            );

            caTotal += ca;
            document.getElementById('succes').innerHTML = 'La poule a bien été ajoutée !';

            document.getElementById('race').value ='';
            document.getElementById('couleurPoule').value ='';
            document.getElementById('couleurOeuf').value ='';
            document.getElementById('nbOeuf').value ='';
            document.getElementById('race').focus();
        }
    
    }
    else{
        document.getElementById('succes').innerHTML = '';
    }
    console.log(listPoules);
}





function afficher()
{
    document.getElementById('formulaire').style.display="none";
    document.getElementById('tableau').style.display="block";

    var text = '';

    listPoules.sort((a, b) => b.ca - a.ca); 

    for (res of listPoules)
    {
        text += '<tr>';
            text += '<td>' +res.race+ '</td>';
            text += '<td>' +res.nom+ '</td>';
            text += '<td>' +res.couleur+ '</td>';
            text += '<td>' +res.couleurOeuf+ '</td>';
            text += '<td>' +res.nbOeufJ+ '</td>';
            text += '<td>' +res.nbOeufS+ '</td>';
            text += '<td>' +res.nbOeufM+ '</td>';
            text += '<td>' +res.nbOeufA+ '</td>';
            text += "<td class='caT'>" +res.ca+ '</td>';
        text += '</tr>';  
    }
    

    document.getElementById('ajoutPoule').innerHTML = text;
    document.getElementById('caSpan').innerHTML = caTotal.toFixed(2) + ' €';

}