function getLocal()
{
  var notes = localStorage.getItem("noteList");

  if(notes != null)
  {
    return JSON.parse(notes);
  }
  else
   {
     return [];
  }
}

function setLocal(inputText, inputDate, inputImprtant, inputIcon)
{
  var origNotes = getLocal();
  var newNote = {
    text:      inputText,
    date:      inputDate,
    important: inputImprtant,
    icon:      inputIcon
  };

  origNotes.push(newNote);

  var newNotes = JSON.stringify(origNotes);

  localStorage.setItem("noteList", newNotes);
}

setLocal("Cry(me a river)", "2018/03/07 10:30:01", true, "tint");

window.onload = function()
{
  var notes = getLocal()

  var ulELM = document.querySelector('ul');

  for(var i = 0; i < notes.length; i++)
  {
    var liELM = document.createElement('li');
    var pELM = document.createElement('p');

    pELM.innerHTML = notes[i].text;

    liELM.appendChild(pELM);

    ulELM.appendChild(liELM);
  }
}
