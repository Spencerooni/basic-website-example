
function somethingIsChanging(theSomething)
{
	console.log(theSomething);
}

function filterList()
{
	var textToSearchFor = document.getElementById('search').value;
	var peopleList = document.getElementById('people-list');
	var people = peopleList.getElementsByTagName('li');

	for (var i = 0; i < people.length; i++)
	{
		if (people[i].innerHTML.toLowerCase().indexOf(textToSearchFor.toLowerCase()) > -1)
		{
			people[i].style.display = '';
		}
		else
		{
			people[i].style.display = 'none';
		}

	}
}