var submit=document.getElementById("sub")
submit.addEventListener("click", fireapi)
const apiKey = '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';
// function fireapi(){
//     var content=document.getElementById("input").value;
//     const apiKey = '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';
//     const prompt = content+'\n\nTl;dr';

//     fetch('https://api.openai.com/v1/completions', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiKey}`,
//   },
//   body: JSON.stringify({
//     model: 'text-davinci-003',
//     prompt,
//     temperature: 0.7,
//     max_tokens: 60,
//     top_p: 1.0,
//     frequency_penalty: 0.0,
//     presence_penalty: 1
//   })
// })
// .then(response => response.json())
// .then(data => datum=data)
// .catch(error => console.error(error));

// }

const fireapi = async () => {
    var content=document.getElementById("input").value;
    const prompt = content+'\n\nTl;dr';
    const result = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt,
          temperature: 0.7,
          max_tokens: 1000,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 1
        })
      });
  //the resultant json is stored into the data
  const data = await result.json();
  return data;
  };
  
    
  const datum = await fireapi();
  var summary=datum.choices.text;
  summary!=null? document.getElementById("input").value=summary:document.getElementById("status").innerHTML+="<h1>Error Occured...</h1>";