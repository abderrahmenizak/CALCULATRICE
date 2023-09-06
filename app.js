var nb1 = 0, nb2 = 0;

var op = 'null';
var cpt = 0;

function ajouteChiffre(form,val)
{
	form.texte.value += val;
}

function ajoutePoint(form)
{
	if (form.texte.value.length == 0)
	{
		form.texte.value = "0.";
	}
	else 
	{
		var j = 0;
		for (var i=0;i<form.texte.value.length;i++)
		{
			if (form.texte.value.charAt(i) == ".")
			{
				j = 1;
				break;
			}
		}
		(j == 0) ? (form.texte.value += ".") : alert("D351j340 entr351.");
	} 
}

{
	if (op == 'null')
	{
		op = opType;
	}
	else
	{
	
		form.texte.value = "";
	}
}

function raz(form)
{
	form.texte.value = "";
	form.affichage.value = "";
	nb1 = 0, nb2 = 0;
	op = 'null';
	cpt = 0;
}

function store(form)
{
	if ((form.texte.value != "") && (op == 'null') && (cpt == 0)) 
	{
		nb1 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	else if ((form.texte.value != "") && (op != 'null') && (cpt == 1))
	{
		nb2 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	
}

function storeEq(form)
{
	if (cpt == 1)
	{
		store(form);
	}
}

function calc(form)
{
	
	if (cpt < 2) 
	{
		alert("Il faut deux nombres pour pouvoir faire un calcul.");
	}
	else
	{
		if (op == "somme")
		{
			form.affichage.value = parseInt(nb1) + parseInt(nb2);
		}
		else if (op == "soustraction")
		{
			form.affichage.value = parseInt(nb1) - parseInt(nb2);
		}
		else if (op == "multiplication")
		{
			form.affichage.value = nb1 * nb2;
		}
		else if (op == "division")
		{
			if (nb2 == 0)
			{
				
			}
			else
			{
				form.affichage.value = nb1 / nb2;
			}
		}
	}
}