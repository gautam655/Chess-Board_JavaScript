var board_size = 8;
  function print(data)
  {
    document.write("<p>");
    for (let i=1;i<=board_size;i++)
    {
        for (let j=1;j<=board_size;j++)
        {
            if ((i+j)%2==0)
            {
              document.write(" * ");
            }
            else
            {
              document.write(" # ");
            }
        }
        newLine();
    }
    document.write("</p>");
  }

  function newLine()
  {
    document.write("<br>");
  }
  let b = print(8);
  document.getElementById("demo").innerHTML = b;
