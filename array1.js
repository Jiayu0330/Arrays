  var animals = ["dragon","sea-otter","bear","bee","unicorn","chicken","deer","dolphin","fox","koala"];
  document.write("<ul>");
  
  animals.forEach(function(item){
    document.write("<li>" + item + "</li>")
  });
  
  document.write("</ul>");
