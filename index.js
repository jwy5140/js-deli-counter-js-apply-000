var n = 0;

function takeANumber(deliLine)
{
  n++;
  deliLine.push(n);
  return "Now serving: " + n;
}

function nowServing(deliLine)
{
  if (deliLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
  var serve = "Currently serving " + deliLine.shift() + ".";
  return serve;
  }
}

function currentLine(deliLine)
{
  var line = [];
  
  if (deliLine.length === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    for (var n = 0; n < deliLine.length; n++)
    {
      line.push(n+1 + ". " + deliLine[n]);
    }
    var string = line.join(", ");
    
    return "The line is currently: " + string;
  }
}
